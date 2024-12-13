import {html, LitElement, css} from "lit";
import {customElement, property} from "lit/decorators.js";
import { classMap } from 'lit-html/directives/class-map.js';

import {style} from './switch-pane-style';
import {ka_sleep} from "@kasimirjs/core";



@customElement('nxa-switch-pane')
export class NxaSwitchPane extends LitElement {
    static styles = style;


    @property() nextBtnSelector = '#nextBtn';
    @property() prevBtnSelector = '#prevBtn';

    @property({reflect: true}) currentPane = 0;


    public _updatePane() {
        // Select all direct children that have no slot attribute
        let panes = Array.from(this.children).filter((c) => c instanceof HTMLElement && !c.hasAttribute('slot'));

        if (this.nextBtnSelector) {
            let nextBtn = this.querySelector(this.nextBtnSelector);
            if ( ! nextBtn) {
                console.error('Next Button not found! Selector: ', this.nextBtnSelector, 'on', this);
            } else {
                if (this.currentPane === panes.length - 1) {
                    nextBtn.setAttribute('disabled', 'disabled');
                } else {
                    nextBtn.removeAttribute('disabled');
                }
            }
        }
        if (this.prevBtnSelector) {
            let prevBtn = this.querySelector(this.prevBtnSelector);
            if ( ! prevBtn) {
                console.error('Prev Button not found! Selector: ', this.prevBtnSelector, 'on', this);
            } else {
                if (this.currentPane === 0) {
                    prevBtn.setAttribute('disabled', 'disabled');
                } else {
                    prevBtn.removeAttribute('disabled');
                }
            }
        }
    }

    public _connectButtons() {
        // if nextBtnSelector is set
        if (this.nextBtnSelector) {
            let nextBtn = this.querySelector(this.nextBtnSelector);
            if ( ! nextBtn) {
                console.error('Next Button not found! Selector: ', this.nextBtnSelector, 'on', this);
            } else {
                // remove previous event listener
                nextBtn.addEventListener('click', () => this.next());
            }
        }
        // if prevBtnSelector is set
        if (this.prevBtnSelector) {
            let prevBtn = this.querySelector(this.prevBtnSelector);
            if ( ! prevBtn) {
                console.error('Prev Button not found! Selector: ', this.prevBtnSelector, 'on', this);
            } else {
                // remove previous event listener
                prevBtn.addEventListener('click', () => this.prev());
            }
        }

    }

    public next() {
        if (this.currentPane === this.children.length - 1) {
            return;
        }
        this.currentPane++;

    }

    public prev() {
        if (this.currentPane === 0) {
            return;
        }
        this.currentPane--;

    }

    async connectedCallback() {
        super.connectedCallback();
        await ka_sleep(0);
        this._connectButtons();
    }

    update(changedProperties: Map<string | number | symbol, unknown>) {
        super.update(changedProperties);
        this._updatePane();
    }

    _getHeights(): number {

        let heights = Array.from(this.children).filter((c) => c instanceof HTMLElement && !c.hasAttribute('slot')).map((c) => c.clientHeight);
        return Math.max(...heights);
    }

    updated() {
        this.shadowRoot.getElementById('content').style.setProperty('--internal-content-height', this._getHeights() + 'px');

    }

    render() {

        // Select all direct children that have no slot attribute. Best way to do this (css variables are not suppored in nth-child selector)
        return html`
            <style>
                #content {
                    ::slotted(*:nth-child(${this.currentPane + 1})) {
                        transform: var(--transform-current) !important;
                        position: relative !important;
                        z-index: 10 !important; opacity: 1;
                    }
                    ::slotted(*:nth-child(-n+${this.currentPane})) {
                        transform: var(--transform-prev) !important;

                        z-index: 1;
                    }
                    ::slotted(*:nth-child(n+${this.currentPane + 2})) {
                        transform: var(--transform-next) !important;
                        z-index: 20;
                    }
                }

            </style>
            <div id="content">
               <slot></slot>
            </div>
            <slot name="footer"></slot>`;
    }
}
