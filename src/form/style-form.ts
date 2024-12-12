import { css } from 'lit';

export const styleForm = css`
    :host {
        display: block;
        /* Base variables */
        --nxa-primary: #0d6efd;
        --nxa-secondary: #6c757d;
        --nxa-success: #198754;
        --nxa-danger: #dc3545;

        /* Border styles */
        --nxa-border-color: #dee2e6;
        --nxa-border-width: 1px;
        --nxa-border-radius: 0.375rem;
        --nxa-border-bottom: var(--nxa-border-width) solid var(--nxa-border-color);

        /* Input styles */
        --nxa-input-font-size: 1rem;
        --nxa-input-padding-x: 0.75rem;
        --nxa-input-padding-y: 0.375rem;
        --nxa-input-line-height: 1.5;
        --nxa-input-bg: #fff;
        --nxa-input-disabled-bg: #e9ecef;
        --nxa-input-color: #212529;
        --nxa-input-border-color: var(--nxa-border-color);

        /* Focus styles */
        --nxa-focus-border-color: #86b7fe;
        --nxa-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

        /* Validation styles */
        --nxa-valid-color: var(--nxa-success);
        --nxa-valid-border-color: var(--nxa-success);
        --nxa-valid-focus-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
        --nxa-invalid-color: var(--nxa-danger);
        --nxa-invalid-border-color: var(--nxa-danger);
        --nxa-invalid-focus-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);

        /* Text styles */
        --nxa-form-text-color: var(--nxa-secondary);
        --nxa-placeholder-color: var(--nxa-secondary);
        --nxa-placeholder-opacity: 0.65;

        /* Spacing */
        --nxa-spacing-sm: 0.5rem;
        --nxa-spacing-md: 1rem;
        --nxa-spacing-lg: 1.5rem;

        /* Size variants */
        --nxa-font-size-sm: 0.875rem;
        --nxa-font-size-md: 1rem;
        --nxa-font-size-lg: 1.25rem;

        /* Component specific */
        --nxa-group-gap: 1rem;

        /* Check and switch styles */
        --nxa-check-input-size: 1em;
        --nxa-check-bg: #fff;
        --nxa-check-border-color: var(--nxa-border-color);
        --nxa-check-checked-bg: var(--nxa-primary);
        --nxa-check-checked-border-color: var(--nxa-primary);
        --nxa-switch-width: 2.5em;
        --nxa-switch-height: 1.5em;
        --nxa-switch-thumb-size: calc(var(--nxa-switch-height) - 4px);
        --nxa-switch-bg: var(--nxa-secondary);
        --nxa-switch-checked-bg: var(--nxa-primary);
    }

    /* Modern style overrides */
    :host([modern]) {
        --nxa-border-width: 0;
        --nxa-border-radius: 0;
        --nxa-border-color: #dee2e6;
        --nxa-focus-box-shadow: none;
        --nxa-border-bottom: 1px solid var(--nxa-border-color);
        --nxa-input-border-color: transparent;
    }

    form {
        width: 100%;
    }
`;
