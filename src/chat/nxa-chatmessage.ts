import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleChatmessage } from "./style-chatmessage";

type MessageType =
    | "me"
    | "other"
    | "both"
    | "me-alt"
    | "other-alt"
    | "both-alt";
type DateFormat = "relative" | "localeLong" | "localeShort";

export const nxaRelativeTime = (date: Date) => {
    let formattedDate = "";
    const diff = Date.now() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
        formattedDate = `${days} days ago`;
    } else if (hours > 0) {
        formattedDate = `${hours} hours ago`;
    } else if (minutes > 0) {
        formattedDate = `${minutes} minutes ago`;
    } else {
        formattedDate = `${seconds} seconds ago`;
    }
    return formattedDate;
};

@customElement("nxa-chat-message")
class NxaChatMessage extends LitElement {
    private _date: Date = new Date();
    private _formattedDate = "";
    private _messageType: MessageType = "me";
    private _messageTypeClasses: string = "";
    @property({ type: String }) dataType: MessageType = "me";

    @property({ type: String })
    get dataDate() {
        return this.getAttribute("data-date");
    }
    set dataDate(value: string) {
        this._date = Date.parse(value)
            ? new Date(Date.parse(value))
            : new Date();
        this._formattedDate = this._formatDate(this._date);
    }

    @property({ type: String }) dataFormat: DateFormat = "relative";

    @state()
    private _showDateIndicator: boolean = false;

    @state()
    private _showCheckbox: boolean = false;

    @state()
    private _selected: boolean = false;

    private _observer: MutationObserver;

    constructor() {
        super();
        this._observer = new MutationObserver(() => {
            if (this.classList.contains("selected")) {
                this._selected = true;
            } else {
                this._selected = false;
            }
            this.requestUpdate();
        });
    }

    @property({ type: Boolean, attribute: "data-show-checkbox" })
    get dataShowCheckbox() {
        return this._showCheckbox;
    }
    set dataShowCheckbox(value: boolean) {
        this._showCheckbox = value;
        this.requestUpdate();
    }

    connectedCallback() {
        super.connectedCallback();
        this.parseDataConfig();
        this._observer.observe(this, {
            attributes: true,
            attributeFilter: ["class"],
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._observer.disconnect();
    }

    parseDataConfig() {
        const type = this.getAttribute("data-type");
        if (type) {
            this._messageType = type as MessageType;
            if (type.indexOf("alt") > -1) {
                this._messageTypeClasses = type.split("-").join(" ");
            } else {
                this._messageTypeClasses = type;
            }
        }
        const date = this.getAttribute("data-date");
        if (date) {
            this.dataDate = date;
        }
    }

    static styles = [styleChatmessage];

    private _formatDate(date: Date) {
        let formattedDate = "";
        switch (this.dataFormat) {
            case "relative":
                formattedDate = nxaRelativeTime(date);
                break;
            case "localeLong":
                formattedDate = date.toLocaleString(undefined, {
                    dateStyle: "full",
                    timeStyle: "long",
                });
                break;
            case "localeShort":
                formattedDate = date.toLocaleString(undefined, {
                    dateStyle: "short",
                    timeStyle: "short",
                });
                break;
            default:
                formattedDate = date.toISOString();
                break;
        }
        return formattedDate;
    }

    private handleClick(e: MouseEvent) {
        this.dispatchEvent(
            new CustomEvent("nxa-message-clicked", {
                detail: {
                    messageType: this._messageType,
                    date: this._date,
                    event: e,
                },
                bubbles: true,
                composed: true,
            })
        );
    }

    private handleCheckboxClick(e: MouseEvent) {
        this.dispatchEvent(
            new CustomEvent("nxa-message-checkbox-clicked", {
                detail: {
                    selected: !this._selected,
                    date: this._date,
                    event: e,
                },
                bubbles: true,
                composed: true,
            })
        );
    }

    private checkPreviousMessage() {
        if (this.querySelector('[slot="before"]')) return;
        const parent = this.parentElement;
        if (!parent) return;

        const previousSibling = this.previousElementSibling as any;
        if (!previousSibling || !previousSibling.getAttribute("data-date")) {
            this._showDateIndicator = true;
            return;
        }

        const chatbox = this.closest("nxa-chatbox") as any;
        if (!chatbox) return;

        this._showDateIndicator = chatbox.shouldShowDate(
            this._date,
            previousSibling._date
        );
    }

    updated(changedProperties: Map<string, any>) {
        if (changedProperties.has("dataDate")) {
            this.checkPreviousMessage();
        }
    }

    #renderControl() {
        if (!this.querySelector('[slot="control"]')) {
            return html``;
        }
        return html`<div class="message-control">
            <slot name="control"></slot>
        </div>`;
    }

    #renderCheckbox() {
        if (!this._showCheckbox) return;
        return html`<div class="message-checkbox">
            ${this._selected
                ? html`<input type="checkbox" @click=${this.handleCheckboxClick} checked />`
                : html`<input type="checkbox" @click=${this.handleCheckboxClick} />`}
        </div>`;
    }

    render() {
        return html`
            <div class="chat-message">
                ${this._showDateIndicator
                    ? html`<div class="date-indicator__wrapper">
                          <time
                              datetime="${this._date.toISOString()}"
                              class="date-indicator"
                          >
                              ${this._date.toLocaleDateString()}
                          </time>
                      </div>`
                    : null}
                <slot name="before"></slot>
                <div class="message-row__wrapper">
                    ${this.#renderCheckbox()}
                    <div
                        class="message-row ${this._messageTypeClasses}"
                        @click=${this.handleClick}
                    >
                        <div class="message-container">
                            ${this._messageType === "me" ||
                            this._messageType === "me-alt"
                                ? this.#renderControl()
                                : ""}
                            <div class="message-bubble">
                                ${this._messageType === "both-alt"
                                    ? html`<div class="left-indicator"></div>
                                          <div class="right-indicator"></div>`
                                    : ""}
                                <div class="message-header">
                                    ${this.classList.contains("highlight")
                                        ? html`<span class="highlight-indicator"
                                              >★</span
                                          >`
                                        : ""}
                                    <!-- icon from heroicons.com -->
                                    ${this.classList.contains("muted")
                                        ? html`<span class="muted-indicator"
                                              ><svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke-width="2"
                                                  stroke="currentColor"
                                              >
                                                  <path
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
                                                  />
                                              </svg>
                                          </span>`
                                        : ""}
                                    <slot name="sender"></slot>
                                    ${this.querySelector('[slot="recipient"]')
                                        ? html`<slot name="recipient"></slot>`
                                        : ``}
                                    <span class="message-time"
                                        >${this._formattedDate}</span
                                    >
                                </div>
                                <div class="message-content">
                                    <slot name="content"></slot>
                                </div>
                                ${this.querySelector('[slot="footer"]')
                                    ? html`<div class="message-footer">
                                          <slot name="footer"></slot>
                                      </div>`
                                    : ""}
                            </div>
                            ${this._messageType !== "me" &&
                            this._messageType !== "me-alt"
                                ? this.#renderControl()
                                : ""}
                        </div>
                    </div>
                </div>
                <slot name="after"></slot>
            </div>
        `;
    }
}
