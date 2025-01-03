var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NxInfiniscroll_timer, _NxInfiniscroll_autoScroll;
const style = `

:host {
    --height: 80px;
    --space: 10px;
}

::slotted(img) {
    height: var(--height);
    margin: 10px !important;
    width: auto;
}

`;
class NxInfiniscroll extends HTMLElement {
    constructor() {
        super();
        _NxInfiniscroll_timer.set(this, null);
        _NxInfiniscroll_autoScroll.set(this, false);
        const shadow = this.attachShadow({ mode: "open" });
        const styleElement = document.createElement("style");
        styleElement.textContent = style;
        shadow.appendChild(styleElement);
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
                    this.repopulate(entry.target);
                }
            });
        }, { threshold: 1.0 });
    }
    connectedCallback() {
        __classPrivateFieldSet(this, _NxInfiniscroll_timer, window.setInterval(() => {
            this.animateScroll();
        }, 60), "f");
        // Initialize container with child elements via slot
        Array.from(this.children).forEach((child) => {
            const clonedChild = child.cloneNode(true);
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
        window.clearTimeout(__classPrivateFieldGet(this, _NxInfiniscroll_timer, "f"));
        this.stopAutoScroll();
    }
    repopulate(element) {
        if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
            element.draggable = false; // Prevent dragging of dynamically added elements
            element.style.userSelect = "none"; // Prevent text selection of dynamically added elements
            //element.style.webkitUserDrag = "none"; // Prevent dragging in WebKit browsers
            this.appendChild(element);
        }
        else if (this.container.scrollLeft === 0) {
            element.draggable = false; // Prevent dragging of dynamically added elements
            element.style.userSelect = "none"; // Prevent text selection of dynamically added elements
            //element.style.webkitUserDrag = "none"; // Prevent dragging in WebKit browsers
            this.insertBefore(element, this.firstChild);
        }
    }
    addDragEvents() {
        let isDragging = false;
        let top = null;
        this.container.addEventListener("pointerdown", (e) => {
            isDragging = true;
            top = null;
            this.startX = e.pageX - this.container.offsetLeft;
            this.scrollLeftStart = this.container.scrollLeft;
            this.container.style.cursor = "grabbing";
            this.stopAutoScroll(); // Stop auto-scroll while dragging
        });
        this.container.addEventListener("pointerout", () => {
            isDragging = false;
            this.container.style.cursor = "grab";
            if (this.autoScroll) {
                this.startAutoScroll(); // Resume auto-scroll after mouse leaves
            }
        });
        this.container.addEventListener("pointerup", () => {
            isDragging = false;
            top = null;
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
        this.container.addEventListener("pointermove", (e) => {
            if (!isDragging)
                return;
            e.preventDefault();
            if (top !== null)
                window.scrollTo(0, top);
            const x = e.pageX - this.container.offsetLeft;
            if (top === null && (x > 10 || x < -10))
                top = window.scrollY; // Prevent only after first scroll right left
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
    addHoverEvents() {
        this.container.addEventListener("mouseenter", () => {
            this.stopAutoScroll();
        });
        this.container.addEventListener("mouseleave", () => {
            if (this.autoScroll) {
                this.startAutoScroll();
            }
        });
    }
    animateScroll() {
        if (__classPrivateFieldGet(this, _NxInfiniscroll_autoScroll, "f") === false)
            return;
        this.container.scrollLeft += this.scrollSpeed;
        if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
            this.container.scrollLeft = 0; // Reset scroll position to create an infinite loop
        }
    }
    startAutoScroll() {
        if (__classPrivateFieldGet(this, _NxInfiniscroll_autoScroll, "f") === true)
            return;
        __classPrivateFieldSet(this, _NxInfiniscroll_autoScroll, true, "f");
    }
    stopAutoScroll() {
        __classPrivateFieldSet(this, _NxInfiniscroll_autoScroll, false, "f");
    }
    slowScrollStop() {
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
    snapElements() {
        const children = Array.from(this.querySelectorAll('[slot="scrollslot"]'));
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
_NxInfiniscroll_timer = new WeakMap(), _NxInfiniscroll_autoScroll = new WeakMap();
customElements.define("nxa-infiniscroll", NxInfiniscroll);
export {};
