// chrome.tabs.onMessage.addListener((value) => {
//     setValueInput(value)
//     return true
// })

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    setValueInput(message.value)
    return true
});

function setValueInput(value)
{
    document.activeElement.value = value
}