chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    setValueInput(message.value)
});

function setValueInput(value) {
    const EVENT_OPTIONS = {bubbles: true, cancelable: false, composed: true}
    const EVENTS = {
        BLUR: new Event("blur", EVENT_OPTIONS),
        CHANGE: new Event("change", EVENT_OPTIONS),
        INPUT: new Event("input", EVENT_OPTIONS),
    }

    const input = document.activeElement

    // navigator.clipboard.writeText(value)

    console.log(value)

    input.value = value
    input.dispatchEvent(EVENTS.INPUT)

}