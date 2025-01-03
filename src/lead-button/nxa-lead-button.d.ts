import { LitElement } from "lit";
export declare class NxaLeadButton extends LitElement {
    #private;
    static styles: import("lit").CSSResult;
    href: string;
    target: string;
    title: string;
    spacer: boolean;
    subtitle: string;
    icon: string;
    type: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
