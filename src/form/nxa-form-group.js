var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleFormGroup } from './style-form-group';
let NxaFormGroup = class NxaFormGroup extends LitElement {
    constructor() {
        super(...arguments);
        this.gap = 1;
        this.alignItems = 'stretch';
        this.cols = '1-2-3'; // Format: "sm-md-lg" e.g., "1-2-3" means 1 column on small, 2 on medium, 3 on large
    }
    render() {
        return html `
            <div
                class="form-group"
                style="
                    --gap: ${this.gap}rem;
                    --align-items: ${this.alignItems};
                    --cols-sm: ${this.cols.split('-')[0] || 1};
                    --cols-md: ${this.cols.split('-')[1] || this.cols.split('-')[0] || 1};
                    --cols-lg: ${this.cols.split('-')[2] || this.cols.split('-')[1] || this.cols.split('-')[0] || 1};
                "
            >
                <slot></slot>
            </div>
        `;
    }
};
NxaFormGroup.styles = styleFormGroup;
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], NxaFormGroup.prototype, "gap", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NxaFormGroup.prototype, "alignItems", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], NxaFormGroup.prototype, "cols", void 0);
NxaFormGroup = __decorate([
    customElement('nxa-form-group')
], NxaFormGroup);
export { NxaFormGroup };
