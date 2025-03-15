import {cropImage, cssToJson} from "./nxa-image.utils";
import {defaultSlideshowInterval, SlideShowConfig, SlideShowTransitions} from "./nxa-image.types";

const style = `
:host {
    width: inherit;
    height: inherit;
    overflow: hidden;
    position: relative;
}

::slotted(img) {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: inherit;
    height: inherit;
}
`;

class NxaImage extends HTMLElement {
    private container: HTMLElement;
    private globalDataCrop: Record<string, string>;
    private childDataCrop: Record<string, string>[] = [];
    private dataFeatures: string[];
    private slidesShowConfig: SlideShowConfig = {};
    private fullSize: boolean; // defines, if it's possible to show the image in full size on click

    constructor() {
        super();
        this.style.display = 'flex';
        //this.style.justifyContent = 'center';
        //this.style.alignItems = 'center';

        // Set default dimensions if not explicitly set
        if (!this.style.width) {
            this.style.width = '100%';
        }
        if (!this.style.height) {
            this.style.height = '100%';
        }

        const shadow = this.attachShadow({mode: "open"});

        const styleElement = document.createElement("style");
        styleElement.textContent = style;
        shadow.appendChild(styleElement);

        const slot = document.createElement("slot");
        shadow.appendChild(slot);

        this.container = slot;
        this.globalDataCrop = cssToJson(this.getAttribute("data-crop") || "");
        for (let child of Array.from(this.children)) {
            this.childDataCrop.push(cssToJson(child?.getAttribute("data-crop") || ""));
        }

        this.dataFeatures = this.getAttribute("data-features")?.split(" ") || [];
        this.initSlidesShowConfig();

        this.fullSize = this.dataFeatures.includes("fullsize");
        this.initFullSize();
    }

    initFullSize() {
        if (this.fullSize) {
            for (let child of Array.from(this.children)) {
                child.style.cursor = "pointer";
                child.addEventListener("click", () => {
                    const img: HTMLImageElement = this.querySelector("img");
                    if (img) {
                        const fullSizeImg = document.createElement("img");
                        fullSizeImg.src = img.src;
                        fullSizeImg.style.position = "fixed";
                        fullSizeImg.style.top = "0";
                        fullSizeImg.style.left = "0";
                        fullSizeImg.style.width = "100%";
                        fullSizeImg.style.height = "100%";
                        fullSizeImg.style.objectFit = "contain";
                        fullSizeImg.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                        fullSizeImg.style.zIndex = "1000";
                        fullSizeImg.style.cursor = "zoom-out";
                        fullSizeImg.addEventListener("click", () => {
                            fullSizeImg.remove();
                        });

                        document.addEventListener("keydown", (event) => {
                            if (event.key === "Escape") {
                                fullSizeImg.remove();
                            }
                        });

                        document.body.appendChild(fullSizeImg);
                    }
                });
            }
        }
    }

    initSlidesShowConfig() {
        if(!this.dataFeatures) {
            this.dataFeatures = this.getAttribute("data-features")?.split(" ") || [];
        }
        this.slidesShowConfig.enabled = this.dataFeatures.includes("slideshow");
        this.slidesShowConfig.interval = defaultSlideshowInterval;
        this.slidesShowConfig.pauseOnHover = this.dataFeatures.includes("pauseOnHover");
        this.slidesShowConfig.transition = SlideShowTransitions.filter(t => this.dataFeatures.includes(t))[0] || "fade";
        this.slidesShowConfig.showThumbnails = this.dataFeatures.includes("showThumbnails");
        this.slidesShowConfig.showArrows = this.dataFeatures.includes("showArrows");
        this.slidesShowConfig.showIndicators = this.dataFeatures.includes("showIndicators");
        this.slidesShowConfig.showCaptions = this.dataFeatures.includes("showCaptions");
    }

