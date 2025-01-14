/* style-form-group.ts */
import { css } from 'lit';
export const styleFormGroup = css `
    :host {
        display: block;
        box-sizing: border-box;

        /* Component specific */
        --nxa-group-gap: 1rem;
        --nxa-spacing-md: 10px;
    }

    .form-group {
        display: flex;
        flex-wrap: wrap;
        gap: var(--nxa-group-gap);
        margin-bottom: var(--nxa-spacing-md);
        width: 100%;
        box-sizing: border-box;
        align-items: var(--align-items, stretch);
    }

    .form-group ::slotted(*) {
        min-width: 0;
    }

    /* Small devices (phones) */
    @media (max-width: 767px) {
        .form-group ::slotted(*) {
            flex: 0 0 calc((100% - (var(--cols-sm) - 1) * var(--gap)) / var(--cols-sm));
        }
    }

    /* Medium devices (tablets) */
    @media (min-width: 768px) and (max-width: 1023px) {
        .form-group ::slotted(*) {
            flex: 0 0 calc((100% - (var(--cols-md) - 1) * var(--gap)) / var(--cols-md));
        }
    }

    /* Large devices (desktops) */
    @media (min-width: 1024px) {
        .form-group ::slotted(*) {
            flex: 0 0 calc((100% - (var(--cols-lg) - 1) * var(--gap)) / var(--cols-lg));
        }
    }
`;
