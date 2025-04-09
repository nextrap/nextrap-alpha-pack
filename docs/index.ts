import "../index.doc";
import "../index";
import "@nextrap/doc-visualizer";
import { Nextrap, pinnedPackage as registryPinnedPackage, togglePinPackage } from "@nextrap/doc-visualizer";

(window as any).NextrapRegistry = Nextrap;

document.addEventListener("DOMContentLoaded", () => {
    const docRoot = document.getElementById("doc-root");
    if (!docRoot) {
        console.error("Doc root element not found!");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const previewPackage = urlParams.get('preview');
    const initialPin = urlParams.get('pin');

    if (initialPin && registryPinnedPackage !== initialPin) {
         if (registryPinnedPackage !== null) {
             togglePinPackage(registryPinnedPackage); // Toggle off current if any
         }
         togglePinPackage(initialPin); // Toggle on the one from URL
    }


    if (previewPackage) {
        console.log(`Rendering isolated preview for: ${previewPackage}`);
        const isolatedPreview = document.createElement('nx-isolated-preview');
        isolatedPreview.setAttribute('package', previewPackage);
        docRoot.appendChild(isolatedPreview);

    } else {
        const packageList = document.createElement('nx-doc-packages-list');
        docRoot.appendChild(packageList);
    }
});
