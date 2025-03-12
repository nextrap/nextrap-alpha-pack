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

    connectedCallback() {
        super.connectedCallback();
        this.parseDataConfig();
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

    #renderControl() {
        if (!this.querySelector('[slot="control"]')) {
            return html``;
        }
        return html`<div class="message-control">
            <slot name="control"></slot>
        </div>`;
    }

    render() {
        return html`
            <div class="chat-message">
                <slot name="before"></slot>
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
                                <slot name="sender"></slot>
                                <slot name="recipient"></slot>
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
                <slot name="after"></slot>
            </div>
        `;
    }
}
