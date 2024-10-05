import {css} from "lit";



export const style = css`

    :host{
        --icon-background: #f5f5f5;
        --icon-text-color: #000;
        --background-color: #f5f5f5;
        --text-color: #000;
        --border-radius: 0.5em;
        --text-margin: 0 1em;
        --title-font-size: 1.2em;
        --subtitle-font-size: 0.8em;
        --icon-font-size: 3em;
        --icon-padding: 0.5em;
        --border: 1px solid #000;

        &.inverted {

        }

    }

    :host(.inverted) {
        .lead-button {
            .icon-section {
                background-color: var(--text-color);
                color: var(--icon-text-color);
                &::slotted(i) {
                    color: var(--icon-background);
                }
            }
        }
    }


    :host(.shadow) {
        .lead-button {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    }

    :host(.wave) {
        .lead-button {
            &:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    #a34444 50%,
                    transparent 100%
                );
                animation: wave 15s infinite;
            }
        }

    }

    a {
        text-decoration: none;
        font: inherit;
        display: inline-block;
        padding: 0;
        margin: 0;
        width: auto;
        font-size: unset;
    }
    button {
        padding: 0;
        margin: 0;
        font: inherit;
        width: auto;
        font-size: unset;
        border: none;
        background: none;
        cursor: pointer;
    }

    .lead-button {
        padding: 0;
        margin: 0;
        border: var(--border);
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: filter 0.3s ease;

        &:hover {
            filter: brightness(0.93);
        }
        &:active {
            filter: brightness(0.8);
        }

        .icon-section {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--icon-background);
            color: var(--icon-text-color);
            width: auto;
            height: auto;


            padding: var(--icon-padding);
            aspect-ratio: 1;

            &::slotted(i) {
                color: var(--icon-text-color);
                font-size: var(--icon-font-size);


            }

        }

        .text-section {
            text-align: left;
            margin: var(--text-margin);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            white-space: nowrap; /* Prevents breaking the content */

            ::slotted(.title) {
                font-size: var(--title-font-size);
                font-weight: bold;
            }

            ::slotted(.subtitle) {
                font-size: var(--subtitle-font-size);
                color: lighten($primary-text-color, 20%);

            }
        }
    }

    @keyframes wave {
        0% {
            left: -100%;
        }
        40% {
            left: -100%;
        }
        50% {
            left: 100%;
        }
        60% {
            left: 100%;
        }
        100% {
            left: 100%;
        }
    }

    /* Optional Separator */

    .separator {
        width: 100%;
        border: none;
        border-top: 1px solid lighten($primary-text-color, 20%);
        margin: 0.25em 0;
    }

`;
