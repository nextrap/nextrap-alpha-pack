import {registerComponent} from "@nextrap/doc-visualizer";

registerComponent({
    package: "input",
    description: "Input component",
    title: "NxInput",
    examples: [
        {
            title: "Basic input",
            description: "Basic input example",
            lang: "html",
            // language=html
            code: `

<nxa-lead-button href="#test" icon="bi bi-wrench shadow" title="Click here, bitch" subtitle="Go on and on and on"></nxa-lead-button>

<nxa-lead-button class="" label="Input Label" placeholder="Input Placeholder">
    <i class="bi-alarm " slot="icon"></i>
    <div>Hello world</div>
    <div>second line</div>
</nxa-lead-button>

<nxa-lead-button class="inverted wave" label="Input Label" placeholder="Input Placeholder">
    <i class="bi-alarm " slot="icon"></i>
    <div>Hello world</div>
    <div>second line</div>
</nxa-lead-button>
`
        },
        {
            title: "Input with value",
            description: "Input example with value",
            lang: "html",
            code: `<nx-input label="Input Label" placeholder="Input Placeholder" value="Input Value"></nx-input>`
        }
    ]
})
