import {registerComponent} from "@nextrap/doc-visualizer";

registerComponent({
    package: "nxa-infiniscroll",
    description: "Lead Button Component",
    title: "NxaInfiniscroll",
    examples: [
        {
            title: "Buttonbar",
            description: "Basic example",
            lang: "html",
            // language=html
            code: `


<nxa-infiniscroll auto-scroll>
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/20/267-128_267/MVZ-GG.svg" alt="MVZ GG" height="48">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/19/85-64_170/Praxis-Gromes.svg" alt="Praxis Gromes" height="48">
    <img src="https://cdn.leuffen.de//leu-kdnlogos/v2/18/57-32_228/Gefaess-Gallis.svg" alt="Gefaess Gallis" height="48">

</nxa-infiniscroll>
            `
        }
    ]
})
