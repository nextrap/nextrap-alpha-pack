import {registerComponent} from "@nextrap/doc-visualizer";

registerComponent({
    package: "switch-pane",
    description: "Switch Pane Component",
    title: "nxa-switch-pane",
    examples: [
        {
            title: "Basic input",
            description: "Basic input example",
            lang: "html",
            // language=html
            code: `

<nxa-switch-pane>
    <div>Content1</div>
    <div>Content2</div>
    <div slot="footer">
        <button id="prevBtn">Back</button>
        <button id="nextBtn">Next</button>
    </div>
</nxa-switch-pane>

<nxa-switch-pane class="blend">
    <div>Content1</div>
    <div>Content2<br>line2</div>
    <div slot="footer">
        <button id="prevBtn">Back</button>
        <button id="nextBtn">Next</button>
    </div>
</nxa-switch-pane>
`


        }
    ]
})
