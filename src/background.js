import generator from "./utils/generator.js"

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
        "title": "Gerar Nome",
        "parentId": "qaGeneration",
        "id": "name",
        "contexts":["editable"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    let value = ""

    switch(info.menuItemId)
    {
        case "uuid":
            value = generator.uuid()
            break
        case "cnpj":
            value = generator.cnpj()
            break
        case "cpf":
            value = generator.cpf()
            break
        case "email":
            value = generator.email()
            break
        case "fone":
            value = generator.fone()
            break
        case "name":
            value = generator.name()
            break
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tab.id, {value: value}, () => {})
    })
})