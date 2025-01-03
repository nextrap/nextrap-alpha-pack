import { css } from 'lit';
export const styleTextarea = css `
    :host {
        display: block;
        margin-bottom: var(--nxa-spacing-md);
    }

    /* Base Label Styles */
    .form-label {
        margin-bottom: var(--nxa-spacing-sm);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        color: var(--nxa-input-color);
    }

    /* Base Textarea Styles */
    .form-control {
        display: block;
        width: 100%;
        padding: var(--nxa-input-padding-y) var(--nxa-input-padding-x);
        font-size: var(--nxa-input-font-size);
        font-weight: 400;
        line-height: var(--nxa-input-line-height);
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        background-clip: padding-box;
        border: var(--nxa-border-width) solid var(--nxa-input-border-color);
        border-bottom: var(--nxa-border-bottom);
        border-radius: var(--nxa-border-radius);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, height 0.15s ease-in-out;
        resize: none;
        overflow-y: hidden;
        min-height: calc(var(--nxa-input-line-height) * 1em + 2 * var(--nxa-input-padding-y) + 2px);
    }

    .form-control:focus {
        color: var(--nxa-input-color);
        background-color: var(--nxa-input-bg);
        border-color: var(--nxa-focus-border-color);
        outline: 0;
        box-shadow: var(--nxa-focus-box-shadow);
    }

    .form-control::placeholder {
        color: var(--nxa-placeholder-color);
        opacity: var(--nxa-placeholder-opacity);
    }

    .form-control:disabled,
    .form-control[readonly] {
        background-color: var(--nxa-input-disabled-bg);
        opacity: 1;
    }

    /* Size Variants */
    .form-control-sm {
        padding: 0.25rem 0.5rem;
        font-size: var(--nxa-font-size-sm);
        border-radius: calc(var(--nxa-border-radius) * 0.75);
    }

    .form-control-lg {
        padding: 0.5rem 1rem;
        font-size: var(--nxa-font-size-lg);
        border-radius: calc(var(--nxa-border-radius) * 1.25);
    }

    /* Floating Label Styles */
    .form-floating {
        position: relative;
    }

    .form-floating > textarea.form-control {
        height: auto;
        min-height: calc(3.5rem + calc(var(--nxa-border-width) * 2));
    }

    .form-floating > label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1rem 0.75rem;
        overflow: hidden;
        text-align: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none;
        transform-origin: 0 0;
        transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
        color: var(--nxa-secondary);
    }

    .form-floating > .form-control:focus ~ label,
    .form-floating > .form-control:not(:placeholder-shown) ~ label {
        opacity: 0.65;
        transform: scale(0.85) translateY(-0.5rem) translateX(0.65rem);
        height: auto;
        padding: 0 0.5rem;
        margin-left: -0.25rem;
        border-radius: 0.25rem;
    }

    /* Validation States */
    .form-control.is-valid {
        border-color: var(--nxa-valid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) top calc(0.375em + 0.1875rem);
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    .form-control.is-valid:focus {
        border-color: var(--nxa-valid-border-color);
        box-shadow: var(--nxa-valid-focus-box-shadow);
    }

    .form-control.is-invalid {
        border-color: var(--nxa-invalid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) top calc(0.375em + 0.1875rem);
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    .form-control.is-invalid:focus {
        border-color: var(--nxa-invalid-border-color);
        box-shadow: var(--nxa-invalid-focus-box-shadow);
    }

    /* Feedback Messages */
    .valid-feedback {
        display: none;
        width: 100%;
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-valid-color);
    }

    .invalid-feedback {
        display: none;
        width: 100%;
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-invalid-color);
    }

    .is-valid ~ .valid-feedback {
        display: block;
    }

    .is-invalid ~ .invalid-feedback {
        display: block;
    }

    /* Helper Text */
    .form-text {
        margin-top: var(--nxa-spacing-sm);
        font-size: var(--nxa-font-size-sm);
        color: var(--nxa-form-text-color);
    }

    /* Required Indicator */
    .required-indicator {
        color: var(--nxa-danger);
        margin-left: var(--nxa-spacing-sm);
    }
`;
