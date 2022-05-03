chrome.runtime.onInstalled.addListener(function() {

    chrome.contextMenus.create({
        "id": "qaGeneration",
        "title": "Gerar Dados",
        "contexts": ["editable"]
    });

    chrome.contextMenus.create({
        "title": "Gerar uuid",
        "parentId": "qaGeneration",
        "id": "uuid",
        "contexts":["editable"]
    });
    
    chrome.contextMenus.create({
        "title": "Gerar CPF",
        "parentId": "qaGeneration",
        "id": "cpf",
        "contexts":["editable"]
    });
    
    chrome.contextMenus.create({
        "title": "Gerar CNPJ",
        "parentId": "qaGeneration",
        "id": "cnpj",
        "contexts":["editable"]
    });

    chrome.contextMenus.create({
        "title": "Gerar Email",
        "parentId": "qaGeneration",
        "id": "email",
        "contexts":["editable"]
    });

    chrome.contextMenus.create({
        "title": "Gerar Telefone",
        "parentId": "qaGeneration",
        "id": "fone",
        "contexts":["editable"]
    });

    chrome.contextMenus.create({
        "type": "separator"
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    let value = ""

    switch(info.menuItemId)
    {
        case "uuid":
            value = "uuidteste"
            break
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tab.id, {value: value}, () => {})
    })
})