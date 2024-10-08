import {ka_sleep} from "@kasimirjs/core";
import {style} from "./style";

class NxInfiniscroll extends HTMLElement {
    private container: HTMLElement;
    private observer: IntersectionObserver;
    private autoScroll: boolean;
    private snap: boolean;
    private scrollSpeed: number;
    private stopOnHover: boolean;
    private easeStopOnDrag: boolean;
    private slowDownOnStop: boolean;
    private accelerationFactor: number;
    private startX: number;
    private scrollLeftStart: number;
    private scrollInterval: number | null;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });


        // Root scrolling container is now a slot
        const slot = document.createElement("slot");
        slot.name = "scrollslot";
        slot.style.display = "flex";
        slot.style.overflow = "hidden";
        slot.style.cursor = "grab";
        slot.style.userSelect = "none"; // Prevent text selection
        //slot.style.webkitUserDrag = "none"; // Prevent dragging in WebKit browsers
        shadow.appendChild(slot);


        this.container = slot;
        this.autoScroll = this.hasAttribute("auto-scroll");
        this.snap = this.hasAttribute("snap");
        this.stopOnHover = this.hasAttribute("stop-on-hover");
        this.easeStopOnDrag = this.hasAttribute("ease-stop-on-drag");
        this.slowDownOnStop = this.hasAttribute("slow-down-on-stop");
        this.accelerationFactor = parseFloat(this.getAttribute("acceleration-factor") || "0.1");
        this.scrollSpeed = parseFloat(this.getAttribute("scroll-speed") || "1");
        this.scrollInterval = null;

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.repopulate(entry.target as HTMLElement);
                }
            });
        }, { threshold: 1.0 });
    }

    connectedCallback() {
        // Initialize container with child elements via slot
        Array.from(this.children).forEach((child) => {
            const clonedChild = child.cloneNode(true) as HTMLElement;
            clonedChild.draggable = false; // Prevent dragging of child elements
            clonedChild.setAttribute("slot", "scrollslot"); // Assign to slot
            clonedChild.style.userSelect = "none"; // Prevent text selection of child elements
            //clonedChild.style.webkitUserDrag = "none"; // Prevent dragging in WebKit browsers
            this.appendChild(clonedChild);
            this.observer.observe(clonedChild);
        });
        this.addDragEvents();
        if (this.stopOnHover) {
            this.addHoverEvents();
        }
        if (this.autoScroll) {
            this.startAutoScroll();
        }
    }

    disconnectedCallback() {
        this.stopAutoScroll();
    }

    private repopulate(element: HTMLElement) {
        if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
            element.draggable = false; // Prevent dragging of dynamically added elements
            element.style.userSelect = "none"; // Prevent text selection of dynamically added elements
            //element.style.webkitUserDrag = "none"; // Prevent dragging in WebKit browsers
            this.appendChild(element);
        } else if (this.container.scrollLeft === 0) {
            element.draggable = false; // Prevent dragging of dynamically added elements
            element.style.userSelect = "none"; // Prevent text selection of dynamically added elements
            //element.style.webkitUserDrag = "none"; // Prevent dragging in WebKit browsers
            this.insertBefore(element, this.firstChild);
        }
    }

    private addDragEvents() {
        let isDragging = false;
        this.container.addEventListener("mousedown", (e) => {
            isDragging = true;
            this.startX = e.pageX - this.container.offsetLeft;
            this.scrollLeftStart = this.container.scrollLeft;
            this.container.style.cursor = "grabbing";
            this.stopAutoScroll(); // Stop auto-scroll while dragging
        });

        this.container.addEventListener("mouseup", () => {
            isDragging = false;
            this.container.style.cursor = "grab";
            if (this.snap) {
                this.snapElements();
            }
            if (this.easeStopOnDrag) {
                this.container.scrollTo({ left: this.scrollLeftStart, behavior: "smooth" });
            }
            if (this.slowDownOnStop) {
                this.slowScrollStop();
            }
            if (this.autoScroll) {
                this.startAutoScroll(); // Resume auto-scroll after dragging
            }
        });

        this.container.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - this.container.offsetLeft;
            const walk = (x - this.startX) * 1; // Scroll-fast multiplier
            this.container.scrollLeft = this.scrollLeftStart - walk;
        });

        this.container.addEventListener("mouseleave", () => {
            isDragging = false;
            this.container.style.cursor = "grab";
            if (this.autoScroll) {
                this.startAutoScroll(); // Resume auto-scroll after mouse leaves
            }
        });
    }

    private addHoverEvents() {
        this.container.addEventListener("mouseenter", () => {
            this.stopAutoScroll();
        });
        this.container.addEventListener("mouseleave", () => {
            if (this.autoScroll) {
                this.startAutoScroll();
            }
        });
    }


    #autoScroll = false;

    private startAutoScroll() {
        if (this.#autoScroll === true)
            return;
        this.#autoScroll = true;
        let index = 0;
        const animate = async() => {
            await ka_sleep(30);
            this.container.scrollLeft += this.scrollSpeed;
            if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
                this.container.scrollLeft = 0; // Reset scroll position to create an infinite loop
            }


            if (this.#autoScroll)
                requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate)
    }

    private stopAutoScroll() {
        this.#autoScroll = false;
    }

    private slowScrollStop() {
        let currentSpeed = this.scrollSpeed;
        const decelerate = () => {
            if (currentSpeed > 0.1) {
                currentSpeed *= 0.9;
                this.container.scrollLeft += currentSpeed;
                requestAnimationFrame(decelerate);
            }
        };
        decelerate();
    }

    private snapElements() {
        const children = Array.from(this.querySelectorAll('[slot="scrollslot"]')) as HTMLElement[];
        let closest = children[0];
        let minOffset = Math.abs(closest.offsetLeft - this.container.scrollLeft);

        children.forEach((child) => {
            const offset = Math.abs(child.offsetLeft - this.container.scrollLeft);
            if (offset < minOffset) {
                closest = child;
                minOffset = offset;
            }
        });
        this.container.scrollTo({ left: closest.offsetLeft, behavior: "smooth" });
    }
}

customElements.define("nxa-infiniscroll", NxInfiniscroll);
