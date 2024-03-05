function getRegistrationById(spreadsheet, id) {
    const registeredCount = spreadsheet.getSheetByName(registrationsSheet).getRange(registrationsCountCell).getValue();
    const values = spreadsheet.getSheetByName(registrationsSheet).getRange("A2:C" + registeredCount).getValues();
    return extractValue(values, id, 1);
}

function greetUnregistered(spreadsheet, id, text, split) {
    if (split.length !== 3) {
        sendMessage(id, greetMessage);
        return;
    }
    if (extractValue(spreadsheet.getSheetByName(scoreSheet).getRange("A2:B700").getValues(), text, 2) === null) {
        sendMessage(id, greetMessage);
        return;
    }
    register(spreadsheet, id, text);
}

function register(spreadsheet, id, name) {
    const registeredCount = spreadsheet.getSheetByName(registrationsSheet).getRange(registrationsCountCell).getValue();
    spreadsheet.getSheetByName(registrationsSheet).getRange("A" + registeredCount).setValue("=ROW(A" + registeredCount + ")");
    spreadsheet.getSheetByName(registrationsSheet).getRange("B" + registeredCount).setValue(id)
    spreadsheet.getSheetByName(registrationsSheet).getRange("C" + registeredCount).setValue(name);
    sendMessage(id, successfullRegistrationMessage, messageId);
    sendMessage(id, personalHelpMessage);
}

function unregister(spreadsheet, id) {
    const index = getRegistrationById(spreadsheet, senderId)[0];
    spreadsheet.getSheetByName(registrationsSheet).deleteRow(index);
    sendMessage(id, unregisterMessage);
}