//Unused anymore

function sendShame(spreadsheet, name, id, message_id = null) {
    const shameData = spreadsheet.getSheetByName(shameSheet).getRange("A2:E700").getValues();
    let shame;
    let nameIndex;
    if (name.split(" ").length === 2) {
        nameIndex = 1;
    } else {
        nameIndex = 2;
    }
    shame = extractValue(shameData, name, nameIndex);
    if (shame === null) {
        if (message_id == null) {
            sendMessage(id, personNotFound + "\r\nПапка позора работает лишь с y2023");
            return;
        } else {
            sendMessage(id, personNotFound + "\r\nПапка позора работает лишь с y2023", message_id);
            return;
        }
    }
    const splitName = name.split(" ");
    name = splitName[0] + " " + splitName[1];
    let message;
    if (shame[4] === "") {
        message = name + "\r\n" + shameNotFound;
        if (message_id == null) {
            sendMessage(id, message);
            return;
        } else {
            sendMessage(id, message, message_id);
            return;
        }
    }
    message = name + "\r\n" + shame[4];
    if (message_id == null) {
        sendMessage(id, message);
    } else {
        sendMessage(id, message, message_id);
    }
}