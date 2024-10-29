import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleInput } from './style-form-input';

@customElement('nxa-form-input')
export class NxaFormInput extends LitElement {
    static styles = styleInput;

    @property() label = '';
    @property() placeholder = '';
    @property() value = '';
    @property() name = '';
    @property() type = 'text';
    @property() size: 'sm' | 'md' | 'lg' = 'md';
    @property({ type: Boolean }) required = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) readonly = false;
    @property({ type: Boolean }) floating = false;
    @property({ type: Boolean }) checked = false;
    @property() min = '';
    @property() max = '';
    @property() step = '';
    @property() helperText = '';
    @property() switchStyle: 'classic' | 'modern' = 'classic';

    @state() private touched = false;
    @state() private valid = false;
    @state() private invalid = false;
    @state() private isEmpty = true;

    private getInputClasses() {
        const classes = [];

        if (this.type === 'checkbox' || this.type === 'radio') {
            classes.push('form-check-input');
            if (this.switchStyle === 'modern') classes.push('switch-input');
        } else {
            classes.push('form-control');
            if (this.size !== 'md') classes.push(`form-control-${this.size}`);
        }

        if (this.touched || this.invalid) {
            if (this.required || !this.isEmpty) {
                if (this.valid) classes.push('is-valid');
                if (this.invalid) classes.push('is-invalid');
            }
        }

        return classes.join(' ');
    }

    private getLabelClasses() {
        const classes = [];
        if (this.type === 'checkbox' || this.type === 'radio') {
            classes.push('form-check-label');
            if (this.switchStyle === 'modern') classes.push('switch-label');
        } else {
            classes.push('form-label');
        }
        return classes.join(' ');
    }

    private get _uniqueId() {
        return this.name || Math.random().toString(36).substring(2, 11);
    }

    private _handleInput(e: Event) {
        const target = e.target as HTMLInputElement;
        this.value = target.value;
        this.isEmpty = !this.value;
        this._validate();
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    private _handleChange(e: Event) {
        const target = e.target as HTMLInputElement;

        if (this.type === 'radio') {
            const form = this.closest('nxa-form');
            if (form) {
                const radios = form.querySelectorAll(`nxa-form-input[type="radio"][name="${this.name}"]`);
                radios.forEach((radio: NxaFormInput) => {
                    if (radio !== this) {
                        radio.checked = false;
                    }
                });
            }
        }

        this.checked = target.checked;
        this.isEmpty = false;
        this._validate();
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }

    private _handleBlur() {
        this.touched = true;
        this._validate();
    }

    public validateOnSubmit(): boolean {
        this.touched = true;
        this._validate();
        return this.valid;
    }

    private _validate() {
        const input = this.shadowRoot?.querySelector('input');
        if (!input) return false;

        // Skip validation for range inputs
        if (this.type === 'range') {
            this.valid = true;
            this.invalid = false;
            return true;
        }

        if (this.type !== 'checkbox' && this.type !== 'radio') {
            this.isEmpty = !this.value;

            if (this.required && this.isEmpty) {
                this.valid = false;
                this.invalid = true;
                return false;
            }

            if (!this.required && this.isEmpty) {
                this.valid = false;
                this.invalid = false;
                return true;
            }

            this.valid = input.checkValidity();
            this.invalid = !this.valid;
            return this.valid;
        } else if (this.type === 'radio') {
            if (this.required) {
                const form = this.closest('nxa-form');
                if (form) {
                    const radios = form.querySelectorAll(`nxa-form-input[type="radio"][name="${this.name}"]`);
                    let anyChecked = false;

                    radios.forEach((radio: NxaFormInput) => {
                        if (radio.checked) {
                            anyChecked = true;
                        }
                    });

                    radios.forEach((radio: NxaFormInput) => {
                        radio.valid = anyChecked;
                        radio.invalid = !anyChecked;
                    });

                    return anyChecked;
                }
            }
        } else {
            if (this.required) {
                this.valid = this.checked;
                this.invalid = !this.valid;
                return this.valid;
            }
        }

        this.valid = true;
        this.invalid = false;
        return true;
    }

    firstUpdated() {
        if (this.type === 'radio' && this.checked) {
            const form = this.closest('nxa-form');
            if (form) {
                const radios = form.querySelectorAll(`nxa-form-input[type="radio"][name="${this.name}"]`);
                radios.forEach((radio: NxaFormInput) => {
                    if (radio !== this) {
                        radio.checked = false;
                    }
                });
            }
        }
    }

    render() {
        if (this.type === 'checkbox' || this.type === 'radio') {
            return html`
                <div class="form-check ${this.switchStyle === 'modern' ? 'form-switch' : ''}">
                    <input
                        type="${this.type}"
                        class="${this.getInputClasses()}"
                        id="input-${this._uniqueId}"
                        .checked="${this.checked}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @change="${this._handleChange}"
                        @blur="${this._handleBlur}"
                    >
                    <label class="${this.getLabelClasses()}" for="input-${this._uniqueId}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                    </label>
                    ${this.helperText ? html`
                        <div class="form-text">${this.helperText}</div>
                    ` : ''}
                    <div class="invalid-feedback">
                        <slot name="invalid-feedback">Please select an option</slot>
                    </div>
                </div>
            `;
        }

        if (this.type === 'range') {
            return html`
                ${this.label ? html`
                    <label class="form-label" for="input-${this._uniqueId}">
                        ${this.label}
                    </label>
                ` : ''}
                <input
                    type="range"
                    class="form-control"
                    id="input-${this._uniqueId}"
                    .value="${this.value}"
                    min="${this.min}"
                    max="${this.max}"
                    step="${this.step}"
                    ?disabled="${this.disabled}"
                    @input="${this._handleInput}"
                >
                ${this.helperText ? html`
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
            `;
        }

        if (!this.floating) {
            return html`
                ${this.label ? html`
                    <label class="form-label" for="input-${this._uniqueId}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                    </label>
                ` : ''}
                <input
                    type="${this.type}"
                    class="${this.getInputClasses()}"
                    id="input-${this._uniqueId}"
                    .value="${this.value}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                >
                ${this.helperText ? html`
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
                <div class="invalid-feedback">
                    <slot name="invalid-feedback">Please provide a valid value</slot>
                </div>
                <div class="valid-feedback">
                    <slot name="valid-feedback">Looks good!</slot>
                </div>
            `;
        }

        // Floating label layout
        return html`
            <div class="form-floating">
                <input
                    type="${this.type}"
                    class="${this.getInputClasses()}"
                    id="input-${this._uniqueId}"
                    .value="${this.value}"
                    placeholder="${this.placeholder || ' '}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                >
                <label for="input-${this._uniqueId}">
                    ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                </label>
                ${this.helperText ? html`
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
                <div class="invalid-feedback">
                    <slot name="invalid-feedback">Please provide a valid value</slot>
                </div>
                <div class="valid-feedback">
                    <slot name="valid-feedback">Looks good!</slot>
                </div>
            </div>
        `;
    }
}
