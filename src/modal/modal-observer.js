import { NxaModal } from "./nxa-modal";
/**
 * Register a observer that is triggered on anchor url change.
 *
 * if #modal:#id is in the url, the modal with the id is opened
 */
export function registerModalObserver() {
    // if observer is already registered, return
    if (window['modalObserverRegistered']) {
        return;
    }
    window['modalObserverRegistered'] = true;
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash.startsWith('#modal:')) {
            const id = hash.substring(7);
            const modal = document.getElementById(id);
            if (!modal) {
                console.error('Modal with id ' + id + ' not found');
                throw new Error('Modal with id ' + id + ' not found');
            }
            if (modal instanceof NxaModal) {
                modal.openModal();
                return;
            }
            console.error('Element with id ' + id + ' is not a modal');
        }
    });
}
