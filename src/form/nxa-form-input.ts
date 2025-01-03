import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styleInput} from './style-form-input';

type SelectOption = {
    key?: string;
    value: string;
} | {
    [key: string]: string;
} | string;

@customElement('nxa-form-input')
export class NxaFormInput extends LitElement {
    static formAssociated = true;
    private internals: ElementInternals;

    static styles = styleInput;

    @property() label = '';
    @property() name = '';
    @property() type = 'text';
    @property() size: 'sm' | 'md' | 'lg' = 'md';
    @property({ type: Boolean }) required = false;
    @property({ type: Boolean }) floating = false;
    @property({ type: Boolean }) inline = false;
    @property() helperText = '';
    @property() switchStyle: 'classic' | 'modern' = 'classic';
    @property() invalidFeedback = '';
    @property() validFeedback = '';

    @property({
        attribute: 'select-options',
        converter: {
            fromAttribute: (value: string) => {
                if (!value) return [];
                try {
                    return JSON.parse(value);
                } catch (e) {
                    console.warn('Invalid JSON in select-options:', e);
                    return [];
                }
            },
            toAttribute: (value: SelectOption[]) => {
                try {
                    return JSON.stringify(value);
                } catch (e) {
                    return '[]';
                }
            }
        }
    })
    selectOptions: SelectOption[] = [];

    @state() private touched = false;
    @state() private valid = false;
    @state() private invalid = false;
    @state() private isEmpty = true;

    private input: HTMLInputElement | HTMLSelectElement | null = null;

    constructor() {
        super();
        this.internals = this.attachInternals();
    }

    // Form-associated properties
    get form() { return this.internals.form; }
    get value() { return this.input?.value ?? ''; }
    set value(val: string) {
        if (this.input) {
            this.input.value = val;
            const event = new InputEvent('input', {
                bubbles: true,
                composed: true
            });
            this.input.dispatchEvent(event);
            this._handleInput(event);
        }
    }

    // Public getter for input element
    get inputElement(): HTMLInputElement | HTMLSelectElement | null {
        return this.input;
    }

    // Public validation method
    public checkValidity(): boolean {
        return this.input?.checkValidity() ?? false;
    }

