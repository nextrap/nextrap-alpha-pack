import { LitElement } from 'lit';
/**
 * Enum for wrapping the src content.
 */
export type NxaModalWrapper = 'iframe' | 'div';
/**
 * Enum for modal sizes.
 */
export type NxaModalSize = 'sm' | 'md' | 'fullscreen';
/**
 * Render a dialog box inside shadow DOM. Has 4 slots: header, body, footer, close.
 * If the slots are not set, use the properties to render the content.
 * All custom styling is defined as CSS variables in the :host section.
 *
 * @fires open - Dispatched when the modal is opened.
 * @fires close - Dispatched when the modal is closed.
 *
 * @slot header - Content for the modal header.
 * @slot body - Content for the modal body.
 * @slot footer - Content for the modal footer.
 * @slot close - Content for the close button.
 */
export declare class NxaModal extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * If set, loads the content of the body from the src URL.
     */
    src: string;
    /**
     * Only if src specified:
     * If 'iframe': Load the src content in an iframe.
     * If 'div': Load the src content in a div.
     */
    srcWrap: 'iframe' | 'div';
    /**
     * Optional target attribute for links.
     */
    target: string;
    /**
     * If set, renders a header bar with the title.
     */
    title: string;
    /**
     * If set, renders a header bar with the subtitle.
     */
    subtitle: string;
    /**
     * If set, renders a body slot with a paragraph element containing the body text.
     */
    body: string;
    /**
     * If set, renders a header bar with the icon.
     */
    icon: string;
    /**
     * If set, renders a header bar with the close icon.
     * If empty, no close icon is rendered.
     */
    closeIcon: string;
    /**
     * Size of the modal: 'sm', 'md', or 'fullscreen'.
     */
    size: NxaModalSize;
    /**
     * Controls the visibility of the modal.
     */
    open: boolean;
    /**
     * Holds the fetched content when srcWrap is 'div'.
     */
    private srcContent;
    /**
     * Fetches the content from src if srcWrap is 'div'.
     */
    private _fetchSrcContent;
    connectedCallback(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Renders the content based on src and srcWrap.
     */
    private _renderSrcContent;
    /**
     * Handles clicks on the backdrop to close the modal.
     */
    private _onBackdropClick;
    /**
     * Handles clicks on the close button.
     */
    private _onCloseClick;
    /**
     * Closes the modal and dispatches a 'close' event.
     */
    close(): void;
    /**
     * Opens the modal and dispatches an 'open' event.
     */
    openModal(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'nxa-modal': NxaModal;
    }
}
