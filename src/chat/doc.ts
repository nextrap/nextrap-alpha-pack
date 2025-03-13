import { registerComponent } from "@nextrap/doc-visualizer";

registerComponent({
    package: "chat",
    description: "Chat component",
    title: "NXA Chat Component",
    examples: [
        {
            title: "Chat Example",
            description: "Examples of a chat",
            lang: "html",
            code: `
                <!-- demo styles, could be passed into some more components -->
                <style>
                    .my-test-chat {
                        font-family: sans-serif;
                        --nxa-chat-message-indicator: #FF6107;
                        height: 800px;
                    }
                    .my-test-chat::part(header) {
                        background-color: #242424;
                        color: white;
                        padding: 0.5rem 1rem;
                    }
                    .message-input-wrapper {
                        display: flex;
                        gap: 10px;
                        align-items: center;
                    }

                    .message-input {
                        flex: 1;
                        padding: 10px 15px;
                        border: 1px solid #dadde1;
                        border-radius: 20px;
                        font-size: 14px;
                        outline: none;
                    }

                    .send-button {
                        padding: 8px 16px;
                        background-color: #242424;
                        color: white;
                        border: none;
                        border-radius: 20px;
                        cursor: pointer;
                        font-size: 14px;
                    }

                    .send-button:hover {
                        background-color: #101010;
                    }

                    .message-button {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        border: none;
                        background-color: #e5e6e7;
                        color: #242424;
                        font-size: 14px;
                        cursor: pointer;
                        margin-bottom: 4px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .message-button:hover {
                        background-color: #c5c6c7;
                    }

                    .message-status {
                        display: flex;
                        align-items: center;
                    }

                    .message-status i {
                        margin-right: 4px;
                        font-size: 12px;
                    }

                    .message-reactions {
                        display: flex;
                        align-items: center;
                        margin-left: 8px;
                    }

                    .reaction-count {
                        margin-left: 4px;
                    }
                </style>
                <nxa-chatbox class="my-test-chat">
                    <div slot="header"><h2>Chat Example</h2></div>
                    <div slot="footer">This is a demo chat</div>
                    <div slot="input">
                        <div class="message-input-wrapper">
                            <input type="text" class="message-input" id="messageInput" placeholder="Type a message...">
                            <button class="send-button" onclick="sendMessage()">Send</button>
                        </div>
                    </div>
                    <!-- messages -->
                    
                    <!-- Example for other -->
                    <nxa-chat-message data-type="other" data-date="2025-03-07T09:58:45.184Z">
                        <span slot="sender">John Doe</span>
                        <p slot="content">Hi there! How are you doing today?</p>
                        <div slot="control">
                            <button class="message-button" title="Reply">↩</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for me, highlighted -->
                    <nxa-chat-message data-type="me" class="highlight" data-date="2025-03-07T07:58:45.184Z">
                        <span slot="sender">You</span>
                        <p slot="content">I'm doing great, thanks for asking!</p>
                        <div slot="control">
                            <button class="message-button" title="Edit">✎</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                        <div slot="footer">
                            <div class="message-status">✓ Seen</div>
                            <div class="message-reactions">👍 2</div>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for other-alt, muted -->
                    <nxa-chat-message data-type="other-alt" class="muted" data-date="2025-03-10T08:23:45.184Z">
                        <span slot="sender">John Doe</span>
                        <span slot="recipient">to Team</span>
                        <p slot="content">This is an alternate "other" message!</p>
                        <div slot="control">
                            <button class="message-button" title="Reply">↩</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                        <div slot="footer">
                            <div class="message-status">Delivered to 5 recipients</div>
                            <div class="message-reactions">❤️ <span class="reaction-count">3</span></div>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for me-alt -->
                    <nxa-chat-message data-type="me-alt" data-date="2025-03-12T09:13:45.184Z">
                        <span slot="sender">You</span>
                        <span slot="recipient">to John</span>
                        <p slot="content">I'm good too. This is an alternate "me" message.</p>
                        <div slot="control">
                            <button class="message-button" title="Edit">✎</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                        <div slot="footer">
                            <div class="message-status">Delivered to 5 recipients</div>
                            <div class="message-reactions">❤️ <span class="reaction-count">3</span></div>
                        </div>
                    </nxa-chat-message>
                    
                    <!-- Example for both -->
                    <nxa-chat-message data-type="both" data-date="2025-03-12T09:37:45.184Z">
                        <span slot="sender">System</span>
                        <p slot="content">This is a normal "both" message that appears in the center.</p>
                        <div slot="control">
                            <button class="message-button" title="More">⋯</button>
                        </div>
                        <div slot="footer">
                            <div class="message-status">Automated message</div>
                            <div class="message-reactions">👀 <span class="reaction-count">4</span></div>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for both-alt -->
                    <nxa-chat-message data-type="both-alt" data-date="2025-03-12T09:37:48.184Z">
                        <span slot="sender">Broadcast</span>
                        <span slot="recipient">to Everyone</span>
                        <p slot="content">This is an alt "both" message.</p>
                        <div slot="control">
                            <button class="message-button" title="More">⋯</button>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for other -->
                    <nxa-chat-message data-type="other" data-date="2025-03-12T11:37:45.184Z">
                        <span slot="sender">John Doe</span>
                        <p slot="content">Let's chat some more, what do you think? Maybe I should write a little more for this message to wrap around multiple lines. I'll just keep going a little longer just to make sure we'll reach at least two or maybe even three wonderful chat message lines. This is actually harder than i though, on a big screen</p>
                        <div slot="control">
                            <button class="message-button" title="Reply">↩</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for me -->
                    <nxa-chat-message data-type="me" highlight data-date="2025-03-12T11:49:45.184Z">
                        <span slot="sender">You</span>
                        <p slot="content">Excellent!</p>
                        <div slot="control">
                            <button class="message-button" title="Edit">✎</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                    </nxa-chat-message>

                     <!-- Example for other-alt -->
                    <nxa-chat-message data-type="other-alt" data-date="2025-03-12T12:23:45.184Z">
                        <span slot="sender">John Doe</span>
                        <span slot="recipient">to Team</span>
                        <p slot="content">Hey team, what is everyone up to?</p>
                        <div slot="control">
                            <button class="message-button" title="Reply">↩</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                        <div slot="footer">
                            <div class="message-status">Delivered to 5 recipients</div>
                            <div class="message-reactions">🚀 <span class="reaction-count">5</span></div>
                        </div>
                    </nxa-chat-message>

                    <!-- Example for me-alt -->
                    <nxa-chat-message data-type="me-alt" data-date="2025-03-12T09:13:45.184Z">
                        <span slot="sender">You</span>
                        <span slot="recipient">to John</span>
                        <p slot="content">Let's goooo!!!</p>
                        <div slot="control">
                            <button class="message-button" title="Edit">✎</button>
                            <button class="message-button" title="More">⋯</button>
                        </div>
                    </nxa-chat-message>
                </nxa-chatbox>
            `,
        },
    ],
});
