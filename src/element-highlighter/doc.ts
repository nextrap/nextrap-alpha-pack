import {registerComponent} from "@nextrap/doc-visualizer";

registerComponent({
    package: "element-highlighter",
    description: "Element Highlighter",
    title: "NxaElementHighlighter",
    examples: [
        {
            title: "Highlight a static element",
            description: "This test shows a grey div, which is the target for highlighting.",
            lang: "html",
            // language=html
            code: `
                <div
                    id="element-highlighter-target-element"
                    style="background: grey; width: 100px; height: 100px"
                ></div>

                <nxa-element-highlighter
                    selector="#element-highlighter-target-element"
                />
            `
        }
    ]
})
