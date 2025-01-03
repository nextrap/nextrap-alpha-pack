var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { style } from './style';
/**
 * Render a dialog box inside shadow DOM. Has 4 slots: header, body, footer, close.
 * If the slots are not set, use the properties to render the content.
 * All custom styling is defined as CSS variables in the :host section.
 *
 * @fires open - Dispatched when the modal is opened.
 * @fires close - Dispatched when the modal is closed.
 *
 * @slot header - Content for the modal header.
 * @slot body - Content for the modal body.
 * @slot footer - Content for the modal footer.
 * @slot close - Content for the close button.
 */
let NxaModal = class NxaModal extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * If set, loads the content of the body from the src URL.
         */
        this.src = '';
        /**
         * Only if src specified:
         * If 'iframe': Load the src content in an iframe.
         * If 'div': Load the src content in a div.
         */
        this.srcWrap = 'iframe';
        /**
         * Optional target attribute for links.
         */
        this.target = '';
        /**
         * If set, renders a header bar with the title.
         */
        this.title = '';
        /**
         * If set, renders a header bar with the subtitle.
         */
        this.subtitle = '';
        /**
         * If set, renders a body slot with a paragraph element containing the body text.
         */
        this.body = '';
        /**
         * If set, renders a header bar with the icon.
         */
        this.icon = '';
        /**
         * If set, renders a header bar with the close icon.
         * If empty, no close icon is rendered.
         */
        this.closeIcon = '×';
        /**
         * Size of the modal: 'sm', 'md', or 'fullscreen'.
         */
        this.size = 'md';
        /**
         * Controls the visibility of the modal.
         */
        this.open = false;
        /**
         * Holds the fetched content when srcWrap is 'div'.
         */
        this.srcContent = '';
    }
    /**
     * Fetches the content from src if srcWrap is 'div'.
     */
    _fetchSrcContent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.src && this.srcWrap === 'div') {
                try {
                    const response = yield fetch(this.src);
                    this.srcContent = yield response.text();
                }
                catch (error) {
                    console.error('Error fetching src content:', error);
                    this.srcContent = 'Error loading content';
                }
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this._fetchSrcContent();
    }
    updated(changedProperties) {
        if (changedProperties.has('src') && this.srcWrap === 'div') {
            this._fetchSrcContent();
        }
    }
    render() {
        return html `

        <dialog class="modal ${this.size}">
          <div class="modal-header">
            ${this.icon ? html `<span class="modal-icon">${this.icon}</span>` : ''}
            ${this.title ? html `<h2 class="modal-title">${this.title}</h2>` : ''}
            ${this.subtitle ? html `<h3 class="modal-subtitle">${this.subtitle}</h3>` : ''}
            <slot name="header"></slot>
            ${this.closeIcon
            ? html `<button class="modal-close" @click="${this._onCloseClick}">
                  <slot name="close">${this.closeIcon}</slot>
                </button>`
            : ''}
          </div>
          <div class="modal-body">
            ${this.src ? this._renderSrcContent() : ''}
            ${this.body ? html `<p>${this.body}</p>` : ''}
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </dialog>
    `;
    }
    /**
     * Renders the content based on src and srcWrap.
     */
    _renderSrcContent() {
        if (this.srcWrap === 'iframe') {
            return html `<iframe src="${this.src}" .title="${this.title}"></iframe>`;
        }
        else if (this.srcWrap === 'div') {
            return html `<div id="src-content">${unsafeHTML(this.srcContent)}</div>`;
        }
    }
    /**
     * Handles clicks on the backdrop to close the modal.
     */
    _onBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.close();
        }
    }
    /**
     * Handles clicks on the close button.
     */
    _onCloseClick(e) {
        e.stopPropagation();
        this.close();
    }
    /**
     * Closes the modal and dispatches a 'close' event.
     */
    close() {
        var _a;
        if (!this.open)
            return;
        const dialog = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('dialog');
        dialog === null || dialog === void 0 ? void 0 : dialog.close();
        this.open = false;
    }
    /**
     * Opens the modal and dispatches an 'open' event.
     */
    openModal() {
        var _a;
        if (this.open)
            return;
        this.open = true;
        const dialog = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('dialog');
        dialog === null || dialog === void 0 ? void 0 : dialog.showModal();
    }
};
NxaModal.styles = style;
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "src", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], NxaModal.prototype, "srcWrap", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "target", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "title", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "subtitle", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "body", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "icon", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "closeIcon", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], NxaModal.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], NxaModal.prototype, "open", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaModal.prototype, "srcContent", void 0);
NxaModal = __decorate([
    customElement('nxa-modal')
], NxaModal);
export { NxaModal };
