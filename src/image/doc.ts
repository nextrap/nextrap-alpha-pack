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
    <img src="https://media.cleanshot.cloud/media/108894/cqCoBOAbnKh0eUgYyvgbTsVW230CKsDjwdotIPZJ.jpeg?Expires=1741748751&Signature=P3cj9lVCUCPIL0IuzXSh~p8UV7UgZ1QZImDugKF5SJaKm76dbgt40vKZjSC2VgOM5yVhPUfDclgweIB1uq-Xem7cg5u4ggSKxHDaFv5AD2GmKN22M~uapXTjkeZEpXJzzb7uJ~vHmlYiP5nHoiNhfGAieDjHW-WvB0HgqENWgwFA77FvF2XAytgOcJPTGMhcC0DLnqD9W0AhjSd17YIzxIACu~R527jUdxElVWQrQmPGDate0RL6EwkFQCFWH4hx8EuhbPA0Jmo50zTmWJ27wUYUGZaTpzcyadhMk-VqWQ4SC~hBOx5eG8ZZWWqS4-rzkjduUWD5jHxYviE9w-BAKA__&Key-Pair-Id=K269JMAT9ZF4GZ" style="object-position: center center;">
</nxa-image>
            `
        },
        {
            title: "Cropped Image",
            description: "A simple image cropped",
            lang: "html",
            code: `
            <br/><br/>
            <div style="display: flex">
<nxa-image style="width: 300px; height: 600px">
    <img style="object-position: center center;" data-crop="top: 0%; bottom: 50%; right: 0%; left: 0%" src="https://media.cleanshot.cloud/media/108894/cqCoBOAbnKh0eUgYyvgbTsVW230CKsDjwdotIPZJ.jpeg?Expires=1741748751&Signature=P3cj9lVCUCPIL0IuzXSh~p8UV7UgZ1QZImDugKF5SJaKm76dbgt40vKZjSC2VgOM5yVhPUfDclgweIB1uq-Xem7cg5u4ggSKxHDaFv5AD2GmKN22M~uapXTjkeZEpXJzzb7uJ~vHmlYiP5nHoiNhfGAieDjHW-WvB0HgqENWgwFA77FvF2XAytgOcJPTGMhcC0DLnqD9W0AhjSd17YIzxIACu~R527jUdxElVWQrQmPGDate0RL6EwkFQCFWH4hx8EuhbPA0Jmo50zTmWJ27wUYUGZaTpzcyadhMk-VqWQ4SC~hBOx5eG8ZZWWqS4-rzkjduUWD5jHxYviE9w-BAKA__&Key-Pair-Id=K269JMAT9ZF4GZ">
</nxa-image>
<nxa-image style="width: 600px; height: 600px">
    <img style="object-position: center center;" data-crop="top: 50px; bottom: 50px; right: 50px; left: 50px" src="https://media.cleanshot.cloud/media/108894/cqCoBOAbnKh0eUgYyvgbTsVW230CKsDjwdotIPZJ.jpeg?Expires=1741748751&Signature=P3cj9lVCUCPIL0IuzXSh~p8UV7UgZ1QZImDugKF5SJaKm76dbgt40vKZjSC2VgOM5yVhPUfDclgweIB1uq-Xem7cg5u4ggSKxHDaFv5AD2GmKN22M~uapXTjkeZEpXJzzb7uJ~vHmlYiP5nHoiNhfGAieDjHW-WvB0HgqENWgwFA77FvF2XAytgOcJPTGMhcC0DLnqD9W0AhjSd17YIzxIACu~R527jUdxElVWQrQmPGDate0RL6EwkFQCFWH4hx8EuhbPA0Jmo50zTmWJ27wUYUGZaTpzcyadhMk-VqWQ4SC~hBOx5eG8ZZWWqS4-rzkjduUWD5jHxYviE9w-BAKA__&Key-Pair-Id=K269JMAT9ZF4GZ">
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