    connectedCallback() {
        console.group("connectedCallback");
        console.log("Custom element added to page.");
        console.log("this.container", this.container);
        console.log("this.globalDataCrop", this.globalDataCrop);
        console.log("this.childDataCrop", this.childDataCrop);
        console.log("this.children", this.children);
        console.log("this.slidesShowConfig", this.slidesShowConfig);
        console.groupEnd();

        // Initially set up styles
        this.setDefaultStyles();

        if (this.slidesShowConfig.enabled) {
            this.attachSlideshowStyles();
            this.attachSlideshowAnimations();
            this.initSlideshowInterval();
        }

        // Wait for layout to complete before measuring
        requestAnimationFrame(() => {
            this.cropImages();

            // Set up size change detection
            const resizeObserver = new ResizeObserver(entries => {
                this.cropImages();
            });
            resizeObserver.observe(this);
        });
    }

    /**
     * Attaches animations for the slideshow.
     * Take a look at the SlideShowConfig to see which animations are enabled.
     */
    attachSlideshowAnimations() {
        const transition = this.slidesShowConfig.transition || "fade";

        // Add style element to shadow DOM for animations
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            ::slotted(img) {
                transition: opacity 0.5s ease;
            }

            ::slotted(img.active) {
                opacity: 1;
                z-index: 1;
            }

            ${transition === "blend" ? `
            ::slotted(img.active) {
                animation: blendTransition 0.5s ease;
            }
            @keyframes blendTransition {
                from { opacity: 0.5; }
                to { opacity: 1; }
            }
            ` : ''}
        `;

        this.shadowRoot.appendChild(styleElement);

        // Add controls if necessary
        if (this.slidesShowConfig.showArrows) {
            this.addNavigationArrows();
        }

        if (this.slidesShowConfig.showIndicators) {
            this.addIndicators();
        }
    }

    nextSlide() {
        const activeSlide = this.querySelector("img.active");
        const nextSlide = activeSlide.nextElementSibling || this.querySelector("img:first-child");
        activeSlide.classList.remove("active");
        nextSlide.classList.add("active");
    }

    prevSlide() {
        const activeSlide = this.querySelector("img.active");
        const prevSlide = activeSlide.previousElementSibling || this.querySelector("img:last-child");
        activeSlide.classList.remove("active");
        prevSlide.classList.add("active");
    }

    initSlideshowInterval() {
        const interval = this.slidesShowConfig.interval || defaultSlideshowInterval;
        setInterval(() => {
            this.nextSlide();
        }, interval);
    }

    attachSlideshowStyles() {
        console.group("attachSlideshowStyles");
        console.log("this.children[0]", this.children[0]);
        console.groupEnd();

        // add "active" attribute to first child
        if (this.children[0]) {
            this.children[0].classList.add("active");
        }

        // add "slideshow" class to container
        this.classList.add("slideshow");

        // Add style element to document head for global styles
        const globalStyle = document.createElement('style');
        globalStyle.textContent = `
    nxa-image.slideshow img:not(.active) {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
  `;
        document.head.appendChild(globalStyle);
    }

    setDefaultStyles() {
        for (let child of Array.from(this.children)) {
            if (!child.hasAttribute(style)) {
                child.getAttribute(style);
            }
        }
    }

    /**
     * Navigates to all children and based on the crop data, crops the images and sets the correct position.
     */
    cropImages() {
        const children = Array.from(this.children as HTMLCollectionOf<HTMLElement>);

        children.forEach((child, index) => {
            if (!(child instanceof HTMLImageElement)) {
                return;
            }

            const cropData = {
                ...this.globalDataCrop,
                ...this.childDataCrop[index]
            };

            // Use offsetWidth/offsetHeight for the actual dimensions including borders
            const referenceSize = {
                width: this.offsetWidth + 'px',
                height: this.offsetHeight + 'px'
            };

            cropImage(child, cropData, referenceSize);
        });
    }
}

customElements.define("nxa-image", NxaImage);
