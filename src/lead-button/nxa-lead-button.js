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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NxaLeadButton_instances, _NxaLeadButton_renderContent, _NxaLeadButton_renderButton, _NxaLeadButton_renderLink, _NxaLeadButton_applyClasses;
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from './style';
import { ka_create_element } from "@kasimirjs/core/src/create-element";
import { ka_dom_ready } from "@kasimirjs/core/src/await/dom-ready";
import { ka_sleep } from "@kasimirjs/core";
let NxaLeadButton = class NxaLeadButton extends LitElement {
    constructor() {
        super(...arguments);
        _NxaLeadButton_instances.add(this);
        // Option href - if set it will render an a href around the element
        this.href = '';
        // Option target - if set it will render an a href around the element
        this.target = '';
        this.title = '';
        this.spacer = false;
        this.subtitle = '';
        this.icon = '';
        this.type = '';
    }
    connectedCallback() {
        if (!this.hasChildNodes()) {
            console.log("No child nodes", this);
            if (this.icon) {
                this.append(ka_create_element('i', { class: this.icon, slot: 'icon' }));
            }
            if (this.title) {
                this.append(ka_create_element('div', { class: 'title' }, this.title));
            }
            if (this.spacer) {
                this.append(ka_create_element('div', { class: 'spacer' }));
            }
            if (this.subtitle) {
                this.append(ka_create_element('div', { class: 'subtitle' }, this.subtitle));
            }
        }
        super.connectedCallback();
    }
    render() {
        (() => __awaiter(this, void 0, void 0, function* () {
            yield ka_sleep(100);
        }))();
        __classPrivateFieldGet(this, _NxaLeadButton_instances, "m", _NxaLeadButton_applyClasses).call(this);
        return this.href ? __classPrivateFieldGet(this, _NxaLeadButton_instances, "m", _NxaLeadButton_renderLink).call(this) : __classPrivateFieldGet(this, _NxaLeadButton_instances, "m", _NxaLeadButton_renderButton).call(this);
    }
};
_NxaLeadButton_instances = new WeakSet();
_NxaLeadButton_renderContent = function _NxaLeadButton_renderContent() {
    return html `
            <slot name="icon" class="icon-section"></slot>
            <div class="text-section">
                <slot></slot>
            </div>`;
};
_NxaLeadButton_renderButton = function _NxaLeadButton_renderButton() {
    return html `<button type="${this.type}" class="lead-button">${__classPrivateFieldGet(this, _NxaLeadButton_instances, "m", _NxaLeadButton_renderContent).call(this)}</button>`;
};
_NxaLeadButton_renderLink = function _NxaLeadButton_renderLink() {
    return html `<a href="${this.href}" target="${this.target}"><div class="lead-button">
            ${__classPrivateFieldGet(this, _NxaLeadButton_instances, "m", _NxaLeadButton_renderContent).call(this)}</div></a>`;
};
_NxaLeadButton_applyClasses = function _NxaLeadButton_applyClasses() {
    return __awaiter(this, void 0, void 0, function* () {
        yield ka_dom_ready();
        let classes = (getComputedStyle(this).getPropertyValue('--classes') || '').trim().split(' ').filter((c) => c.trim() !== '');
        this.classList.add(...classes);
    });
};
NxaLeadButton.styles = style;
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "href", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "target", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "title", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "spacer", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "subtitle", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "icon", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaLeadButton.prototype, "type", void 0);
NxaLeadButton = __decorate([
    customElement('nxa-lead-button')
], NxaLeadButton);
export { NxaLeadButton };
