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
    @property() invalidFeedback = 'Please provide a valid value';
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

    // Public property to get input
    get inputElement(): HTMLInputElement | HTMLSelectElement | null {
        return this.input;
    }

    // Public validation method
    public validateOnSubmit(): boolean {
        if (!this.input) return false;
        this.touched = true;
        return this._validate(this.input);
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
                    // Make sure ID matches what we're using in the label
                    this.input.id = this._uniqueId;

                    this.required = this.input.hasAttribute('required');
                    this.name = this.input.getAttribute('name') || this.name;

                    if (this.input instanceof HTMLInputElement) {
                        this.type = this.input.type || this.type;

                        // Add special handling for radio buttons
                        if (this.type === 'radio') {
                            const groupName = this.input.getAttribute('name');
                            if (groupName) {
                                this.input.addEventListener('change', () => {
                                    // Find all radio inputs in the group and validate them
                                    const form = this.input?.closest('form');
                                    const allGroupRadios = form ?
                                        form.querySelectorAll(`input[name="${groupName}"]`) :
                                        document.querySelectorAll(`input[name="${groupName}"]`);

                                    // Trigger validation for each radio in the group
                                    allGroupRadios.forEach(radio => {
                                        const radioInput = radio as HTMLInputElement;
                                        const radioComponent = radio.closest('nxa-form-input');
                                        if (radioComponent) {
                                            (radioComponent as any)._validate(radioInput);
                                        }
                                    });
                                });
                            }
                        }
                    }

                    // If we have selectOptions and this is a select element, populate the options
                    if (this.selectOptions.length > 0 && this.input instanceof HTMLSelectElement) {
                        this.updateSelectOptions(this.input);
                    }

                    this.input.addEventListener('input', (e) => {
                        this._handleInput(e);
                        this.updateFloatingState(this.input!);
                    });
                    this.input.addEventListener('blur', (e) => this._handleBlur(e));
                    this.input.addEventListener('change', (e) => this._handleInput(e));

                    if (this.input.value) {
                        this._validate(this.input);
                        this.updateFloatingState(this.input);
                    }
                }
            });
        }
    }

    private updateSelectOptions(select: HTMLSelectElement) {
        // Clear existing options
        select.innerHTML = '';

        if (!this.selectOptions || !Array.isArray(this.selectOptions)) {
            console.warn('selectOptions is not an array:', this.selectOptions);
            return;
        }

        // Add options from selectOptions property
        this.selectOptions.forEach(option => {
            const optionElement = document.createElement('option');

            if (typeof option === 'string') {
                // Case 3: Simple string value
                optionElement.value = option;
                optionElement.textContent = option;
            } else if ('key' in option && 'value' in option) {
                // Case 1: {key, value} object
                optionElement.value = option.key ?? '';  // Use empty string if key is undefined
                optionElement.textContent = option.value;
            } else {
                // Case 2: {KEY: "VALUE"} object
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
    }

    private _handleBlur(e: Event) {
        this.touched = true;
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        this._validate(target);
    }

    private _validate(input: HTMLInputElement | HTMLSelectElement) {
        if (!input) return false;

        if (this.type === 'range') {
            this.valid = true;
            this.invalid = false;
            this.style.setProperty('--show-valid-feedback', 'none');
            this.style.setProperty('--show-invalid-feedback', 'none');
            return true;
        }

        if (input instanceof HTMLInputElement && (this.type === 'checkbox' || this.type === 'radio')) {
            if (this.type === 'radio') {
                // For radio buttons, check the entire group
                if (this.required && this.touched) {
                    // Find all radio buttons in the same group
                    const groupName = input.getAttribute('name');
                    if (!groupName) return false;

                    // Check if any radio in the group is checked
                    const form = input.closest('form');
                    const isGroupValid = form ?
                        form.querySelector(`input[name="${groupName}"]:checked`) !== null :
                        document.querySelector(`input[name="${groupName}"]:checked`) !== null;

                    this.valid = isGroupValid;
                    this.invalid = !isGroupValid;

                    if (!isGroupValid) {
                        // Apply invalid state to all radios in the group
                        input.classList.add('is-invalid');
                        input.classList.remove('is-valid');
                        this.style.setProperty('--show-valid-feedback', 'none');
                        this.style.setProperty('--show-invalid-feedback', 'block');
                    } else {
                        // Remove all validation states when group becomes valid
                        input.classList.remove('is-invalid', 'is-valid');
                        this.style.setProperty('--show-valid-feedback', 'none');
                        this.style.setProperty('--show-invalid-feedback', 'none');
                    }
                } else {
                    // If not required or not touched, remove all validation states
                    input.classList.remove('is-invalid', 'is-valid');
                    this.style.setProperty('--show-valid-feedback', 'none');
                    this.style.setProperty('--show-invalid-feedback', 'none');
                }
            } else {
                // Checkbox logic stays the same
                if (this.required) {
                    this.valid = input.checked;
                    this.invalid = !input.checked;

                    if (this.touched) {
                        if (this.valid) {
                            input.classList.remove('is-invalid');
                            input.classList.add('is-valid');
                            this.style.setProperty('--show-valid-feedback', 'block');
                            this.style.setProperty('--show-invalid-feedback', 'none');
                        } else {
                            input.classList.add('is-invalid');
                            input.classList.remove('is-valid');
                            this.style.setProperty('--show-valid-feedback', 'none');
                            this.style.setProperty('--show-invalid-feedback', 'block');
                        }
                    }
                } else {
                    input.classList.remove('is-invalid');
                    this.valid = true;
                    this.invalid = false;
                    this.style.setProperty('--show-valid-feedback', 'none');
                    this.style.setProperty('--show-invalid-feedback', 'none');
                }
            }
            return this.valid;
        }


        this.isEmpty = !input.value;

        if (this.required && this.isEmpty) {
            this.valid = false;
            this.invalid = true;
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            this.style.setProperty('--show-valid-feedback', 'none');
            this.style.setProperty('--show-invalid-feedback', 'block');
            return false;
        }

        if (!this.required && this.isEmpty) {
            this.valid = false;
            this.invalid = false;
            input.classList.remove('is-valid', 'is-invalid');
            this.style.setProperty('--show-valid-feedback', 'none');
            this.style.setProperty('--show-invalid-feedback', 'none');
            return true;
        }

        this.valid = input.checkValidity();
        this.invalid = !this.valid;

        if (this.valid) {
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

        return this.valid;
    }

    render() {

        if ( ! this.hasChildNodes()) {
            let inputElement = document.createElement('input');
            // Walk all possible properties of input and if set, copy them from the parent element
            let copyVals = ["name", "type", "value", "placeholder", "required", "min", "max", "step", "pattern", "autocomplete", "autofocus", "disabled", "readonly", "size", "maxlength", "minlength", "multiple", "accept", "inputmode", "list", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"];
            copyVals.forEach((val) => {
                if (this.hasAttribute(val)) {
                    inputElement.setAttribute(val, this.getAttribute(val));
                }
            });
            inputElement.setAttribute("slot", "input");
            if (this.type === 'checkbox' || this.type === 'radio') {
                inputElement.classList.add("form-check-input");
            } else {
                inputElement.classList.add("form-control");
            }
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
                    ${this.helperText ? html`
                        <div class="form-text">${this.helperText}</div>
                    ` : ''}
                    <div class="invalid-feedback">
                        ${this.invalidFeedback}
                    </div>
                </div>
            `;
        }

        if (!this.floating) {
            const content = html`
                <slot name="input"></slot>
                ${this.helperText ? html`
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
                <div class="invalid-feedback">
                    ${this.invalidFeedback}
                </div>
                <div class="valid-feedback">
                    ${this.validFeedback}
                </div>
            `;

            if (this.inline) {
                return html`
                    <div class="form-inline">
                        ${this.label ? html`
                            <label class="form-label" for="${uniqueId}">
                                ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                            </label>
                        ` : ''}
                        <div class="input-wrapper">
                            ${content}
                        </div>
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

        const labelClasses = this.size !== 'md' ? this.size === 'sm' ? 'small' : 'large' : '';

        return html`
            <div class="form-floating">
                <slot name="input"></slot>
                <label class="${labelClasses}" for="${uniqueId}">
                    ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                </label>
                ${this.helperText ? html`
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
                <div class="invalid-feedback">
                    ${this.invalidFeedback}
                </div>
                <div class="valid-feedback">
                    ${this.validFeedback}
                </div>
            </div>
        `;
    }

    private get _uniqueId() {
        if (this.input?.id) return this.input.id;
        return this.name ? `nxa-${this.name}` : `nxa-${Math.random().toString(36).substring(2, 11)}`;
    }
}
