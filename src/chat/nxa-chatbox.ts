import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleChatbox } from "./style-chatbox";

type DateIndicator = "weekly" | "monthly";

@customElement("nxa-chatbox")
class NxaChatbox extends LitElement {
    static styles = [styleChatbox];
    private scrollContainer: HTMLElement | null = null;

    @state()
    private _dataDateIndicator: DateIndicator = "weekly";

    @property({ type: String })
    dataDateIndicator: DateIndicator = "weekly";

    @state()
    private selectedMessages: HTMLElement[] = [];

    private scrollListener: () => void;

    constructor() {
        super();
        this.scrollListener = this.handleScroll.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.parseDataConfig();
    }

    parseDataConfig() {
        const dateIndicator = this.getAttribute("data-date-indicator");
        if (dateIndicator) {
            this._dataDateIndicator = dateIndicator as DateIndicator;
        }
    }

    firstUpdated(): void {
        this.scrollContainer = this.shadowRoot?.querySelector(
            "[part=message-container]"
        ) as HTMLElement;
        this.scrollToLatestMessage();
        this.setupScrollListener();
        this.addEventListener('nxa-message-clicked', this.handleMessageSelection.bind(this));
        this.addEventListener('nxa-message-checkbox-clicked', this.handleMessageSelection.bind(this));
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

    private handleMessageSelection(e: CustomEvent): void {
        const message = e.target as HTMLElement;
        const index = this.selectedMessages.indexOf(message);

        
        if (index === -1) {
            this.selectedMessages = [...this.selectedMessages, message];
            message.classList.add('selected');
        } else {
            this.selectedMessages = this.selectedMessages.filter(m => m !== message);
            message.classList.remove('selected');
        }
        
        // Toggle checkbox visibility on all messages
        const messages = this.querySelectorAll('nxa-chat-message');
        messages.forEach(msg => {
            msg.toggleAttribute('data-show-checkbox', this.selectedMessages.length > 0);
        });
    }

    public shouldShowDate(currentDate: Date, previousDate: Date): boolean {
        if (!previousDate) return true;

        const current = new Date(currentDate);
        const previous = new Date(previousDate);

        if (this._dataDateIndicator === "weekly") {
            const getWeek = (date: Date) => {
                const startOfYear = new Date(date.getFullYear(), 0, 1);
                return Math.ceil(
                    ((date.getTime() - startOfYear.getTime()) / 86400000 +
                        startOfYear.getDay() +
                        1) /
                        7
                );
            };

            return (
                getWeek(current) !== getWeek(previous) ||
                current.getFullYear() !== previous.getFullYear()
            );
        } else {
            return (
                current.getMonth() !== previous.getMonth() ||
                current.getFullYear() !== previous.getFullYear()
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
