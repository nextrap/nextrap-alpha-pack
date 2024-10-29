import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleTextarea } from './style-form-textarea';

@customElement('nxa-form-textarea')
export class NxaFormTextarea extends LitElement {
    static styles = styleTextarea;

    @property() label = '';
    @property() placeholder = '';
    @property() value = '';
    @property() name = '';
    @property() size: 'sm' | 'md' | 'lg' = 'md';
    @property({ type: Boolean }) required = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) readonly = false;
    @property({ type: Boolean }) floating = false;
    @property() helperText = '';
    @property({ type: Number }) rows = 3;
    @property({ type: Number }) maxRows = 10;

    @state() private touched = false;
    @state() private valid = false;
    @state() private invalid = false;
    @state() private isEmpty = true;

    private getTextareaClasses() {
        const classes = ['form-control'];
        if (this.size !== 'md') classes.push(`form-control-${this.size}`);
        if (this.touched && (this.required || !this.isEmpty)) {
            if (this.valid) classes.push('is-valid');
            if (this.invalid) classes.push('is-invalid');
        }
        return classes.join(' ');
    }

    private get _uniqueId() {
        return this.name || Math.random().toString(36).substring(2, 11);
    }

    private _handleInput(e: Event) {
        const target = e.target as HTMLTextAreaElement;
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

    private _adjustHeight(textarea: HTMLTextAreaElement) {
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
            const textarea = this.shadowRoot?.querySelector('textarea');
            if (textarea) {
                this._adjustHeight(textarea);
            }
        });
    }

    updated(changedProperties: Map<string, any>) {
        if (changedProperties.has('value')) {
            requestAnimationFrame(() => {
                const textarea = this.shadowRoot?.querySelector('textarea');
                if (textarea) {
                    this._adjustHeight(textarea);
                }
            });
        }
    }

    render() {
        if (!this.floating) {
            return html`
                ${this.label ? html`
                    <label class="form-label" for="textarea-${this._uniqueId}">
                        ${this.label}${this.required ? html`<span class="required-indicator">*</span>` : ''}
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

        return html`
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
