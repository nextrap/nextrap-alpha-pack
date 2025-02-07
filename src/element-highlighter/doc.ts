import {registerComponent} from "@nextrap/doc-visualizer";

registerComponent({
    package: "element-highlighter",
    description: "Element Highlighter",
    title: "NxaElementHighlighter",
    examples: [
        {
            title: "Highlight a static element",
            description: "This test shows a grey div, which is the target for highlighting. The highlighter is initially hidden.",
            lang: "html",
            // language=html
            code: `
<div
    id="element-highlighter-target-element"
    style="background: grey; width: 100px; height: 100px"
></div>
<nxa-element-highlighter
    selector="#element-highlighter-target-element"
></nxa-element-highlighter>

<fieldset style="margin-top: 20px">
    <legend>Demo Controls</legend>

    <button onclick="document.querySelector('nxa-element-highlighter').show()">Show</button>
    <button onclick="document.querySelector('nxa-element-highlighter').hide()">Hide</button>

    <label for="el-highlight-demo-1-border-with-ctrl">Border Width</label>
    <select id="el-highlight-demo-1-border-with-ctrl" onchange="document.querySelector('nxa-element-highlighter').borderWidth = this.value">
        <option value="1">1</option>
        <option value="2" selected>2</option>
        <option value="3">3</option>
    </select>

    <label for="el-highlight-demo-1-border-color-ctrl">Border Color</label>
    <select id="el-highlight-demo-1-border-color-ctrl" onchange="document.querySelector('nxa-element-highlighter').borderColor = this.value">
        <option value="red" selected>red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
    </select>
</fieldset>
            `
        }
    ]
})
