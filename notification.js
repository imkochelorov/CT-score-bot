//TO refactor whole notification system
function addNotification(spreadsheet, id, name, split, messageId) {
    const subject = split[0].toLowerCase();
    if (subjects[subject] === undefined) {
        sendMessage(id, "Неверное название предмета");
        return;
    }
    if (isNaN(parseInt((split[1])))) {
        sendMessage(id, "Не валидное число");
        return;
    }
    const nextNotificationIndex = spreadsheet.getSheetByName("bot_tmp").getRange("E1").getValue();
    spreadsheet.getSheetByName("bot_tmp").getRange("A" + nextNotificationIndex).setValue(name)
    spreadsheet.getSheetByName("bot_tmp").getRange("B" + nextNotificationIndex).setValue(id);
    spreadsheet.getSheetByName("bot_tmp").getRange("C" + nextNotificationIndex).setValue(subject);
    spreadsheet.getSheetByName("bot_tmp").getRange("D" + nextNotificationIndex).setValue(split[1]);
    sendMessage(id, "Уведомление поставлено!", messageId);
}

function check() {
    const spreadsheet = SpreadsheetApp.getActive();
    const requests = spreadsheet.getSheetByName("bot_tmp").getRange("A2:K500").getValues();
    const toDelete = [];
    const scores = spreadsheet.getSheetByName(scoreSheet).getRange("B2:K500").getValues();
    const persons = {};
    for (i = 0; i < scores.length; i++) {
        persons[scores[i][0]] = i;
    }
    for (i = 0; i < requests.length; i++) {
        if (requests[i][0] === "") {
            Logger.log("requests: " + i);
            break;
        } else {
            const j = persons[requests[i][0]];
            if (j === undefined) {
                Logger.log(requests[i][0] + " not found");
                continue;
            }
            if (requests[i][3] <= scores[j][subjects[requests[i][2]]]) {
                sendMessage(requests[i][1], requests[i][0] + ": " + scores[j][subjects[requests[i][2]]] + " по " + requests[i][2]);
                toDelete.push(i);
            }
        }
    }
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName("bot_tmp"));
    for (i = toDelete.length - 1; i >= 0; i--) {
        Logger.log(requests[toDelete[i]]);
        spreadsheet.getSheetByName("bot_tmp").deleteRow(2 + toDelete[i]);
        Logger.log(toDelete[i]);
    }
}