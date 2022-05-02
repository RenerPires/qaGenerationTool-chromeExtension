chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "qaGeneration",
        "title": "Gerar Dados",
        "contexts": ["selection"]
    });

    chrome.contextMenus.create({
        "title": "Gerar uuid",
        "parentId": "qaGeneration",
        "id": "list",
        "contexts":["selection"]
    });
    
    chrome.contextMenus.create({
        "title": "Gerar CPF",
        "parentId": "qaGeneration",
        "id": "c32841d8-e3e8-4ce9-b518-ef8e22669f34",
        "contexts":["selection"]
    });
    
    chrome.contextMenus.create({
        "title": "Gerar CNPJ",
        "parentId": "qaGeneration",
        "id": "252a1e5c-cf77-4bbc-a2bb-d9d69689590a",
        "contexts":["selection"]
    });

    chrome.contextMenus.create({
        "title": "Gerar Email",
        "parentId": "qaGeneration",
        "id": "0f7ed6f1-add2-4fa0-a9dc-9cb279a9ebaf",
        "contexts":["selection"]
    });

    chrome.contextMenus.create({
        "title": "Gerar Telefone",
        "parentId": "qaGeneration",
        "id": "0bb4471a-d769-4c3c-b7e5-af861b272d57",
        "contexts":["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    
})