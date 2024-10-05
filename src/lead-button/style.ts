import {css} from "lit";



export const style = css`

    :host{
        --classes: 'icon-start shadow';
        --icon-background: #f5f5f5;
        --icon-text-color: #000;
        --background-color: #f5f5f5;
        --text-color: #000;
        --border-radius: 0.5em;
        --text-space: 1em;
        --title-font-size: 1.2em;
        --subtitle-font-size: 0.8em;
        --icon-font-size: 2em;
        --icon-padding: 1em;
        --border: 1px solid #000;
        --display: inline-block;
        --box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        --white-space: nowrap;

        display: var(--display);

    }

    :host(.inverted-icon) {
        .lead-button {
            .icon-section {
                background-color: var(--text-color);
                color: var(--icon-text-color);
                &::slotted(i) {
                    color: var(--icon-background);
                }
            }
            .text-section {
                padding: 0 var(--text-space)  ; // Left and right
            }
        }
    }


    :host(.icon-top) {
        .lead-button {
            flex-direction: column;

            .icon-section {
                aspect-ratio: unset;
            }
            .text-section {
                margin: 0 var(--text-space) var(--text-space) var(--text-space);

            }
        }
    }


    :host(.shadow) {
        .lead-button {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
        box-shadow: var(--box-shadow);
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: filter 0.1s ease, transform 0.1s ease;


        &:hover {
            filter: brightness(0.93);
            transform: scale(1.02);
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
            margin: 0 var(--text-space) 0 0; // default only right
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            white-space: var(--white-space); /* Prevents breaking the content */

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

    .spacer {
        width: 100%;
        border: none;
        border-top: 1px solid lighten($primary-text-color, 20%);
        margin: 0.25em 0;
    }

`;
