import { css } from "lit";
export const style = css `
    :host {

        --transform-prev: translateX(-100%);
        --transform-current: translateX(0);
        --transform-next: translateX(100%);
        --opacity-prev: 1;
        --transtion-time: 0.5s;
    }
    :host(.blend) {
        --transform-prev: translateX(0);
        --transform-current: translateX(0);
        --transform-next: translateX(0);
        --opacity-prev: 0;
    }




    #content {
        display: block;
        position: relative;
        width: 100%;
        height: var(--internal-content-height);
        overflow: hidden;
        --currentPane: 1;
        ::slotted(*) {
            transition: all var(--transtion-time);
            top: 0 !important;
            position: absolute !important;
            opacity: var(--opacity-prev);
            width: 100% !important;
        }
    }


    `;
