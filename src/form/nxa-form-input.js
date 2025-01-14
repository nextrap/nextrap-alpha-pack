var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleInput } from './style-form-input';
let NxaFormInput = class NxaFormInput extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.name = '';
        this.type = 'text';
        this.size = 'md';
        this.required = false;
        this.floating = false;
        this.inline = false;
        this.helperText = '';
        this.switchStyle = 'classic';
        this.invalidFeedback = '';
        this.validFeedback = '';
        this.selectOptions = [];
        this.touched = false;
        this.valid = false;
        this.invalid = false;
        this.isEmpty = true;
        this.input = null;
    }
    // Public property to get input
    get inputElement() {
        return this.input;
    }
    // Public validation method
    validateOnSubmit() {
        if (!this.input)
            return false;
        this.touched = true;
        return this._validate(this.input);
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
    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener('click', (e) => {
            var _a;
            const label = e.target;
            if (label.tagName === 'LABEL') {
                const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="input"]');
                if (slot) {
                    const elements = slot.assignedElements();
                    const input = elements[0];
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
        var _a;
        const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="input"]');
        if (slot) {
            slot.addEventListener('slotchange', () => {
                const elements = slot.assignedElements();
                this.input = elements[0];
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
                                    var _a;
                                    // Find all radio inputs in the group and validate them
                                    const form = (_a = this.input) === null || _a === void 0 ? void 0 : _a.closest('form');
                                    const allGroupRadios = form ?
                                        form.querySelectorAll(`input[name="${groupName}"]`) :
                                        document.querySelectorAll(`input[name="${groupName}"]`);
                                    // Trigger validation for each radio in the group
                                    allGroupRadios.forEach(radio => {
                                        const radioInput = radio;
                                        const radioComponent = radio.closest('nxa-form-input');
                                        if (radioComponent) {
                                            radioComponent._validate(radioInput);
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
                        this.updateFloatingState(this.input);
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
    updateSelectOptions(select) {
        // Clear existing options
        select.innerHTML = '';
        if (!this.selectOptions || !Array.isArray(this.selectOptions)) {
            console.warn('selectOptions is not an array:', this.selectOptions);
            return;
        }
        // Add options from selectOptions property
        this.selectOptions.forEach(option => {
            var _a;
            const optionElement = document.createElement('option');
            if (typeof option === 'string') {
                // Case 3: Simple string value
                optionElement.value = option;
                optionElement.textContent = option;
            }
            else if ('key' in option && 'value' in option) {
                // Case 1: {key, value} object
                optionElement.value = (_a = option.key) !== null && _a !== void 0 ? _a : ''; // Use empty string if key is undefined
                optionElement.textContent = option.value;
            }
            else {
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
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('selectOptions')) {
            if (this.input instanceof HTMLSelectElement) {
                this.updateSelectOptions(this.input);
            }
        }
    }
    _handleInput(e) {
        const target = e.target;
        this.isEmpty = !target.value;
        this._validate(target);
    }
    _handleBlur(e) {
        this.touched = true;
        const target = e.target;
        this._validate(target);
    }
    _validate(input) {
        if (!input)
            return false;
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
                    if (!groupName)
                        return false;
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
                    }
                    else {
                        // Remove all validation states when group becomes valid
                        input.classList.remove('is-invalid', 'is-valid');
                        this.style.setProperty('--show-valid-feedback', 'none');
                        this.style.setProperty('--show-invalid-feedback', 'none');
                    }
                }
                else {
                    // If not required or not touched, remove all validation states
                    input.classList.remove('is-invalid', 'is-valid');
                    this.style.setProperty('--show-valid-feedback', 'none');
                    this.style.setProperty('--show-invalid-feedback', 'none');
                }
            }
            else {
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
                        }
                        else {
                            input.classList.add('is-invalid');
                            input.classList.remove('is-valid');
                            this.style.setProperty('--show-valid-feedback', 'none');
                            this.style.setProperty('--show-invalid-feedback', 'block');
                        }
                    }
                }
                else {
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
        }
        else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            this.style.setProperty('--show-valid-feedback', 'none');
            this.style.setProperty('--show-invalid-feedback', 'block');
        }
        return this.valid;
    }
    render() {
        if (!this.hasChildNodes()) {
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
            }
            else {
                inputElement.classList.add("form-control");
            }
            this.appendChild(inputElement);
        }
        const uniqueId = this._uniqueId;
        if (this.type === 'checkbox' || this.type === 'radio') {
            return html `
                <div class="form-check ${this.switchStyle === 'modern' ? 'form-switch' : ''}">
                    <slot name="input"></slot>
                    <label class="form-check-label" for="${uniqueId}">
                        ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                    </label>
                    ${this.helperText ? html `
                        <div class="form-text">${this.helperText}</div>
                    ` : ''}
                    ${this.invalidFeedback !== '' ? html `
                        <div class="invalid-feedback">
                            ${this.invalidFeedback}
                        </div>
                    ` : ''}
                </div>
            `;
        }
        if (!this.floating) {
            const content = html `
                <slot name="input"></slot>
                ${this.helperText ? html `
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
                ${this.invalidFeedback !== '' ? html `
                    <div class="invalid-feedback">
                        ${this.invalidFeedback}
                    </div>
                ` : ''}
                ${this.validFeedback !== '' ? html `
                    <div class="valid-feedback">
                        ${this.validFeedback}
                    </div>
                ` : ''}
            `;
            if (this.inline) {
                return html `
                    <div class="form-inline">
                        ${this.label ? html `
                            <label class="form-label" for="${uniqueId}">
                                ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                            </label>
                        ` : ''}
                        <div class="input-wrapper">
                            ${content}
                        </div>
                    </div>
                `;
            }
            return html `
                ${this.label ? html `
                    <label class="form-label" for="${uniqueId}">
                        ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                    </label>
                ` : ''}
                ${content}
            `;
        }
        const labelClasses = this.size !== 'md' ? this.size === 'sm' ? 'small' : 'large' : '';
        return html `
            <div class="form-floating">
                <slot name="input"></slot>
                <label class="${labelClasses}" for="${uniqueId}">
                    ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                </label>
                ${this.helperText ? html `
                    <div class="form-text">${this.helperText}</div>
                ` : ''}
                ${this.invalidFeedback !== '' ? html `
                    <div class="invalid-feedback">
                        ${this.invalidFeedback}
                    </div>
                ` : ''}
                ${this.validFeedback !== '' ? html `
                    <div class="valid-feedback">
                        ${this.validFeedback}
                    </div>
                ` : ''}
            </div>
        `;
    }
    get _uniqueId() {
        var _a;
        if ((_a = this.input) === null || _a === void 0 ? void 0 : _a.id)
            return this.input.id;
        return this.name ? `nxa-${this.name}` : `nxa-${Math.random().toString(36).substring(2, 11)}`;
    }
};
NxaFormInput.styles = styleInput;
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "label", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "name", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "type", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NxaFormInput.prototype, "size", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "required", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "floating", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "inline", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "helperText", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NxaFormInput.prototype, "switchStyle", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "invalidFeedback", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "validFeedback", void 0);
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
], NxaFormInput.prototype, "selectOptions", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "touched", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "valid", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "invalid", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormInput.prototype, "isEmpty", void 0);
NxaFormInput = __decorate([
    customElement('nxa-form-input')
], NxaFormInput);
export { NxaFormInput };
