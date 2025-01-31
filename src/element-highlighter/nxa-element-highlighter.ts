import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nxa-element-highlighter')
export class NxaElementHighlighter extends LitElement {

    @property({ type: String })
    selector = '';

    #error?: string;

    get #targetElement(): HTMLElement {
        return document.querySelector(this.selector);
    }

    connectedCallback() {
        if (!this.#targetElement) {
            this.#error = `selector "${this.selector}" not found`;
        }

        super.connectedCallback();
    }

    render() {
        if (this.#error) {
            return html`<code style="color: red">${this.localName}: ${this.#error}</code>`;
        }

        const target = this.#targetElement;
        const rect = target.getBoundingClientRect();

        const div = document.createElement('div');
        const borderWith = 2;
        div.style.position = 'absolute';
        div.style.top = `${rect.top - borderWith}px`;
        div.style.left = `${rect.left - borderWith}px`;
        div.style.width = `${rect.width}px`;
        div.style.height = `${rect.height}px`;
        div.style.border = `${borderWith}px solid red`;

        return html`${div}`;
    }
}
