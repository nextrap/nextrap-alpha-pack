import {registerComponent} from "@nextrap/doc-visualizer";

registerComponent({
    package: "nxa-image",
    description: "Image Component",
    title: "NxaImage",
    examples: [
        {
            title: "Simple image",
            description: "A simple image",
            lang: "html",
            code: `
<nxa-image style="width: 600px; height: 600px">
    <img src="src/image/pixel-matrix.png" style="object-position: center center;">
</nxa-image>
            `
        },
        {
            title: "Cropped Image",
            description: "A simple image cropped",
            lang: "html",
            code: `
            <br/><br/>
            <div style="display: flex; height: 400px">
<nxa-image style="width: 300px; height: 600px">
    <img style="object-position: left top;" data-crop="top: 0%; bottom: 0%; right: 0%; left: 0%" src="/src/image/pixel-matrix.png">
</nxa-image>
<nxa-image style="">
    <img style="object-position: left top;" data-crop="top: 0px; bottom: 0px; right: 0px; left: 0px" src="/src/image/pixel-matrix.png">
</nxa-image>
</div>
            `
        },
        {
            title: "Slideshow",
            description: "Eine Slideshow",
            lang: "html",
            code: `
<div style="display:none">
<nxa-image style="width: 100%; height: 250px" data-features="slideshow blend fullsize">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/20/267-128_267/MVZ-GG.svg" style="object-position: top center;" data-caption="Bild 1" data-crop="top: 10%; bottom: 20%">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/19/85-64_170/Praxis-Gromes.svg" style="object-position: bottom center;">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/18/57-32_228/Gefaess-Gallis.svg" style="object-position: center center;">
</nxa-image>
</div>
            `
        }
    ]
})
