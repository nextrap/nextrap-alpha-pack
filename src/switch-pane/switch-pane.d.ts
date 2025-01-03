import { LitElement } from "lit";
export declare class NxaSwitchPane extends LitElement {
    static styles: import("lit").CSSResult;
    nextBtnSelector: string;
    prevBtnSelector: string;
    currentPane: number;
    _updatePane(): void;
    _connectButtons(): void;
    next(): void;
    prev(): void;
    connectedCallback(): Promise<void>;
    update(changedProperties: Map<string | number | symbol, unknown>): void;
    _getHeights(): number;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
