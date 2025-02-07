import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('nxa-element-highlighter')
export class NxaElementHighlighter extends LitElement {

    private resizeObserver = new ResizeObserver(() => this.requestUpdate());

    @state()
    private _isHidden = true

    @property({ type: String })
    selector = '';

    @property({ type: String })
    zIndex = '10';

    @property({ type: Number })
    borderWidth = 2;

    @property({ type: String })
    borderColor = 'red';

    #error?: string;

    get #targetElement(): HTMLElement {
        return document.querySelector(this.selector);
    }

    show() {
        this._isHidden = false;
    }

    hide() {
        this._isHidden = true;
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.#targetElement) {
            this.#error = `selector "${this.selector}" not found`;
        }

        window.addEventListener('resize', () => this.requestUpdate);
        window.addEventListener('scroll', () => this.requestUpdate);

        this.resizeObserver.observe(this.#targetElement);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener('resize', () => this.requestUpdate);
        window.removeEventListener('scroll', () => this.requestUpdate);

        this.resizeObserver.disconnect();
    }

    render() {
        if (this._isHidden) {
            return html``;
        }
        if (this.#error) {
            return html`<code style="color: red">${this.localName}: ${this.#error}</code>`;
        }
        const borderWidth = Math.max(this.borderWidth, 0);

        const target = this.#targetElement;
        const rect = target.getBoundingClientRect();

        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.zIndex = this.zIndex;
        div.style.top = `${rect.top - borderWidth}px`;
        div.style.left = `${rect.left - borderWidth}px`;
        div.style.width = `${rect.width}px`;
        div.style.height = `${rect.height}px`;
        div.style.border = `${borderWidth}px solid ${this.borderColor}`;

        return html`${div}`;
    }
}
