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
        super();
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
        this.internals = this.attachInternals();
    }
    // Form-associated properties
    get form() { return this.internals.form; }
    get value() { var _a, _b; return (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ''; }
    set value(val) {
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
    get inputElement() {
        return this.input;
    }
    // Public validation method
    checkValidity() {
        var _a, _b;
        return (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.checkValidity()) !== null && _b !== void 0 ? _b : false;
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
                    // Setup ID and copy attributes
                    this.input.id = this._uniqueId;
                    this._copyAttributes();
                    // Event listeners
                    this.input.addEventListener('input', (e) => {
                        this._handleInput(e);
                        this.internals.setFormValue(this.input.value);
                    });
                    this.input.addEventListener('blur', (e) => this._handleBlur(e));
                    this.input.addEventListener('change', (e) => {
                        this._handleInput(e);
                        this.internals.setFormValue(this.input.value);
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
    _copyAttributes() {
        if (!this.input)
            return;
        const attrs = [
            'name', 'required', 'pattern', 'min', 'max', 'step',
            'minlength', 'maxlength', 'placeholder', 'readonly',
            'disabled', 'autocomplete', 'autofocus'
        ];
        attrs.forEach(attr => {
            if (this.hasAttribute(attr) && !this.input.hasAttribute(attr)) {
                this.input.setAttribute(attr, this.getAttribute(attr));
            }
        });
        // Special handling for aria attributes
        if (this.required) {
            this.internals.ariaRequired = 'true';
        }
    }
    updateSelectOptions(select) {
        select.innerHTML = '';
        if (!Array.isArray(this.selectOptions)) {
            console.warn('selectOptions is not an array:', this.selectOptions);
            return;
        }
        this.selectOptions.forEach(option => {
            var _a;
            const optionElement = document.createElement('option');
            if (typeof option === 'string') {
                optionElement.value = option;
                optionElement.textContent = option;
            }
            else if ('key' in option && 'value' in option) {
                optionElement.value = (_a = option.key) !== null && _a !== void 0 ? _a : '';
                optionElement.textContent = option.value;
            }
            else {
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
        this.updateFloatingState(target);
    }
    _handleBlur(e) {
        this.touched = true;
        const target = e.target;
        this._validate(target);
    }
    _validate(input) {
        if (!input)
            return false;
        const validity = input.validity;
        const validationMessage = input.validationMessage || this.invalidFeedback;
        // Update ElementInternals validity
        if (!validity.valid) {
            this.internals.setValidity(validity, validationMessage, input);
        }
        else {
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
    _validateCheckableInput(input) {
        if (this.type === 'radio') {
            if (!this.required || !this.touched) {
                this._setValidationState(true, input, true);
                return true;
            }
            const groupName = input.getAttribute('name');
            if (!groupName)
                return false;
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
    _setValidationState(isValid, input, neutral = false) {
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
        }
        else {
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
                    inputElement.setAttribute(val, this.getAttribute(val));
                }
            });
            inputElement.setAttribute("slot", "input");
            inputElement.classList.add(this.type === 'checkbox' || this.type === 'radio' ?
                "form-check-input" : "form-control");
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
                    ${this.helperText ? html `<div class="form-text">${this.helperText}</div>` : ''}
                    ${this.invalidFeedback ? html `<div class="invalid-feedback">${this.invalidFeedback}</div>` : ''}
                </div>
            `;
        }
        if (!this.floating) {
            const content = html `
                <slot name="input"></slot>
                ${this.helperText ? html `<div class="form-text">${this.helperText}</div>` : ''}
                ${this.invalidFeedback ? html `<div class="invalid-feedback">${this.invalidFeedback}</div>` : ''}
                ${this.validFeedback ? html `<div class="valid-feedback">${this.validFeedback}</div>` : ''}
            `;
            if (this.inline) {
                return html `
                    <div class="form-inline">
                        ${this.label ? html `
                            <label class="form-label" for="${uniqueId}">
                                ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                            </label>
                        ` : ''}
                        <div class="input-wrapper">${content}</div>
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
        const labelClasses = this.size !== 'md' ? (this.size === 'sm' ? 'small' : 'large') : '';
        return html `
            <div class="form-floating">
                <slot name="input"></slot>
                <label class="${labelClasses}" for="${uniqueId}">
                    ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                </label>
                ${this.helperText ? html `<div class="form-text">${this.helperText}</div>` : ''}
                ${this.invalidFeedback ? html `<div class="invalid-feedback">${this.invalidFeedback}</div>` : ''}
                ${this.validFeedback ? html `<div class="valid-feedback">${this.validFeedback}</div>` : ''}
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
NxaFormInput.formAssociated = true;
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
    customElement('nxa-form-input'),
    __metadata("design:paramtypes", [])
], NxaFormInput);
export { NxaFormInput };
