import {cropImage, cssToJson} from "./nxa-image.utils";

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

    constructor() {
        super();
        this.style.display = 'flex';
        this.style.justifyContent = 'center';
        this.style.alignItems = 'center';

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
    }

    connectedCallback() {
        console.group("connectedCallback");
        console.log("Custom element added to page.");
        console.log("this.container", this.container);
        console.log("this.globalDataCrop", this.globalDataCrop);
        console.log("this.childDataCrop", this.childDataCrop);
        console.log("this.children", this.children);
        console.groupEnd();

        this.setDefaultStyles();
        this.cropImages();
    }

    setDefaultStyles() {
        for (let child of Array.from(this.children)) {
            if (!child.hasAttribute(style)) {
                console.log("has it");
                child.getAttribute(style);
            }
            console.log("child", child);
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

            cropImage(child, cropData);
        });
    }
}

customElements.define("nxa-image", NxaImage);