    private updateFloatingState(input: HTMLInputElement | HTMLSelectElement) {
        if (!this.floating) return;

        const floatingDiv = this.shadowRoot?.querySelector('.form-floating');
        if (floatingDiv) {
            if (input.value) {
                floatingDiv.classList.add('has-value');
            } else {
                floatingDiv.classList.remove('has-value');
            }
        }
    }

    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener('click', (e) => {
            const label = e.target as HTMLLabelElement;
            if (label.tagName === 'LABEL') {
                const slot = this.shadowRoot?.querySelector('slot[name="input"]') as HTMLSlotElement;
                if (slot) {
                    const elements = slot.assignedElements();
                    const input = elements[0] as HTMLInputElement | HTMLSelectElement;
                    if (input) {
                        input.focus();
                        if (input instanceof HTMLInputElement && (input.type === 'checkbox' || input.type === 'radio')) {
                            input.click();
                        }
                    }
                }
            }
        });
        return root;
    }

    firstUpdated() {
        const slot = this.shadowRoot?.querySelector('slot[name="input"]') as HTMLSlotElement;
        if (slot) {
            slot.addEventListener('slotchange', () => {
                const elements = slot.assignedElements();
                this.input = elements[0] as HTMLInputElement | HTMLSelectElement;
                if (this.input) {
                    // Setup ID and copy attributes
                    this.input.id = this._uniqueId;
                    this._copyAttributes();

                    // Event listeners
                    this.input.addEventListener('input', (e) => {
                        this._handleInput(e);
                        this.internals.setFormValue(this.input!.value);
                    });

                    this.input.addEventListener('blur', (e) => this._handleBlur(e));
                    this.input.addEventListener('change', (e) => {
                        this._handleInput(e);
                        this.internals.setFormValue(this.input!.value);
                    });

                    // Handle initial value
                    if (this.input.value) {
                        this.internals.setFormValue(this.input.value);
                        this._validate(this.input);
                        this.updateFloatingState(this.input);
                    }

                    // If we have selectOptions and this is a select element
                    if (this.selectOptions.length > 0 && this.input instanceof HTMLSelectElement) {
                        this.updateSelectOptions(this.input);
                    }
                }
            });
        }
    }

    private _copyAttributes() {
        if (!this.input) return;

        const attrs = [
            'name', 'required', 'pattern', 'min', 'max', 'step',
            'minlength', 'maxlength', 'placeholder', 'readonly',
            'disabled', 'autocomplete', 'autofocus'
        ];

        attrs.forEach(attr => {
            if (this.hasAttribute(attr) && !this.input!.hasAttribute(attr)) {
                this.input!.setAttribute(attr, this.getAttribute(attr)!);
            }
        });

        // Special handling for aria attributes
        if (this.required) {
            this.internals.ariaRequired = 'true';
        }
    }

    private updateSelectOptions(select: HTMLSelectElement) {
        select.innerHTML = '';

        if (!Array.isArray(this.selectOptions)) {
            console.warn('selectOptions is not an array:', this.selectOptions);
            return;
        }

        this.selectOptions.forEach(option => {
            const optionElement = document.createElement('option');

            if (typeof option === 'string') {
                optionElement.value = option;
                optionElement.textContent = option;
            } else if ('key' in option && 'value' in option) {
                optionElement.value = option.key ?? '';
                optionElement.textContent = option.value;
            } else {
                const entries = Object.entries(option);
                if (entries.length === 1) {
                    const [key, value] = entries[0];
                    optionElement.value = key;
                    optionElement.textContent = value;
                }
            }

            select.appendChild(optionElement);
        });
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);

        if (changedProperties.has('selectOptions')) {
            if (this.input instanceof HTMLSelectElement) {
                this.updateSelectOptions(this.input);
            }
        }
    }

    private _handleInput(e: Event) {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        this.isEmpty = !target.value;
        this._validate(target);
        this.updateFloatingState(target);
    }

    private _handleBlur(e: Event) {
        this.touched = true;
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        this._validate(target);
    }

    private _validate(input: HTMLInputElement | HTMLSelectElement) {
        if (!input) return false;

        const validity = input.validity;
        const validationMessage = input.validationMessage || this.invalidFeedback;

        // Update ElementInternals validity
        if (!validity.valid) {
            this.internals.setValidity(validity, validationMessage, input);
        } else {
            this.internals.setValidity({});
        }

        // Handle special input types
        if (this.type === 'range') {
            this._setValidationState(true, input);
            return true;
        }

        if (input instanceof HTMLInputElement && (this.type === 'checkbox' || this.type === 'radio')) {
            return this._validateCheckableInput(input);
        }

        // Handle regular inputs
        this.isEmpty = !input.value;

        if (this.required && this.isEmpty) {
            this._setValidationState(false, input);
            return false;
        }

        if (!this.required && this.isEmpty) {
            this._setValidationState(true, input, true);
            return true;
        }

        const isValid = validity.valid;
        this._setValidationState(isValid, input);
        return isValid;
    }

    private _validateCheckableInput(input: HTMLInputElement): boolean {
        if (this.type === 'radio') {
            if (!this.required || !this.touched) {
                this._setValidationState(true, input, true);
                return true;
            }

            const groupName = input.getAttribute('name');
            if (!groupName) return false;

            const form = input.closest('form');
            const isGroupValid = form ?
                form.querySelector(`input[name="${groupName}"]:checked`) !== null :
                document.querySelector(`input[name="${groupName}"]:checked`) !== null;

            this._setValidationState(isGroupValid, input);
            return isGroupValid;
        }

        // Checkbox logic
        if (this.required) {
            const isValid = input.checked;
            this._setValidationState(isValid, input);
            return isValid;
        }

        this._setValidationState(true, input, true);
        return true;
    }

    private _setValidationState(isValid: boolean, input: HTMLInputElement | HTMLSelectElement, neutral = false) {
        this.valid = isValid;
        this.invalid = !isValid;

        if (neutral) {
            input.classList.remove('is-valid', 'is-invalid');
            this.style.setProperty('--show-valid-feedback', 'none');
            this.style.setProperty('--show-invalid-feedback', 'none');
            return;
        }

        if (isValid) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            this.style.setProperty('--show-valid-feedback', 'block');
            this.style.setProperty('--show-invalid-feedback', 'none');
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            this.style.setProperty('--show-valid-feedback', 'none');
            this.style.setProperty('--show-invalid-feedback', 'block');
        }
    }

    render() {
        if (!this.hasChildNodes()) {
            let inputElement = document.createElement('input');
            let copyVals = ["name", "type", "value", "placeholder", "required", "min", "max", "step", "pattern",
                "autocomplete", "autofocus", "disabled", "readonly", "size", "maxlength", "minlength",
                "multiple", "accept", "inputmode", "list", "form", "formaction", "formenctype",
                "formmethod", "formnovalidate", "formtarget"];

            copyVals.forEach((val) => {
                if (this.hasAttribute(val)) {
                    inputElement.setAttribute(val, this.getAttribute(val)!);
                }
            });

            inputElement.setAttribute("slot", "input");
            inputElement.classList.add(this.type === 'checkbox' || this.type === 'radio' ?
                "form-check-input" : "form-control");
            this.appendChild(inputElement);
        }

        const uniqueId = this._uniqueId;

        if (this.type === 'checkbox' || this.type === 'radio') {
            return html`
                <div class="form-check ${this.switchStyle === 'modern' ? 'form-switch' : ''}">
                    <slot name="input"></slot>
                    <label class="form-check-label" for="${uniqueId}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                    </label>
                    ${this.helperText ? html`<div class="form-text">${this.helperText}</div>` : ''}
                    ${this.invalidFeedback ? html`<div class="invalid-feedback">${this.invalidFeedback}</div>` : ''}
                </div>
            `;
        }

        if (!this.floating) {
            const content = html`
                <slot name="input"></slot>
                ${this.helperText ? html`<div class="form-text">${this.helperText}</div>` : ''}
                ${this.invalidFeedback ? html`<div class="invalid-feedback">${this.invalidFeedback}</div>` : ''}
                ${this.validFeedback ? html`<div class="valid-feedback">${this.validFeedback}</div>` : ''}
            `;

            if (this.inline) {
                return html`
                    <div class="form-inline">
                        ${this.label ? html`
                            <label class="form-label" for="${uniqueId}">
                                ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                            </label>
                        ` : ''}
                        <div class="input-wrapper">${content}</div>
                    </div>
                `;
            }

            return html`
                ${this.label ? html`
                    <label class="form-label" for="${uniqueId}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                    </label>
                ` : ''}
                ${content}
            `;
        }

        const labelClasses = this.size !== 'md' ? (this.size === 'sm' ? 'small' : 'large') : '';

        return html`
            <div class="form-floating">
                <slot name="input"></slot>
                <label class="${labelClasses}" for="${uniqueId}">
                    ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                </label>
                ${this.helperText ? html`<div class="form-text">${this.helperText}</div>` : ''}
                ${this.invalidFeedback ? html`<div class="invalid-feedback">${this.invalidFeedback}</div>` : ''}
                ${this.validFeedback ? html`<div class="valid-feedback">${this.validFeedback}</div>` : ''}
            </div>
        `;
    }

    private get _uniqueId() {
        if (this.input?.id) return this.input.id;
        return this.name ? `nxa-${this.name}` : `nxa-${Math.random().toString(36).substring(2, 11)}`;
    }
}
