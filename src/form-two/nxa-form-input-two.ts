import { html, LitElement, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './nxa-form-input-two.scss';

type SelectOption = {
    key?: string;
    value: string;
} | {
    [key: string]: string;
} | string;

@customElement('nxa-form-input-two')
export class NxaFormInputTwo extends LitElement {
    static formAssociated = true;
    private internals: ElementInternals;

    @state() private input?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

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
    @property() inputStyle: 'classic' | 'modern' = 'classic';
    @property({ type: Number }) rows = 3;
    @property({ type: Number }) maxRows = 10;

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

    constructor() {
        super();
        this.internals = this.attachInternals();
    }

    private getInputClasses() {
        const classes = [];

        if (this.type === 'checkbox' || this.type === 'radio') {
            classes.push('form-check-input');
            if (this.inputStyle === 'modern') classes.push('switch-input');
        } else {
            classes.push('form-control');
            if (this.size !== 'md') classes.push(`form-control-${this.size}`);
            if (this.inputStyle === 'modern') classes.push('modern');
        }

        if (this.touched || this.invalid) {
            if (this.required || !this.isEmpty) {
                if (this.valid) classes.push('is-valid');
                if (this.invalid) classes.push('is-invalid');
            }
        }

        return classes.join(' ');
    }

    private _handleInput(e: Event) {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        this.value = target.value;
        this.isEmpty = !this.value;

        if (this.type === 'textarea') {
            requestAnimationFrame(() => {
                this._adjustHeight(target as HTMLTextAreaElement);
            });
        }

        if (this.floating) {
            this.updateFloatingState(target as HTMLInputElement);
        }

        this._validate();
        this.internals.setFormValue(this.value);
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }


    private _adjustHeight(textarea: HTMLTextAreaElement) {
        textarea.style.height = 'auto';

        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight || '20', 10);
        const minHeight = lineHeight * this.rows;
        const maxHeight = lineHeight * this.maxRows;

        const contentHeight = textarea.scrollHeight;
        const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);

        textarea.style.height = `${newHeight}px`;
        textarea.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
    }


    private _handleChange(e: Event) {
        const target = e.target as HTMLInputElement;

        if (this.type === 'radio') {
            const form = this.closest('form');
            if (form) {
                const radios = form.querySelectorAll(`nxa-form-input-two[type="radio"][name="${this.name}"]`);
                radios.forEach((radio: NxaFormInputTwo) => {
                    radio.checked = radio === this;
                    radio._validate(); // Re-validate all radios in the group
                });
            }
        }

        if (this.type === 'checkbox' || this.type === 'radio') {
            this.checked = target.checked;
        }

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

    public validateOnSubmit(): boolean {
        this.touched = true;
        this._validate();
        return this.valid;
    }

    private _validate() {
        const input = this.shadowRoot?.querySelector(
            this.type === 'textarea' ? 'textarea' : this.type === 'select' ? 'select' : 'input'
        );
        if (!input) return false;

        if (this.type === 'range') {
            this.valid = true;
            this.invalid = false;
            return true;
        }

        if (this.type === 'textarea') {
            this.isEmpty = !this.value.trim(); // Check if trimmed value is empty
            if (this.required && this.isEmpty) {
                this.valid = false;
                this.invalid = true;
                this.internals.setValidity(
                    { valueMissing: true },
                    'This field is required.',
                    input
                );
                return false;
            }
            this.valid = true;
            this.invalid = false;
            this.internals.setValidity({}, '');
            return true;
        }

        if (this.type === 'select') {
            this.isEmpty = !this.value || this.value === '';
            if (this.required && this.isEmpty) {
                this.valid = false;
                this.invalid = true;
                this.internals.setValidity(
                    { valueMissing: true },
                    'Please select a valid option.',
                    input
                );
                return false;
            }
            this.valid = true;
            this.invalid = false;
            this.internals.setValidity({}, '');
            return true;
        }

        if (this.type !== 'checkbox' && this.type !== 'radio') {
            this.isEmpty = !this.value;

            if (this.required && this.isEmpty) {
                this.valid = false;
                this.invalid = true;
                this.internals.setValidity(
                    { valueMissing: true },
                    'This field is required.',
                    input
                );
                return false;
            }

            if (!this.required && this.isEmpty) {
                this.valid = false;
                this.invalid = false;
                this.internals.setValidity({}, '');
                return true;
            }

            this.valid = input.checkValidity();
            this.invalid = !this.valid;
            this.internals.setValidity(
                this.invalid ? { customError: true } : {},
                this.invalid ? 'Invalid value' : ''
            );
            return this.valid;
        } else if (this.type === 'radio') {
            if (this.required) {
                const form = this.closest('form');
                if (form) {
                    const radios = form.querySelectorAll(
                        `nxa-form-input-two[type="radio"][name="${this.name}"]`
                    );
                    let anyChecked = false;

                    radios.forEach((radio: NxaFormInputTwo) => {
                        if (radio.checked) {
                            anyChecked = true;
                        }
                    });

                    radios.forEach((radio: NxaFormInputTwo) => {
                        radio.valid = anyChecked;
                        radio.invalid = !anyChecked;
                        radio.internals.setValidity(
                            anyChecked ? {} : { valueMissing: true },
                            anyChecked ? '' : 'Please select an option.',
                            radio.shadowRoot?.querySelector('input') || null
                        );
                    });

                    return anyChecked;
                }
            }
        } else {
            if (this.required) {
                this.valid = this.checked;
                this.invalid = !this.valid;
                this.internals.setValidity(
                    this.valid ? {} : { valueMissing: true },
                    this.valid ? '' : 'This field is required.',
                    input
                );
                return this.valid;
            }
        }

        this.valid = true;
        this.invalid = false;
        this.internals.setValidity({}, '');
        return true;
    }

    connectedCallback() {
        super.connectedCallback();
        this.internals.role = 'textbox';

        const form = this.internals.form;
        if (form) {
            form.addEventListener('submit', this._handleFormSubmit.bind(this));
        }
    }

    private _handleFormSubmit(event: Event) {
        const form = this.internals.form;
        if (!form) return;

        let formIsValid = true;

        const elements = form.querySelectorAll('nxa-form-input-two');
        const validatedRadios = new Set<string>();

        elements.forEach((element) => {
            const input = element as NxaFormInputTwo;

            if (input.type === 'radio' && input.required) {
                if (!validatedRadios.has(input.name)) {
                    const radios = form.querySelectorAll(
                        `nxa-form-input-two[type="radio"][name="${input.name}"]`
                    );

                    let anyChecked = false;
                    radios.forEach((radio: NxaFormInputTwo) => {
                        if (radio.checked) {
                            anyChecked = true;
                        }
                    });

                    radios.forEach((radio: NxaFormInputTwo) => {
                        radio.valid = anyChecked;
                        radio.invalid = !anyChecked;
                        radio.internals.setValidity(
                            anyChecked ? {} : { valueMissing: true },
                            anyChecked ? '' : 'Please select an option.',
                            radio.shadowRoot?.querySelector('input') || null
                        );
                    });

                    validatedRadios.add(input.name); // Mark this group as validated
                    formIsValid = formIsValid && anyChecked;
                }
            } else if (input.required) {
                const isValid = input.validateOnSubmit();
                formIsValid = formIsValid && isValid;
            }
        });

        if (!formIsValid) {
            event.preventDefault();
        }
    }

    firstUpdated() {
        if (this.type === 'textarea') {
            requestAnimationFrame(() => {
                const textarea = this.shadowRoot?.querySelector('textarea');
                if (textarea) {
                    this._adjustHeight(textarea);
                }
            });
        }

        if (this.type === 'radio' && this.checked) {
            const form = this.closest('form');
            if (form) {
                const radios = form.querySelectorAll(`nxa-form-input-two[type="radio"][name="${this.name}"]`);
                radios.forEach((radio: NxaFormInputTwo) => {
                    if (radio !== this) {
                        radio.checked = false;
                    }
                });
            }
        }
    }

    private getLabelClasses() {
        const classes = [];
        if (this.type === 'checkbox' || this.type === 'radio') {
            classes.push('form-check-label');
            if (this.inputStyle === 'modern') classes.push('switch-label');
        } else {
            classes.push('form-label');
        }
        return classes.join(' ');
    }

    render() {
        if (this.type === 'textarea') {
            return html`
                ${this.label
                    ? html`
                    <label class="form-label" for="textarea-${this.name}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                    </label>`
                    : ''}
                <textarea
                    id="textarea-${this.name}"
                    name="${this.name}"
                    class="${this.getInputClasses()}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    rows="${this.rows}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                >${this.value}</textarea>
            `;
        }

        if (this.type === 'checkbox' || this.type === 'radio') {
            return html`
                <div class="form-check ${this.inputStyle === 'modern' ? 'form-switch' : ''}">
                    <input
                        type="${this.type}"
                        class="${this.getInputClasses()}"
                        id="input-${this.name}"
                        name="${this.name}"
                        .checked="${this.checked}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @change="${this._handleChange}"
                        @blur="${this._handleBlur}"
                    />
                    <label class="${this.getLabelClasses()}" for="input-${this.name}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                    </label>
                </div>
            `;
        }

        if (this.type === 'select') {
            return html`
                ${this.label ? html`<label class="form-label" for="input-${this.name}">
                    ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}</label>` : ''}
                <select
                    id="input-${this.name}"
                    name="${this.name}"
                    class="${this.getInputClasses()} ${this.inputStyle === 'modern' ? 'modern' : ''}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    @change="${this._handleInput}"
                    @blur="${this._handleBlur}"
                >
                    ${this.selectOptions.map(option => {
                        if (typeof option === 'string') {
                            return html`<option value="${option}">${option}</option>`;
                        } else if ('key' in option && 'value' in option) {
                            return html`<option value="${option.key ?? ''}">${option.value}</option>`;
                        } else {
                            const entries = Object.entries(option);
                            if (entries.length === 1) {
                                const [key, value] = entries[0];
                                return html`<option value="${key}">${value}</option>`;
                            }
                        }
                    })}
                </select>
            `;
        }

        if (this.type === 'range') {
            return html`
                ${this.label ? html`<label class="form-label" for="input-${this.name}">${this.label}</label>` : ''}
                <input
                    type="range"
                    class="form-control"
                    id="input-${this.name}"
                    name="${this.name}"
                    .value="${this.value}"
                    min="${this.min}"
                    max="${this.max}"
                    step="${this.step}"
                    ?disabled="${this.disabled}"
                    @input="${this._handleInput}"
                />
            `;
        }

        if (!this.floating) {
            return html`
                ${this.label ? html`<label class="form-label" for="input-${this.name}">
                    ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}</label>` : ''}
                <input
                    type="${this.type}"
                    class="${this.getInputClasses()}"
                    id="input-${this.name}"
                    name="${this.name}"
                    .value="${this.value}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                />
            `;
        }

        // Floating label layout
        return html`
            <div class="form-floating">
                <input
                    type="${this.type}"
                    class="${this.getInputClasses()}"
                    id="input-${this.name}"
                    name="${this.name}"
                    .value="${this.value}"
                    placeholder="${this.placeholder || ' '}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                />
                <label for="input-${this.name}">
                    ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
                </label>
            </div>
        `;
    }
}
