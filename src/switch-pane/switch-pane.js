var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from './switch-pane-style';
import { ka_sleep } from "@kasimirjs/core";
let NxaSwitchPane = class NxaSwitchPane extends LitElement {
    constructor() {
        super(...arguments);
        this.nextBtnSelector = '#nextBtn';
        this.prevBtnSelector = '#prevBtn';
        this.currentPane = 0;
    }
    _updatePane() {
        // Select all direct children that have no slot attribute
        let panes = Array.from(this.children).filter((c) => c instanceof HTMLElement && !c.hasAttribute('slot'));
        if (this.nextBtnSelector) {
            let nextBtn = this.querySelector(this.nextBtnSelector);
            if (!nextBtn) {
                console.error('Next Button not found! Selector: ', this.nextBtnSelector, 'on', this);
            }
            else {
                if (this.currentPane === panes.length - 1) {
                    nextBtn.setAttribute('disabled', 'disabled');
                }
                else {
                    nextBtn.removeAttribute('disabled');
                }
            }
        }
        if (this.prevBtnSelector) {
            let prevBtn = this.querySelector(this.prevBtnSelector);
            if (!prevBtn) {
                console.error('Prev Button not found! Selector: ', this.prevBtnSelector, 'on', this);
            }
            else {
                if (this.currentPane === 0) {
                    prevBtn.setAttribute('disabled', 'disabled');
                }
                else {
                    prevBtn.removeAttribute('disabled');
                }
            }
        }
    }
    _connectButtons() {
        // if nextBtnSelector is set
        if (this.nextBtnSelector) {
            let nextBtn = this.querySelector(this.nextBtnSelector);
            if (!nextBtn) {
                console.error('Next Button not found! Selector: ', this.nextBtnSelector, 'on', this);
            }
            else {
                // remove previous event listener
                nextBtn.addEventListener('click', () => this.next());
            }
        }
        // if prevBtnSelector is set
        if (this.prevBtnSelector) {
            let prevBtn = this.querySelector(this.prevBtnSelector);
            if (!prevBtn) {
                console.error('Prev Button not found! Selector: ', this.prevBtnSelector, 'on', this);
            }
            else {
                // remove previous event listener
                prevBtn.addEventListener('click', () => this.prev());
            }
        }
    }
    next() {
        if (this.currentPane === this.children.length - 1) {
            return;
        }
        this.currentPane++;
    }
    prev() {
        if (this.currentPane === 0) {
            return;
        }
        this.currentPane--;
    }
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.connectedCallback.call(this);
            yield ka_sleep(0);
            this._connectButtons();
        });
    }
    update(changedProperties) {
        super.update(changedProperties);
        this._updatePane();
    }
    _getHeights() {
        let heights = Array.from(this.children).filter((c) => c instanceof HTMLElement && !c.hasAttribute('slot')).map((c) => c.clientHeight);
        return Math.max(...heights);
    }
    updated() {
        this.shadowRoot.getElementById('content').style.setProperty('--internal-content-height', this._getHeights() + 'px');
    }
    render() {
        // Select all direct children that have no slot attribute. Best way to do this (css variables are not suppored in nth-child selector)
        return html `
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
};
NxaSwitchPane.styles = style;
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaSwitchPane.prototype, "nextBtnSelector", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaSwitchPane.prototype, "prevBtnSelector", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", Object)
], NxaSwitchPane.prototype, "currentPane", void 0);
NxaSwitchPane = __decorate([
    customElement('nxa-switch-pane')
], NxaSwitchPane);
export { NxaSwitchPane };
