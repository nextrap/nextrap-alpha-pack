import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";


import {style} from './style';
import {ka_create_element} from "@kasimirjs/core/src/create-element";


@customElement('nxa-lead-button')
export class NxaLeadButton extends LitElement {
    static styles = style;

    // Option href - if set it will render an a href around the element
    @property() href = '';
    // Option target - if set it will render an a href around the element
    @property() target = '';


    @property() title = '';
    @property() subtitle = '';
    @property() icon = '';

    #renderContent() {
        return html`
            <slot name="icon" class="icon-section"></slot>
            <div class="text-section">
                <slot></slot>
            </div>`;
    }

    #renderButton() {
       return html`<button class="lead-button">${this.#renderContent()}</button>`;
    }

    #renderLink() {

        return html`<a href="${this.href}" target="${this.target}"><div class="lead-button">
            ${this.#renderContent()}</div></a>`;
    }


    render() {
        if (this.icon) {
            this.append(ka_create_element('i', {class: this.icon, slot: 'icon'}));
        }
        if (this.title) {
            this.append(ka_create_element('div', {class: 'title'}, this.title));
        }
        if (this.subtitle) {
            this.append(ka_create_element('div', {class: 'subtitle'}, this.subtitle));
        }

        return this.href ? this.#renderLink() : this.#renderButton();
    }
}
