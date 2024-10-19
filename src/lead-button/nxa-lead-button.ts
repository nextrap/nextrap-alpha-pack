import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";


import {style} from './style';
import {ka_create_element} from "@kasimirjs/core/src/create-element";
import {ka_dom_ready} from "@kasimirjs/core/src/await/dom-ready";
import {ka_sleep} from "@kasimirjs/core";


@customElement('nxa-lead-button')
export class NxaLeadButton extends LitElement {
    static styles = style;

    // Option href - if set it will render an a href around the element
    @property() href = '';
    // Option target - if set it will render an a href around the element
    @property() target = '';


    @property() title = '';
    @property({type: Boolean}) spacer = false;
    @property() subtitle = '';
    @property() icon = '';
    @property() type = '';

    #renderContent() {
        return html`
            <slot name="icon" class="icon-section"></slot>
            <div class="text-section">
                <slot></slot>
            </div>`;
    }

    #renderButton() {
       return html`<button type="${this.type}" class="lead-button">${this.#renderContent()}</button>`;
    }

    #renderLink() {

        return html`<a href="${this.href}" target="${this.target}"><div class="lead-button">
            ${this.#renderContent()}</div></a>`;
    }


    async #applyClasses() {
        await ka_dom_ready();

        let classes = (getComputedStyle(this).getPropertyValue('--classes') || '').trim().split(' ').filter((c) => c.trim() !== '');
        this.classList.add(...classes);
    }


    connectedCallback() {
        if (!this.hasChildNodes()) {
            console.log("No child nodes", this);
            if (this.icon) {
                this.append(ka_create_element('i', {class: this.icon, slot: 'icon'}));
            }
            if (this.title) {
                this.append(ka_create_element('div', {class: 'title'}, this.title));
            }
            if (this.spacer) {
                this.append(ka_create_element('div', {class: 'spacer'}));
            }
            if (this.subtitle) {
                this.append(ka_create_element('div', {class: 'subtitle'}, this.subtitle));
            }
        }
        super.connectedCallback();
    }

    render() {



        (async () => {
            await ka_sleep(100);

        })();


        this.#applyClasses();

        return this.href ? this.#renderLink() : this.#renderButton();
    }
}
