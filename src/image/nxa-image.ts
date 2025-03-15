import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {cropImage, cssToJson} from "./nxa-image.utils";
import {defaultSlideshowInterval, SlideShowConfig, SlideShowTransitions} from "./nxa-image.types";
import {style} from "./style";

@customElement('nxa-image')
export class NxaImage extends LitElement {
    static styles = style;

    @property({type: Object})
    globalDataCrop: Record<string, string> = {};

    @property({type: Array})
    childDataCrop: Record<string, string>[] = [];

    @property({type: Array})
    dataFeatures: string[] = [];

    @property({type: Object})
    slidesShowConfig: SlideShowConfig = {};

    @property({type: Boolean})
    fullSize = false;

    @state()
    private slideInterval?: number;

    constructor() {
        super();
        // Set default dimensions if not explicitly set
        if (!this.style.width) {
            this.style.width = '100%';
        }
        if (!this.style.height) {
            this.style.height = '100%';
        }
    }

    connectedCallback() {
        super.connectedCallback();

        this.globalDataCrop = cssToJson(this.getAttribute("data-crop") || "");

        // Get child data-crop attributes
        Array.from(this.children).forEach((child, index) => {
            this.childDataCrop[index] = cssToJson(child?.getAttribute("data-crop") || "");
        });

        this.dataFeatures = this.getAttribute("data-features")?.split(" ") || [];
        this.initSlidesShowConfig();

        this.fullSize = this.dataFeatures.includes("fullsize");

        // Wait for layout to complete before measuring
        requestAnimationFrame(() => {
            this.cropImages();

            // Set up size change detection
            const resizeObserver = new ResizeObserver(() => {
                this.cropImages();
            });
            resizeObserver.observe(this);
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }

    firstUpdated() {
        if (this.slidesShowConfig.enabled) {
            this.attachSlideshowStyles();
            this.initSlideshowInterval();
        }

        if (this.fullSize) {
            this.initFullSize();
        }
    }

    render() {
        return html`
      <slot @slotchange=${this.handleSlotChange}></slot>
      ${this.slidesShowConfig.showArrows && this.slidesShowConfig.enabled ? html`
        <div class="navigation-arrows">
          <button class="arrow-button prev" @click=${this.prevSlide}>&lt;</button>
          <button class="arrow-button next" @click=${this.nextSlide}>&gt;</button>
        </div>
      ` : ''}
    `;
    }

    handleSlotChange() {
        this.childDataCrop = [];
        Array.from(this.children).forEach((child, index) => {
            this.childDataCrop[index] = cssToJson(child?.getAttribute("data-crop") || "");
        });

        this.cropImages();

        if (this.slidesShowConfig.enabled) {
            this.attachSlideshowStyles();
        }

        if (this.fullSize) {
            this.initFullSize();
        }
    }

    initSlidesShowConfig() {
        this.slidesShowConfig.enabled = this.dataFeatures.includes("slideshow");
        this.slidesShowConfig.interval = defaultSlideshowInterval;
        this.slidesShowConfig.pauseOnHover = this.dataFeatures.includes("pauseOnHover");
        this.slidesShowConfig.transition = SlideShowTransitions.filter(t => this.dataFeatures.includes(t))[0] || "fade";
        this.slidesShowConfig.showThumbnails = this.dataFeatures.includes("thumbnails");
        this.slidesShowConfig.showArrows = this.dataFeatures.includes("arrows");
        this.slidesShowConfig.showIndicators = this.dataFeatures.includes("indicators");
        this.slidesShowConfig.showCaptions = this.dataFeatures.includes("captions");
    }

    initFullSize() {
        Array.from(this.children).forEach((child) => {
            if (child instanceof HTMLElement) {
                child.style.cursor = "pointer";
                child.addEventListener("click", (event) => {
                    event.stopPropagation();

                    const img = child instanceof HTMLImageElement ? child : this.querySelector("img");
                    if (img) {
                        if (document.querySelector('.nxa-fullsize-container')) {
                            return;
                        }

                        // Create style element
                        const styleEl = document.createElement('style');
                        styleEl.id = 'nxa-fullsize-styles';
                        styleEl.textContent = `
                        .nxa-fullsize-container {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 1000;
                            cursor: zoom-out;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .nxa-fullsize-dark-overlay {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, 0.85);
                            z-index: 0;
                        }

                        .nxa-fullsize-bg {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-image: url(${img.src});
                            background-size: cover;
                            background-position: center;
                            filter: blur(25px);
                            opacity: 0.4;
                            mix-blend-mode: overlay;
                            z-index: 0;
                        }

                        .nxa-fullsize-image {
                            max-width: calc(100% - 2rem);
                            max-height: calc(100% - 2rem);
                            object-fit: contain;
                            position: relative;
                            z-index: 1;
                            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
                        }
                    `;

                        // Create container with elements
                        const container = document.createElement("div");
                        container.className = "nxa-fullsize-container";

                        const darkOverlay = document.createElement("div");
                        darkOverlay.className = "nxa-fullsize-dark-overlay";

                        const blurredBg = document.createElement("div");
                        blurredBg.className = "nxa-fullsize-bg";

                        const fullSizeImg = document.createElement("img");
                        fullSizeImg.src = img.src;
                        fullSizeImg.className = "nxa-fullsize-image";

                        // Add elements to container
                        container.appendChild(darkOverlay);
                        container.appendChild(blurredBg);
                        container.appendChild(fullSizeImg);

                        // Setup event handlers
                        const cleanup = () => {
                            container.remove();
                            document.getElementById('nxa-fullsize-styles')?.remove();
                            document.removeEventListener("keydown", keyHandler);
                        };

                        container.addEventListener("click", cleanup);

                        const keyHandler = (event: KeyboardEvent) => {
                            if (event.key === "Escape") {
                                cleanup();
                            }
                        };
                        document.addEventListener("keydown", keyHandler);

                        // Add style and container to document
                        document.head.appendChild(styleEl);
                        document.body.appendChild(container);
                    }
                });
            }
        });
    }

    attachSlideshowStyles() {
        // Add active class to first image
        const firstImg = Array.from(this.children).find(child =>
                                                            child instanceof HTMLImageElement
        ) as HTMLImageElement | undefined;

        if (firstImg) {
            firstImg.classList.add("active");
        }

        // For slideshow styles, we need to add global styles
        const styleId = 'nxa-image-slideshow-styles';
        if (!document.getElementById(styleId)) {
            const globalStyle = document.createElement('style');
            globalStyle.id = styleId;
            globalStyle.textContent = `
        nxa-image img {
          transition: opacity 0.5s ease;
        }

        nxa-image.slideshow img:not(.active) {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        nxa-image.slideshow img.active {
          opacity: 1;
          z-index: 1;
        }

        ${this.slidesShowConfig.transition === "blend" ? `
        nxa-image.slideshow img.active {
          animation: blendTransition 0.5s ease;
        }
        @keyframes blendTransition {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
        ` : ''}
      `;
            document.head.appendChild(globalStyle);
        }

        // Add slideshow class to host
        this.classList.add("slideshow");
    }

    nextSlide() {
        const activeSlide = this.querySelector("img.active");
        if (!activeSlide) {
            return;
        }

        const nextSlide = activeSlide.nextElementSibling || this.querySelector("img:first-child");
        if (nextSlide) {
            activeSlide.classList.remove("active");
            nextSlide.classList.add("active");
        }
    }

    prevSlide() {
        const activeSlide = this.querySelector("img.active");
        if (!activeSlide) {
            return;
        }

        const prevSlide = activeSlide.previousElementSibling || this.querySelector("img:last-child");
        if (prevSlide) {
            activeSlide.classList.remove("active");
            prevSlide.classList.add("active");
        }
    }

    initSlideshowInterval() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }

        const interval = this.slidesShowConfig.interval || defaultSlideshowInterval;
        this.slideInterval = window.setInterval(() => {
            this.nextSlide();
        }, interval);

        if (this.slidesShowConfig.pauseOnHover) {
            this.addEventListener('mouseenter', () => {
                if (this.slideInterval) {
                    clearInterval(this.slideInterval);
                }
            });

            this.addEventListener('mouseleave', () => {
                const interval = this.slidesShowConfig.interval || defaultSlideshowInterval;
                this.slideInterval = window.setInterval(() => {
                    this.nextSlide();
                }, interval);
            });
        }
    }

    cropImages() {
        const children = Array.from(this.children) as HTMLElement[];

        children.forEach((child, index) => {
            if (!(child instanceof HTMLImageElement)) {
                return;
            }

            const cropData = {
                ...this.globalDataCrop,
                ...this.childDataCrop[index]
            };

            const referenceSize = {
                width: `${this.offsetWidth}px`,
                height: `${this.offsetHeight}px`
            };

            cropImage(child, cropData, referenceSize);
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'nxa-image': NxaImage;
    }
}
