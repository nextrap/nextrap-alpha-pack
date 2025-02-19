import { css } from "lit";

export const styleHamburger = css`
    .hamburger {
        display: none;
        cursor: pointer;
        appearance: none;
        border: 0px none;
        background: none;
    }

    .hamburger.always-visible {
        display: block;
    }

    .hamburger.open .bar:nth-of-type(1),
    .menu-btn-close .bar:nth-of-type(1) {
        transform: translateY(12px) rotate(45deg);
    }

    .hamburger.open .bar:nth-of-type(2),
    .menu-btn-close .bar:nth-of-type(2) {
        opacity: 0;
    }

    .hamburger.open .bar:nth-of-type(3),
    .menu-btn-close .bar:nth-of-type(3) {
        transform: translateY(-12px) rotate(-45deg);
    }

    .bar {
        height: 2px;
        width: 48px;
        display: block;
        margin: 10px auto;
        position: relative;
        background-color: #333;
        transition: 0.4s;
    }

    .menu-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9998;
    }

    .menu {
        display: none;
        position: fixed;
        top: 0;
        height: 100%;
        width: 80vw;
        max-width: 300px;
        background-color: #fff;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
        z-index: 9999;
        transition: transform 0.3s ease-in-out;
        padding: 0 1rem;
        padding-top: 48px;
    }

    .menu.open {
        display: block;
    }

    .menu.open + .menu-overlay {
        display: block;
    }

    .menu.left {
        left: 0;
        transform: translateX(-100%);
    }

    .menu.right {
        right: 0;
        transform: translateX(100%);
    }

    .menu.open.left {
        transform: translateX(0);
    }

    .menu.open.right {
        transform: translateX(0);
    }

    .menu-btn-close {
        appearance: none;
        border: 0px none;
        background: none;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .menu-btn-close .bar {
        height: 2px;
        width: 24px;
        display: block;
        margin: 10px;
        background-color: #333;
        transition: 0.4s;
    }

    @media (max-width: 991px) {
        .hamburger {
            display: block;
        }
        .main ::slotted(nav) {
            display: none;
        }
    }
`;
