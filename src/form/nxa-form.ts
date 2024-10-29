import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleForm } from './style-form';
import { NxaFormInput } from './nxa-form-input';
import { NxaFormTextarea } from './nxa-form-textarea';

@customElement('nxa-form')
export class NxaForm extends LitElement {
    static styles = styleForm;

    @property() action = '';
    @property() method: 'get' | 'post' = 'post';
    @property() enctype = '';
    @property() target = '';
    @property({ type: Boolean }) novalidate = false;
    @property({ type: Boolean, reflect: true }) modern = false;

    firstUpdated() {
        this.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' && target.getAttribute('type') === 'submit') {
                this._handleSubmit(e);
            }
        });
    }

    render() {
        return html`
            <form
                action="${this.action}"
                method="${this.method}"
                enctype="${this.enctype}"
                target="${this.target}"
                ?novalidate="${this.novalidate}"
            >
                <slot></slot>
            </form>
        `;
    }

    private _handleSubmit(e: Event) {
        e.preventDefault();

        const inputs = this.querySelectorAll('nxa-form-input, nxa-form-textarea');
        let isValid = true;

        inputs.forEach((input: NxaFormInput | NxaFormTextarea) => {
            if (!input.validateOnSubmit()) {
                isValid = false;
            }
        });

        const submitEvent = new CustomEvent('form-submit', {
            detail: {
                valid: isValid,
                formData: this._getFormData()
            },
            bubbles: true,
            composed: true,
            cancelable: true
        });

        const eventResult = this.dispatchEvent(submitEvent);

        if (isValid && this.action && eventResult) {
            const formData = this._getFormData();
            const tempForm = document.createElement('form');
            tempForm.method = this.method;
            tempForm.action = this.action;
            if (this.target) tempForm.target = this.target;
            if (this.enctype) tempForm.enctype = this.enctype;

            Object.entries(formData).forEach(([name, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = name;
                input.value = String(value);
                tempForm.appendChild(input);
            });

            document.body.appendChild(tempForm);
            tempForm.submit();
            document.body.removeChild(tempForm);
        }
    }

    private _getFormData(): Record<string, any> {
        const formData: Record<string, any> = {};
        const inputs = this.querySelectorAll('nxa-form-input, nxa-form-textarea');

        inputs.forEach((input: NxaFormInput | NxaFormTextarea) => {
            if (input.name) {
                if (input instanceof NxaFormInput) {
                    if (input.type === 'checkbox') {
                        formData[input.name] = input.checked;
                    } else if (input.type === 'radio') {
                        if (input.checked) {
                            formData[input.name] = input.value;
                        }
                    } else {
                        formData[input.name] = input.value;
                    }
                } else {
                    formData[input.name] = input.value;
                }
            }
        });

        return formData;
    }

    public validate(): boolean {
        const inputs = this.querySelectorAll('nxa-form-input, nxa-form-textarea');
        let isValid = true;

        inputs.forEach((input: NxaFormInput | NxaFormTextarea) => {
            if (!input.validateOnSubmit()) {
                isValid = false;
            }
        });

        return isValid;
    }
}
