import { css } from "lit";
export const style = css `
        :host {
            --modal-background: #fff;
            --modal-width-sm: 300px;
            --modal-width-md: 600px;
            --modal-width-fullscreen: 100%;
            --modal-max-height: 90vh;
            --backdrop-background: rgba(0, 0, 0, 0.5);
            --modal-header-background: #f1f1f1;
            --modal-footer-background: #f1f1f1;
            --modal-close-color: #000;
            --modal-border-radius: 5px;
            --animation-duration: 0.2s;

        }
        :host(.floating-header) {
            .modal-header {
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    top: 0;
                    left: 0;
                }
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                z-index: 1;
            }
        }



        dialog[open] {
            opacity: 1;
            transform: scaleY(1);
            display: flex;
            flex-direction: column;
        }

        /*   Closed state of the dialog   */
        dialog {


            display: none;
            overscroll-behavior: contain;

            box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
            border-radius: var(--modal-border-radius);
            border: none;
            padding: 0;
            max-height: 100%;
            transform: translateY(20%);
            opacity: 0;
            transition:
                opacity var(--animation-duration) ease-out,
                transform var(--animation-duration) ease-out,
                overlay var(--animation-duration) ease-out allow-discrete,
                display var(--animation-duration) ease-out allow-discrete;
            /* Equivalent to
            transition: all 0.7s allow-discrete; */
        }


        dialog[open] {
            opacity: 1;
            transform: translateY(0);
        }

        /*   Before-open state  */
        /* Needs to be after the previous dialog[open] rule to take effect,
            as the specificity is the same */
        @starting-style {
            dialog[open] {
                opacity: 0;
                transform: translateY(20%);
            }
        }


        /* Transition the :backdrop when the dialog modal is promoted to the top layer */
        dialog::backdrop {
            background-color: rgb(0 0 0 / 0%);
            overscroll-behavior: contain;
            transition:
                display var(--animation-duration) allow-discrete,
                overlay var(--animation-duration) allow-discrete,
                background-color var(--animation-duration);
            /* Equivalent to
            transition: all 0.7s allow-discrete; */
        }

        dialog[open]::backdrop {
            background-color: rgb(0 0 0 / 25%);
        }

        /* This starting-style rule cannot be nested inside the above selector
        because the nesting selector cannot represent pseudo-elements. */

        @starting-style {
            dialog[open]::backdrop {
                background-color: rgb(0 0 0 / 0%);
            }
        }



        .modal.sm {
            width: var(--modal-width-sm);
        }

        .modal.md {
            width: var(--modal-width-md);
        }

        .modal.fullscreen {
            width: var(--modal-width-fullscreen);
            height: 100%;
        }

        .modal-header,
        .modal-footer {

            padding: 1em;
            background: var(--modal-header-background);

        }



        .modal-footer:has(slot:empty) {
            display: none;
        }


        .modal-body {
            padding: 1em;
            flex: 1 1 auto;
            overflow-y: auto;
            overscroll-behavior: none;
        }

        .modal-title {
            margin: 0;
        }

        .modal-subtitle {
            margin: 0;
            font-weight: normal;
            color: #666;
        }

        .modal-close {
            position: absolute;
            top: 0px;
            right: 0px;
            background: none;
            border: none;
            font-size: 2.0em;
            padding: 15px;
            color: var(--modal-close-color);
            cursor: pointer;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    `;
