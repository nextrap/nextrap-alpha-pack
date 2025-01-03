var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import { customElement } from "lit/decorators.js";
import { style } from './style';
import { Debouncer, ka_sleep } from "@kasimirjs/core";
let debounceer = new Debouncer(100);
let NxaScrollToTop = class NxaScrollToTop extends LitElement {
    connectedCallback() {
        this.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        let active = false;
        window.addEventListener("scroll", () => __awaiter(this, void 0, void 0, function* () {
            yield debounceer.debounce();
            if (window.scrollY > 300 && active === false) {
                yield ka_sleep(200);
                this.classList.add("show");
                active = true;
            }
            if ((window.scrollY < 300) && active === true) {
                this.classList.remove("show");
                yield ka_sleep(500);
                active = false;
            }
        }), { passive: true });
        super.connectedCallback();
    }
    render() {
        return html `<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </svg></div>`;
    }
};
NxaScrollToTop.styles = style;
NxaScrollToTop = __decorate([
    customElement('nxa-scroll-to-top')
], NxaScrollToTop);
export { NxaScrollToTop };
