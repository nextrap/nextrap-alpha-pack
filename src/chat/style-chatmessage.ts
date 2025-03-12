import { css } from "lit";

export const styleChatmessage = css`
    :host {
        --chat-message-bg-me: var(--nxa-chat-message-bg-me, #21918c);
        --chat-message-text-me: var(--nxa-chat-message-text-me, #ffffff);
        --chat-message-bg-other: var(--nxa-chat-message-bg-other, #e4e6eb);
        --chat-message-text-other: var(--nxa-chat-message-text-other, #050505);
        --chat-message-bg-both: var(--nxa-chat-message-bg-both, #f0f2f5);
        --chat-message-text-both: var(--nxa-chat-message-text-both, #65676b);
        --chat-message-header-text-me: var(--nxa-chat-message-header-text-me, #ffffff);
        --chat-message-header-text-other: var(--nxa-chat-message-header-text-other, #65676b);
        --chat-message-header-text-both: var(--nxa-chat-message-header-text-both, #65676b);
        --chat-message-time-text: var(--nxa-chat-message-time-text, #8a8d91);
        --chat-message-time-text-me: var(--nxa-chat-message-time-text-me, rgba(255, 255, 255, 0.8));
        --chat-message-footer-border: var(--nxa-chat-message-footer-border, rgba(0, 0, 0, 0.1));
        --chat-message-footer-border-me: var(--nxa-chat-message-footer-border-me, rgba(255, 255, 255, 0.2));
        --chat-message-footer-text: var(--nxa-chat-message-footer-text, #65676b);
        --chat-message-footer-text-me: var(--nxa-chat-message-footer-text-me, rgba(255, 255, 255, 0.8));
        --chat-message-indicator: var(--nxa-chat-message-indicator, #440154);

        /* Layout */
        --chat-message-container-max-width: var(--nxa-chat-message-container-max-width, 65%);
        --chat-message-bubble-border-radius: var(--nxa-chat-message-bubble-border-radius, 4px);

        /* Typography */
        --chat-message-header-font-size: var(--nxa-chat-message-header-font-size, 12px);
        --chat-message-content-font-size: var(--nxa-chat-message-content-font-size, 14px);
        --chat-message-footer-font-size: var(--nxa-chat-message-footer-font-size, 11px);
    }

    .message-row {
        display: flex;
        width: 100%;
    }

    /* Me Message */
    .message-row.me {
        justify-content: flex-end;
    }

    /* Other Message */
    .message-row.other {
        justify-content: flex-start;
    }

    /* Both Message */
    .message-row.both {
        justify-content: center;
    }

    .message-container {
        display: flex;
        max-width: var(--chat-message-container-max-width);
        position: relative;
    }

    .message-bubble {
        flex-grow: 1;
        padding: 12px 16px;
        border-radius: var(--chat-message-bubble-border-radius);
        position: relative;
        word-wrap: break-word;
    }

    /* Button space */
    .message-control {
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.2s;
        padding: 0 8px;
    }

    .message-container:hover .message-control {
        opacity: 1;
    }

    /* Message Header */
    .message-header {
        font-size: var(--chat-message-header-font-size);
        margin-bottom: 4px;
        display: flex;
        justify-content: space-between;
        gap: 8px;
    }

    .message-row.me .message-header {
        text-align: right;
        color: var(--chat-message-header-text-me);
    }

    .message-row.other .message-header {
        text-align: left;
        color: var(--chat-message-header-text-other);
    }

    .message-row.both .message-header {
        text-align: center;
        color: var(--chat-message-header-text-both);
    }

    [name="sender"]::slotted(*) {
        font-weight: bold;
    }

    [name="recipient"]::slotted(*) {
        font-style: italic;
    }

    .message-time {
        color: var(--chat-message-time-text);
    }

    .message-row.me .message-time {
        color: var(--chat-message-time-text-me);
    }

    /* Message Footer */
    .message-footer {
        font-size: var(--chat-message-footer-font-size);
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--chat-message-footer-border);
        color: var(--chat-message-footer-text);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .message-row.me .message-footer {
        color: var(--chat-message-footer-text-me);
        border-top: 1px solid var(--chat-message-footer-border-me);
    }

    .message-footer ::slotted(*) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    /* Me Message Style */
    .message-row.me .message-bubble {
        background-color: var(--chat-message-bg-me);
        color: var(--chat-message-text-me);
        margin-right: 12px;
        /* Space for the triangle */
    }

    /* Me Triangle */
    .message-row.me .message-bubble:after {
        content: "";
        position: absolute;
        top: 1px;
        right: -9px;
        width: 0;
        height: 0;
        border-left: 10px solid var(--chat-message-bg-me);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Other Message Style */
    .message-row.other .message-bubble {
        background-color: var(--chat-message-bg-other);
        color: var(--chat-message-text-other);
        margin-left: 12px;
        /* Space for the triangle */
    }

    /* Other Triangle */
    .message-row.other .message-bubble:before {
        content: "";
        position: absolute;
        top: 0px;
        left: -9px;
        width: 0;
        height: 0;
        border-right: 10px solid var(--chat-message-bg-other);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Both Message Style */
    .message-row.both .message-bubble {
        background-color: var(--chat-message-bg-both);
        color: var(--chat-message-text-both);
        margin: 0 auto;
    }

    /* Both Message - Left Side */
    .message-row.both .message-bubble:before {
        content: "";
        position: absolute;
        top: 0px;
        left: -9px;
        width: 0;
        height: 0;
        border-right: 10px solid var(--chat-message-bg-both);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Both Message - Right Side */
    .message-row.both .message-bubble:after {
        content: "";
        position: absolute;
        top: 0px;
        right: -9px;
        width: 0;
        height: 0;
        border-left: 10px solid var(--chat-message-bg-both);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Alt Versions */
    .message-row.me.alt .message-bubble {
        position: relative;
        padding-right: 20px;
        /* Make room for the indicator */
    }

    .message-row.me.alt .message-bubble:before {
        content: "";
        position: absolute;
        top: 20px;
        right: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-row.other.alt .message-bubble {
        position: relative;
        padding-left: 20px;
        /* Make room for the indicator */
    }

    .message-row.other.alt .message-bubble:after {
        content: "";
        position: absolute;
        top: 20px;
        left: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-row.both.alt .message-bubble {
        position: relative;
        padding-left: 20px;
        padding-right: 20px;
    }

    .message-row.both.alt .message-bubble .left-indicator {
        content: "";
        position: absolute;
        top: 20px;
        left: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-row.both.alt .message-bubble .right-indicator {
        content: "";
        position: absolute;
        top: 20px;
        right: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-content {
        margin-top: 4px;
        font-size: var(--chat-message-content-font-size);
    }

    .message-content ::slotted(p) {
        margin: 0;
    }
`;

/*
date indicator

.message-row.date .message-bubble {
    background-color: #f0f2f5;
    color: #65676b;
    border: 1px solid #dadde1;
    padding: 8px 16px;
    position: relative;
}


 .message-row.date .message-bubble:before,
 .message-row.date .message-bubble:after {
     content: "";
     position: absolute;
     top: 50%;
     width: 30px;
     height: 1px;
     background-color: #dadde1;
 }

 .message-row.date .message-bubble:before {
     left: -40px;
 }

 .message-row.date .message-bubble:after {
     right: -40px;
 }

*/
