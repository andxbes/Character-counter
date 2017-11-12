/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

browser.contextMenus.create({
    id: "w-counter",
//  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    title: "Подсчитать количесвто символов",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "w-counter":
            var text = info.selectionText;
            
            result = countWords(text);
            console.log(result);
            var content = "Всего символов : " + result .all + " \n"
                        + "Символов без пробелов : " + result.withoutSpaces;
            browser.notifications.create({
                "type": "basic",
                "iconUrl": browser.extension.getURL("icons/ico.svg"),
                "title": "Количество символов",
                "message": content
            });

            break;
    }
});


function countWords(value) {
    var result = {
        text: value,
        all: "0",
        withoutSpaces: "0"
    };

    result.all = value.length;
    var cleartext = value.replace(/\s*/g, "");
    console.info(cleartext);
    result.withoutSpaces = cleartext.length;

    return result;
}
