import {registerComponent} from "../../workspaces/nextrap-doc-visualizer";

registerComponent({
    package: "nxa-modal",
    description: "Modal Component",
    title: "NxaModal",
    examples: [
        {
            title: "Modal Example",
            description: "Basic example",
            lang: "html",
            // language=html
            code: `

<nxa-modal id="modal1" title="Modal Title" subtitle="Modal Subtitle" body="Modal Body" size="md"></nxa-modal>
<nxa-modal id="modal2" size="md" title="Very long title that might overwrite the close button">
    <div slot="body">Body1</div>
</nxa-modal>
<nxa-modal id="modal3" size="fullscreen" title="Iframe" src="https://google.com"></nxa-modal>
<nxa-modal id="modal4" size="fullscreen" class="floating-header">
<form>
    No title
    <input type="text" placeholder="Type something">
    <button>Submit</button>
</form>
</nxa-modal>




<button onclick="document.querySelector('#modal1').openModal()">Open Modal1</button>
<button onclick="document.querySelector('#modal2').openModal()">Open Modal2</button>
<button onclick="document.querySelector('#modal3').openModal()">Open Modal3</button>
<button onclick="document.querySelector('#modal4').openModal()">Open Modal4</button>
            `
        }
    ]
})
