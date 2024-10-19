import { html, LitElement, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import {style} from './style';

/**
 * Enum for wrapping the src content.
 */
export type NxaModalWrapper = 'iframe' | 'div';

/**
 * Enum for modal sizes.
 */
export type NxaModalSize = 'sm' | 'md' | 'fullscreen';

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
@customElement('nxa-modal')
export class NxaModal extends LitElement {
    static styles = style;

    /**
     * If set, loads the content of the body from the src URL.
     */
    @property() src = '';

    /**
     * Only if src specified:
     * If 'iframe': Load the src content in an iframe.
     * If 'div': Load the src content in a div.
     */
    @property({ type: String }) srcWrap: 'iframe' | 'div' = 'iframe';

    /**
     * Optional target attribute for links.
     */
    @property() target = '';

    /**
     * If set, renders a header bar with the title.
     */
    @property() title = '';

    /**
     * If set, renders a header bar with the subtitle.
     */
    @property() subtitle = '';

    /**
     * If set, renders a body slot with a paragraph element containing the body text.
     */
    @property() body = '';

    /**
     * If set, renders a header bar with the icon.
     */
    @property() icon = '';

    /**
     * If set, renders a header bar with the close icon.
     * If empty, no close icon is rendered.
     */
    @property() closeIcon = '×';

    /**
     * Size of the modal: 'sm', 'md', or 'fullscreen'.
     */
    @property({ type: String }) size: NxaModalSize = 'md';


    /**
     * Controls the visibility of the modal.
     */
    @property({ type: Boolean, reflect: true }) open = false;

    /**
     * Holds the fetched content when srcWrap is 'div'.
     */
    @property() private srcContent = '';


    /**
     * Fetches the content from src if srcWrap is 'div'.
     */
    private async _fetchSrcContent() {
        if (this.src && this.srcWrap === 'div') {
            try {
                const response = await fetch(this.src);
                this.srcContent = await response.text();
            } catch (error) {
                console.error('Error fetching src content:', error);
                this.srcContent = 'Error loading content';
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetchSrcContent();
    }



    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('src') && this.srcWrap === 'div') {
            this._fetchSrcContent();
        }
    }

    render() {

        return html`

        <dialog class="modal ${this.size}">
          <div class="modal-header">
            ${this.icon ? html`<span class="modal-icon">${this.icon}</span>` : ''}
            ${this.title ? html`<h2 class="modal-title">${this.title}</h2>` : ''}
            ${this.subtitle ? html`<h3 class="modal-subtitle">${this.subtitle}</h3>` : ''}
            <slot name="header"></slot>
            ${this.closeIcon
            ? html`<button class="modal-close" @click="${this._onCloseClick}">
                  <slot name="close">${this.closeIcon}</slot>
                </button>`
            : ''}
          </div>
          <div class="modal-body">
            ${this.src ? this._renderSrcContent() : ''}
            ${this.body ? html`<p>${this.body}</p>` : ''}
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
    private _renderSrcContent() {
        if (this.srcWrap === 'iframe') {
            return html`<iframe src="${this.src}" .title="${this.title}"></iframe>`;
        } else if (this.srcWrap === 'div') {
            return html`<div id="src-content">${unsafeHTML(this.srcContent)}</div>`;
        }
    }

    /**
     * Handles clicks on the backdrop to close the modal.
     */
    private _onBackdropClick(e: Event) {
        if (e.target === e.currentTarget) {
            this.close();
        }
    }

    /**
     * Handles clicks on the close button.
     */
    private _onCloseClick(e: Event) {
        e.stopPropagation();
        this.close();
    }

    /**
     * Closes the modal and dispatches a 'close' event.
     */
    close() {

        if (!this.open)
            return;
        const dialog = this.shadowRoot?.querySelector('dialog');
        dialog?.close();
        this.open = false;
    }

    /**
     * Opens the modal and dispatches an 'open' event.
     */
    openModal() {
        if (this.open) return;
        this.open = true;
        const dialog = this.shadowRoot?.querySelector('dialog');
        dialog?.showModal();
    }
}


// Return the global class to provide static typing
declare global {
    interface HTMLElementTagNameMap {
        'nxa-modal': NxaModal;
    }
}
