chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    setValueInput(message.value)
});

function setValueInput(value) {
    document.activeElement.value = value
}