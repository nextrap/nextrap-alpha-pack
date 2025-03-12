import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleChatbox } from "./style-chatbox";

@customElement("nxa-chatbox")
class NxaChatbox extends LitElement {
    static styles = [styleChatbox];
    private scrollContainer: HTMLElement | null = null;

    private scrollListener: () => void;

    constructor() {
        super();
        this.scrollListener = this.handleScroll.bind(this);
    }

    firstUpdated(): void {
        this.scrollContainer = this.shadowRoot?.querySelector(
            "[part=message-container]"
        ) as HTMLElement;
        this.scrollToLatestMessage();
        this.setupScrollListener();
    }

    disconnectedCallback() {
        this.scrollContainer.removeEventListener("scroll", this.scrollListener);

        super.disconnectedCallback();
    }

    private scrollToLatestMessage(): void {
        if (!this.scrollContainer) return;
        // defer scroll
        setTimeout(() => {
            this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
        }, 1);
    }

    private setupScrollListener(): void {
        this.scrollContainer.addEventListener(
            "scroll",
            this.handleScroll.bind(this)
        );
    }

    private handleScroll(event: Event): void {
        const target = event.target as HTMLElement;
        if (target.scrollTop === 0) {
            this.dispatchEvent(
                new CustomEvent("nxa-chat-reached-top", {
                    detail: { originalEvent: event },
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    render() {
        return html`
            <div class="chat-container">
                ${this.querySelector('[slot="header"]')
                    ? html`<div part="header">
                          <slot name="header"></slot>
                      </div>`
                    : ""}

                <div part="message-container">
                    <slot></slot>
                </div>

                ${this.querySelector('[slot="input"]')
                    ? html`<div part="input">
                          <slot name="input"></slot>
                      </div>`
                    : ""}
                ${this.querySelector('[slot="footer"]')
                    ? html`<div part="footer">
                          <slot name="footer"></slot>
                      </div>`
                    : ""}
            </div>
        `;
    }
}
