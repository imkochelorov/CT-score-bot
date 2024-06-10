function getRegistrationByValueAndIndex(spreadsheet, value, index) {
    if (value === "" || value === null) return null;
    let registeredCount;
    let values;
    let registration;
    for (let i = 0; i < registrationsSheets.length; i++) {
        registeredCount = spreadsheet.getSheetByName(registrationsSheets[i]).getRange(registrationsCountCell).getValue();
        values = spreadsheet.getSheetByName(registrationsSheets[i]).getRange("A2:G" + registeredCount).getValues();
        registration = extractValue(values, value, index);
        if (registration !== null) {
            break;
        }
    }
    return registration;
}

function getRegistrationById(spreadsheet, id) {
    return getRegistrationByValueAndIndex(spreadsheet, id, 1);
}

function getRegistrationByName(spreadsheet, name) {
    return getRegistrationByValueAndIndex(spreadsheet, name, 2);
}

function greetUnregistered(spreadsheet, id, text, split) {
    let nameIndex;
    if (split.length === 3) {
        nameIndex = 2;
    } else {
        sendMessage(id, greetMessage);
        return;
    }

    let student = extractValue(spreadsheet.getSheetByName(studentsSheets[0]).getRange("A2:D300").getValues(), text, nameIndex);
    let year = 2023;

    if (student === null) {
        sendMessage(id, doubtfulRegistration);
        year = 2022;
    }

    register(spreadsheet, id, text, year);
}

function register(spreadsheet, id, name, year) {
    const registeredCount = spreadsheet.getSheetByName(registrationsSheets[1 - (year - 2022)]).getRange(registrationsCountCell).getValue();
    spreadsheet.getSheetByName(registrationsSheets[1 - (year - 2022)]).getRange("A" + registeredCount).setValue("=ROW(A" + registeredCount + ")");
    spreadsheet.getSheetByName(registrationsSheets[1 - (year - 2022)]).getRange("B" + registeredCount).setValue(id)
    spreadsheet.getSheetByName(registrationsSheets[1 - (year - 2022)]).getRange("C" + registeredCount).setValue(name);
    spreadsheet.getSheetByName(registrationsSheets[1 - (year - 2022)]).getRange("D" + registeredCount).setValue(year);
    sendMessage(id, successfullRegistrationMessage);
    sendMessage(id, personalHelpMessage);
}

function unregister(spreadsheet, senderId) {
    const registration = getRegistrationById(spreadsheet, senderId);
    spreadsheet.getSheetByName(registrationsSheets[1 - (registration[3] - 2022)]).deleteRow(registration[0]);
    sendMessage(senderId, unregisterMessage);
}