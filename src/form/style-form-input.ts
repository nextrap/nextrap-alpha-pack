import { css } from 'lit';

export const styleInput = css`
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

    /* Base Input Styles */
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
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

    /* Input Sizes */
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

    /* Floating Labels */
    .form-floating {
        position: relative;
    }

    .form-floating > label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 var(--nxa-input-padding-x);
        overflow: hidden;
        text-align: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none;
        transform-origin: 0 0;
        transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
        color: var(--nxa-placeholder-color);
        /* Add these for vertical centering */
        display: flex;
        align-items: center;
    }

    /* Regular size (default) */
    .form-floating > .form-control {
        height: calc(3.5rem + calc(var(--nxa-border-width) * 2));
    }

    /* Small size */
    .form-floating > .form-control-sm {
        height: calc(2.5rem + calc(var(--nxa-border-width) * 2));
        font-size: var(--nxa-font-size-sm);
    }

    .form-floating > .form-control-sm ~ label {
        font-size: var(--nxa-font-size-sm);
    }

    /* Large size */
    .form-floating > .form-control-lg {
        height: calc(4.5rem + calc(var(--nxa-border-width) * 2));
        font-size: var(--nxa-font-size-lg);
    }

    .form-floating > .form-control-lg ~ label {
        font-size: var(--nxa-font-size-lg);
    }

    /* Adjust transform for each size when focused/filled */
    .form-floating > .form-control:focus ~ label,
    .form-floating > .form-control:not(:placeholder-shown) ~ label {
        transform: scale(0.85) translateY(-1rem) translateX(0.15rem);
    }

    .form-floating > .form-control-sm:focus ~ label,
    .form-floating > .form-control-sm:not(:placeholder-shown) ~ label {
        transform: scale(0.85) translateY(-0.7rem) translateX(0 );
    }

    .form-floating > .form-control-lg:focus ~ label,
    .form-floating > .form-control-lg:not(:placeholder-shown) ~ label {
        transform: scale(0.85) translateY(-1.3rem) translateX(0.35rem);
    }

    /* Make feedback messages position below */
    .form-floating .valid-feedback,
    .form-floating .invalid-feedback {
        margin-top: 0.25rem;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
    }

    /* Ensure helper text is below feedback */
    .form-floating .form-text {
        margin-top: calc(0.25rem + 1.5em);
    }

    /* Checkbox & Radio Base Styles */
    .form-check {
        display: flex;
        align-items: center;
        min-height: 1.5rem;
        padding-left: 1.5em;
        margin-bottom: 0.125rem;
        position: relative;
    }

    .form-check-label {
        display: inline-block;
        margin-left: 0.5rem;
        cursor: pointer;
    }

    /* Classic Checkbox & Radio Styles */
    .form-check-input {
        width: var(--nxa-check-input-size);
        height: var(--nxa-check-input-size);
        margin-left: -1.5em;
        background-color: var(--nxa-check-bg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: var(--nxa-border-width) solid var(--nxa-check-border-color);
        appearance: none;
        cursor: pointer;
    }

    .form-check:not(.form-switch) .form-check-input {
        border-radius: 0.25em;
    }

    .form-check:not(.form-switch) .form-check-input:checked {
        background-color: var(--nxa-check-checked-bg);
        border-color: var(--nxa-check-checked-border-color);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    /* Modern Switch Styles */
    .form-switch {
        padding-left: calc(var(--nxa-switch-width) + 0.5em);
        margin-top: 0.25em;
    }

    .form-switch .form-check-input {
        width: var(--nxa-switch-width);
        height: var(--nxa-switch-height);
        margin-left: calc(-1 * (var(--nxa-switch-width) + 0.5em));
        background-color: var(--nxa-switch-bg, var(--nxa-secondary));
        border: none;
        border-radius: var(--nxa-switch-height);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255, 255, 255, 1)'/%3e%3c/svg%3e");
        background-position: left center;
        transition: background-position .15s ease-in-out;
    }

    .form-switch .form-check-input:checked {
        background-position: right center;
        background-color: var(--nxa-switch-checked-bg);
    }

    /* Disabled States */
    .form-check-input:disabled {
        pointer-events: none;
        filter: none;
        opacity: 0.5;
    }

    .form-check-input:disabled ~ .form-check-label {
        opacity: 0.5;
        cursor: default;
    }

    /* Validation States */
    .form-control.is-valid {
        border-color: var(--nxa-valid-border-color);
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
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
        background-position: right calc(0.375em + 0.1875rem) center;
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

    /* Range Input Styles */
    .form-control[type="range"] {
        height: 1.5rem;
        padding: 0;
        background-color: transparent;
        appearance: none;
        border: none;
    }

    .form-control[type="range"]:focus {
        box-shadow: none;
    }

    .form-control[type="range"]::-webkit-slider-thumb {
        width: 1rem;
        height: 1rem;
        margin-top: -0.25rem;
        appearance: none;
        background-color: var(--nxa-primary);
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
        transition: background-color .15s ease-in-out;
    }

    .form-control[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: var(--nxa-border-color);
        border-color: transparent;
        border-radius: var(--nxa-border-radius);
    }

    .form-control[type="range"]:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    .form-control[type="range"]:disabled::-webkit-slider-thumb {
        background-color: var(--nxa-secondary);
    }

    /* Firefox styles */
    .form-control[type="range"]::-moz-range-thumb {
        width: 1rem;
        height: 1rem;
        appearance: none;
        background-color: var(--nxa-primary);
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
        transition: background-color .15s ease-in-out;
    }

    .form-control[type="range"]::-moz-range-track {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: var(--nxa-border-color);
        border-color: transparent;
        border-radius: var(--nxa-border-radius);
    }

    .form-check-input:not(:checked).is-invalid {
        border-color: var(--nxa-invalid-border-color);
    }

    .form-check-input:not(:checked).is-invalid ~ .form-check-label {
        color: var(--nxa-invalid-color);
    }

    .form-check-input:disabled,
    .form-check-input[readonly] {
        background-color: var(--nxa-input-disabled-bg);
        opacity: 0.5;
        pointer-events: none;
    }

    .form-check-input:disabled ~ .form-check-label,
    .form-check-input[readonly] ~ .form-check-label {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .form-check .invalid-feedback,
    .form-check .valid-feedback {
        position: absolute;
        left: 0;
        top: 100%;
        margin-top: 0.25rem;
    }

    .form-check .form-check-input.is-invalid ~ .invalid-feedback {
        display: none;
    }

    .form-check .form-check-input.is-invalid:first-of-type ~ .invalid-feedback {
        display: block;
    }

    .form-check .form-check-input.is-invalid {
        border-color: var(--nxa-invalid-border-color);
    }
`;
