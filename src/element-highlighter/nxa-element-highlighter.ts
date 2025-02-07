import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('nxa-element-highlighter')
export class NxaElementHighlighter extends LitElement {

    private error?: string;
    private targetElement?: HTMLElement;

    private readonly resizeObserver = new ResizeObserver(() => this.requestUpdate());
    private readonly mutationObserver = new MutationObserver(() => this.requestUpdate());

    @state()
    private isHidden = true

    @property({ type: String })
    selector = '';

    @property({ type: String })
    zIndex = '10';

    @property({ type: Number })
    borderWidth = 2;

    @property({ type: String })
    borderColor = 'red';

    show() {
        this.isHidden = false;
    }

    hide() {
        this.isHidden = true;
    }

    connectedCallback() {
        super.connectedCallback();

        this.targetElement = document.querySelector(this.selector);
        if (!this.targetElement) {
            this.error = `selector "${this.selector}" not found`;
        }

        window.addEventListener('resize', () => this.requestUpdate);
        window.addEventListener('scroll', () => this.requestUpdate);

        this.resizeObserver.observe(this.targetElement);
        this.mutationObserver.observe(this.targetElement, { attributes: true, attributeFilter: ['style'] });
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener('resize', () => this.requestUpdate);
        window.removeEventListener('scroll', () => this.requestUpdate);

        this.resizeObserver.disconnect();
        this.mutationObserver.disconnect();
    }

    render() {
        if (this.isHidden) {
            return html``;
        }
        if (this.error) {
            return html`<code style="color: red">${this.localName}: ${this.error}</code>`;
        }

        const div = document.createElement('div');
        const rect = this.targetElement.getBoundingClientRect();
        const borderWidth = Math.max(this.borderWidth, 0);

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
