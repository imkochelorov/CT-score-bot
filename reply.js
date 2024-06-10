function groupReply(message) {
    const senderId = message.from.id;
    const chatId = message.chat.id;
    const text = message.text;
    const split = text.split(" ");

    Logger.log("Group message: " + chatId + " " + text);

    if (split[0] === helpCommand + telegramTag) {
        sendMessage(chatId, groupHelpMessage, message.message_id);
        return;
    }

    const spreadsheet = SpreadsheetApp.getActive();

    if (split.length === 1 && (text === scoreCommand + telegramTag || text === shameCommand + telegramTag)) {
        const registration = getRegistrationById(spreadsheet, senderId);
        if (registration === null) {
            sendMessage(chatId, unregisteredMessage, message.message_id);
            return;
        }
        const name = registration[2];
        if (text === scoreCommand + telegramTag) {
            if (name in personalScoreReplacement) {
                sendMessage(chatId, personalScoreReplacement[name], message.message_id);
                return;
            }
            sendScore(spreadsheet, name, chatId, message.message_id);
            return;
        }
        if (text === shameCommand + telegramTag) {
            //sendShame(spreadsheet, name, chatId, message.message_id);
            return;
        }
    }

    let name = null;
    if (split.length === 3) {
        name = split[1] + " " + split[2];
    } else if (split.length === 4) {
        name = split[1] + " " + split[2] + " " + split[3];
    }
    if (split[0] === scoreCommand + telegramTag && name !== null) {
        if (name in groupScoreReplacement) {
            sendMessage(chatId, groupScoreReplacement[name], message.message_id);
            return;
        }
        sendScore(spreadsheet, name, chatId, message.message_id);
        return;
    }
    if (split[0] === shameCommand + telegramTag && name !== null) {
        sendShame(spreadsheet, name, chatId, message.message_id);
        return;
    }
}

function privateReply(message) {
    const senderId = message.from.id;
    const text = message.text;
    const split = text.split(" ");

    Logger.log("Private message: " + senderId + " " + text);

    const spreadsheet = SpreadsheetApp.getActive();
    const registration = getRegistrationById(spreadsheet, senderId);

    if (registration == null) {
        greetUnregistered(spreadsheet, senderId, text, split);
        return;
    }
    if (split[0] === unregisterCommand) {
        unregister(spreadsheet, senderId);
        return;
    }
    if (text === helpCommand || text === beginCommand) {
        sendMessage(senderId, personalHelpMessage);
        return;
    }
    const name = registration[2];
    if (text === scoreCommand) {
        sendScore(spreadsheet, name, senderId);
    } else if (text === shameCommand) {
        //sendShame(spreadsheet, name, senderId);
    } else if (split.length === 2) {
        addNotification(spreadsheet, senderId, name, split, message.message_id);
    } else {
        sendMessage(senderId, wrongMessageType);
    }
}