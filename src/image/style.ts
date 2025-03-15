import {css} from "lit";

export const style = css`
    :host {
      width: inherit;
      height: inherit;
      overflow: hidden;
      position: relative;
      display: flex;
    }

    ::slotted(img) {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: inherit;
      height: inherit;
    }

    .navigation-arrows {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      z-index: 2;
    }

    .arrow-button {
      background: rgba(0,0,0,0.3);
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-50%);
    }
  `;
