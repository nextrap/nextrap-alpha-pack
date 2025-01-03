import { LitElement } from 'lit';
type SelectOption = {
    key?: string;
    value: string;
} | {
    [key: string]: string;
} | string;
export declare class NxaFormInput extends LitElement {
    static formAssociated: boolean;
    private internals;
    static styles: import("lit").CSSResult;
    label: string;
    name: string;
    type: string;
    size: 'sm' | 'md' | 'lg';
    required: boolean;
    floating: boolean;
    inline: boolean;
    helperText: string;
    switchStyle: 'classic' | 'modern';
    invalidFeedback: string;
    validFeedback: string;
    selectOptions: SelectOption[];
    private touched;
    private valid;
    private invalid;
    private isEmpty;
    private input;
    constructor();
    get form(): HTMLFormElement;
    get value(): string;
    set value(val: string);
    get inputElement(): HTMLInputElement | HTMLSelectElement | null;
    checkValidity(): boolean;
    private updateFloatingState;
    createRenderRoot(): DocumentFragment | HTMLElement;
    firstUpdated(): void;
    private _copyAttributes;
    private updateSelectOptions;
    updated(changedProperties: Map<string, any>): void;
    private _handleInput;
    private _handleBlur;
    private _validate;
    private _validateCheckableInput;
    private _setValidationState;
    render(): import("lit-html").TemplateResult<1>;
    private get _uniqueId();
}
export {};
