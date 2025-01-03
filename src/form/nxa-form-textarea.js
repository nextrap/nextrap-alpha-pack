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
import { styleTextarea } from './style-form-textarea';
let NxaFormTextarea = class NxaFormTextarea extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.name = '';
        this.size = 'md';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.floating = false;
        this.helperText = '';
        this.rows = 3;
        this.maxRows = 10;
        this.touched = false;
        this.valid = false;
        this.invalid = false;
        this.isEmpty = true;
    }
    getTextareaClasses() {
        const classes = ['form-control'];
        if (this.size !== 'md')
            classes.push(`form-control-${this.size}`);
        if (this.touched && (this.required || !this.isEmpty)) {
            if (this.valid)
                classes.push('is-valid');
            if (this.invalid)
                classes.push('is-invalid');
        }
        return classes.join(' ');
    }
    get _uniqueId() {
        return this.name || Math.random().toString(36).substring(2, 11);
    }
    _handleInput(e) {
        const target = e.target;
        this.value = target.value;
        this.isEmpty = !this.value;
        this._validate();
        requestAnimationFrame(() => {
            this._adjustHeight(target);
        });
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    _adjustHeight(textarea) {
        const scrollPos = window.pageYOffset;
        textarea.style.height = 'auto';
        const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
        const minHeight = lineHeight * this.rows;
        const maxHeight = lineHeight * this.maxRows;
        const contentHeight = textarea.scrollHeight;
        const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
        textarea.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
        window.scrollTo(0, scrollPos);
    }
    _handleBlur() {
        this.touched = true;
        this._validate();
    }
    validateOnSubmit() {
        this.touched = true;
        this._validate();
        return this.valid;
    }
    _validate() {
        if (this.required && this.isEmpty) {
            this.valid = false;
            this.invalid = true;
            return;
        }
        if (!this.required && this.isEmpty) {
            this.valid = false;
            this.invalid = false;
            return;
        }
        this.valid = true;
        this.invalid = false;
    }
    firstUpdated() {
        requestAnimationFrame(() => {
            var _a;
            const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('textarea');
            if (textarea) {
                this._adjustHeight(textarea);
            }
        });
    }
    updated(changedProperties) {
        if (changedProperties.has('value')) {
            requestAnimationFrame(() => {
                var _a;
                const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('textarea');
                if (textarea) {
                    this._adjustHeight(textarea);
                }
            });
        }
    }
    render() {
        if (!this.floating) {
            return html `
                ${this.label ? html `
                    <label class="form-label" for="textarea-${this._uniqueId}">
                        ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                    </label>
                ` : ''}
                <textarea
                    class="${this.getTextareaClasses()}"
                    id="textarea-${this._uniqueId}"
                    .value="${this.value}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    rows="${this.rows}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                    style="overflow-y: hidden;"
                ></textarea>
                ${this.helperText ? html `
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
        return html `
            <div class="form-floating">
                <textarea
                    class="${this.getTextareaClasses()}"
                    id="textarea-${this._uniqueId}"
                    .value="${this.value}"
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    rows="${this.rows}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                    style="overflow-y: hidden;"
                ></textarea>
                <label for="textarea-${this._uniqueId}">
                    ${this.label}${this.required ? html `<span class="required-indicator">*</span>` : ''}
                </label>
                ${this.helperText ? html `
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
};
NxaFormTextarea.styles = styleTextarea;
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "label", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "placeholder", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "value", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "name", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NxaFormTextarea.prototype, "size", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "required", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "floating", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "helperText", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "rows", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "maxRows", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "touched", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "valid", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "invalid", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NxaFormTextarea.prototype, "isEmpty", void 0);
NxaFormTextarea = __decorate([
    customElement('nxa-form-textarea')
], NxaFormTextarea);
export { NxaFormTextarea };
