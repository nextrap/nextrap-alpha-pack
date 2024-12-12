import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleForm } from './style-form';
import { NxaFormInput } from './nxa-form-input';

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
        // Listen for submit button clicks
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

        if (this.novalidate) {
            this._submitForm();
            return;
        }

        // Get all nxa-form-input elements
        const formInputs = Array.from(this.querySelectorAll('nxa-form-input'));
        let isValid = true;

        // Check validity of each nxa-form-input
        formInputs.forEach((formInput: NxaFormInput) => {
            const inputValid = formInput.validateOnSubmit();
            if (!inputValid) {
                isValid = false;
            }
        });

        // Dispatch custom event with validation result
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

        // If validation passed and event wasn't prevented, submit the form
        if (isValid && eventResult) {
            this._submitForm();
        }
    }

    private _submitForm() {
        if (!this.action) return;

        const formData = this._getFormData();
        const tempForm = document.createElement('form');
        tempForm.method = this.method;
        tempForm.action = this.action;
        if (this.target) tempForm.target = this.target;
        if (this.enctype) tempForm.enctype = this.enctype;

        // Add form data as hidden inputs
        for (const [name, value] of Object.entries(formData)) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = String(value);
            tempForm.appendChild(input);
        }

        // Submit the form
        document.body.appendChild(tempForm);
        tempForm.submit();
        document.body.removeChild(tempForm);
    }

    private _getFormData(): Record<string, any> {
        const formData: Record<string, any> = {};
        const formInputs = Array.from(this.querySelectorAll('nxa-form-input'));

        formInputs.forEach((formInput: NxaFormInput) => {
            if (!formInput.name) return;

            const inputElement = formInput.inputElement;
            if (!inputElement) return;

            if (formInput.type === 'checkbox') {
                formData[formInput.name] = (inputElement as HTMLInputElement).checked;
            } else if (formInput.type === 'radio') {
                if ((inputElement as HTMLInputElement).checked) {
                    formData[formInput.name] = inputElement.value;
                }
            } else {
                formData[formInput.name] = inputElement.value;
            }
        });

        return formData;
    }

    public validate(): boolean {
        const formInputs = Array.from(this.querySelectorAll('nxa-form-input'));
        return formInputs.every((formInput: NxaFormInput) => formInput.validateOnSubmit());
    }
}
