var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, LitElement, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './nxa-form-input-two.scss';
let NxaFormInputTwo = class NxaFormInputTwo extends LitElement {
    constructor() {
        super();
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.name = '';
        this.type = 'text';
        this.size = 'md';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.floating = false;
        this.checked = false;
        this.min = '';
        this.max = '';
        this.step = '';
        this.inputStyle = 'classic';
        this.rows = 3;
        this.maxRows = 10;
        this.selectOptions = [];
        this.touched = false;
        this.valid = false;
        this.invalid = false;
        this.isEmpty = true;
        this.internals = this.attachInternals();
    }
    getInputClasses() {
        const classes = [];
        if (this.type === 'checkbox' || this.type === 'radio') {
            classes.push('form-check-input');
            if (this.inputStyle === 'modern')
                classes.push('switch-input');
        }
        else {
            classes.push('form-control');
            if (this.size !== 'md')
                classes.push(`form-control-${this.size}`);
            if (this.inputStyle === 'modern')
                classes.push('modern');
        }
        if (this.touched || this.invalid) {
            if (this.required || !this.isEmpty) {
                if (this.valid)
                    classes.push('is-valid');
                if (this.invalid)
                    classes.push('is-invalid');
            }
        }
        return classes.join(' ');
    }
    _handleInput(e) {
        const target = e.target;
        this.value = target.value;
        this.isEmpty = !this.value;
        if (this.type === 'textarea') {
            requestAnimationFrame(() => {
                this._adjustHeight(target);
            });
        }
        if (this.floating) {
            this.updateFloatingState(target);
        }
        this._validate();
        this.internals.setFormValue(this.value);
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    _adjustHeight(textarea) {
        textarea.style.height = 'auto';
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight || '20', 10);
        const minHeight = lineHeight * this.rows;
        const maxHeight = lineHeight * this.maxRows;
        const contentHeight = textarea.scrollHeight;
        const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
        textarea.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
    }
    _handleChange(e) {
        const target = e.target;
        if (this.type === 'radio') {
            const form = this.closest('form');
            if (form) {
                const radios = form.querySelectorAll(`nxa-form-input-two[type="radio"][name="${this.name}"]`);
                radios.forEach((radio) => {
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
    _handleBlur() {
        this.touched = true;
        this._validate();
    }
    updateFloatingState(input) {
        var _a;
        if (!this.floating)
            return;
        const floatingDiv = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.form-floating');
        if (floatingDiv) {
            if (input.value) {
                floatingDiv.classList.add('has-value');
            }
            else {
                floatingDiv.classList.remove('has-value');
            }
        }
    }
    validateOnSubmit() {
        this.touched = true;
        this._validate();
        return this.valid;
    }
    _validate() {
        var _a;
        const input = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(this.type === 'textarea' ? 'textarea' : this.type === 'select' ? 'select' : 'input');
        if (!input)
            return false;
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
                this.internals.setValidity({ valueMissing: true }, 'This field is required.', input);
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
                this.internals.setValidity({ valueMissing: true }, 'Please select a valid option.', input);
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
                this.internals.setValidity({ valueMissing: true }, 'This field is required.', input);
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
            this.internals.setValidity(this.invalid ? { customError: true } : {}, this.invalid ? 'Invalid value' : '');
            return this.valid;
        }
        else if (this.type === 'radio') {
            if (this.required) {
                const form = this.closest('form');
                if (form) {
                    const radios = form.querySelectorAll(`nxa-form-input-two[type="radio"][name="${this.name}"]`);
                    let anyChecked = false;
                    radios.forEach((radio) => {
                        if (radio.checked) {
                            anyChecked = true;
                        }
                    });
                    radios.forEach((radio) => {
                        var _a;
                        radio.valid = anyChecked;
                        radio.invalid = !anyChecked;
                        radio.internals.setValidity(anyChecked ? {} : { valueMissing: true }, anyChecked ? '' : 'Please select an option.', ((_a = radio.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input')) || null);
                    });
                    return anyChecked;
                }
            }
        }
        else {
            if (this.required) {
                this.valid = this.checked;
                this.invalid = !this.valid;
                this.internals.setValidity(this.valid ? {} : { valueMissing: true }, this.valid ? '' : 'This field is required.', input);
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
    _handleFormSubmit(event) {
        const form = this.internals.form;
        if (!form)
            return;
        let formIsValid = true;
        const elements = form.querySelectorAll('nxa-form-input-two');
        const validatedRadios = new Set();
        elements.forEach((element) => {
            const input = element;
            if (input.type === 'radio' && input.required) {
                if (!validatedRadios.has(input.name)) {
                    const radios = form.querySelectorAll(`nxa-form-input-two[type="radio"][name="${input.name}"]`);
                    let anyChecked = false;
                    radios.forEach((radio) => {
                        if (radio.checked) {
                            anyChecked = true;
                        }
                    });
                    radios.forEach((radio) => {
                        var _a;
                        radio.valid = anyChecked;
                        radio.invalid = !anyChecked;
                        radio.internals.setValidity(anyChecked ? {} : { valueMissing: true }, anyChecked ? '' : 'Please select an option.', ((_a = radio.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input')) || null);
                    });
                    validatedRadios.add(input.name); // Mark this group as validated
                    formIsValid = formIsValid && anyChecked;
                }
            }
            else if (input.required) {
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
                var _a;
                const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('textarea');
                if (textarea) {
                    this._adjustHeight(textarea);
                }
            });
        }
        if (this.type === 'radio' && this.checked) {
            const form = this.closest('form');
            if (form) {
                const radios = form.querySelectorAll(`nxa-form-input-two[type="radio"][name="${this.name}"]`);
                radios.forEach((radio) => {
                    if (radio !== this) {
                        radio.checked = false;
                    }
                });
            }
        }
    }
    getLabelClasses() {
        const classes = [];
        if (this.type === 'checkbox' || this.type === 'radio') {
            classes.push('form-check-label');
            if (this.inputStyle === 'modern')
                classes.push('switch-label');
        }
        else {
            classes.push('form-label');
        }
        return classes.join(' ');
    }
    render() {
        if (this.type === 'textarea') {
            return html `
                ${this.label
                ? html `
                    <label class="form-label" for="textarea-${this.name}">
                        ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
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
            return html `
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
                        ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                    </label>
                </div>
            `;
        }
        if (this.type === 'select') {
            return html `
                ${this.label ? html `<label class="form-label" for="input-${this.name}">
                    ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}</label>` : ''}
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
                var _a;
                if (typeof option === 'string') {
                    return html `<option value="${option}">${option}</option>`;
                }
                else if ('key' in option && 'value' in option) {
                    return html `<option value="${(_a = option.key) !== null && _a !== void 0 ? _a : ''}">${option.value}</option>`;
                }
                else {
                    const entries = Object.entries(option);
                    if (entries.length === 1) {
                        const [key, value] = entries[0];
                        return html `<option value="${key}">${value}</option>`;
                    }
                }
            })}
                </select>
            `;
        }
        if (this.type === 'range') {
            return html `
                ${this.label ? html `<label class="form-label" for="input-${this.name}">${this.label}</label>` : ''}
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
            return html `
                ${this.label ? html `<label class="form-label" for="input-${this.name}">
                    ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}</label>` : ''}
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
        return html `
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
                    ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                </label>
            </div>
        `;
    }
};
NxaFormInputTwo.formAssociated = true;
// @ts-ignore
NxaFormInputTwo.styles = css `${styles}`;
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "input", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "label", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "placeholder", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "value", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "name", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "type", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NxaFormInputTwo.prototype, "size", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "required", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "floating", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "checked", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "min", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "max", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "step", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NxaFormInputTwo.prototype, "inputStyle", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "rows", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "maxRows", void 0);
__decorate([
    property({
        attribute: 'select-options',
        converter: {
            fromAttribute: (value) => {
                if (!value)
                    return [];
                try {
                    return JSON.parse(value);
                }
                catch (e) {
                    console.warn('Invalid JSON in select-options:', e);
                    return [];
                }
            },
            toAttribute: (value) => {
                try {
                    return JSON.stringify(value);
                }
                catch (e) {
                    return '[]';
                }
            }
        }
    }),
    __metadata("design:type", Array)
], NxaFormInputTwo.prototype, "selectOptions", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "touched", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "valid", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "invalid", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInputTwo.prototype, "isEmpty", void 0);
NxaFormInputTwo = __decorate([
    customElement('nxa-form-input-two'),
    __metadata("design:paramtypes", [])
], NxaFormInputTwo);
export { NxaFormInputTwo };
