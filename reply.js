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
    if (text === scoreCommand + telegramTag) {
        const spreadsheet = SpreadsheetApp.getActive();
        const name = getRegistrationById(spreadsheet, senderId)[2];
        if (name === null) {
            sendMessage(chatId, unregisteredMessage, message.message_id);
            return;
        }
        sendScore(spreadsheet, name, chatId, message.message_id);
        return;
    }
    if (split[0] === scoreCommand + telegramTag && split.length === 3) {
        sendScore(spreadsheet, split[1] + " " + split[2], chatId, message.message_id);
    }
}

function privateReply(message) {
    const senderId = message.from.id;
    const text = message.text;
    const split = text.split(" ");

    Logger.log("Private message: " + senderId + " " + text);

    const spreadsheet = SpreadsheetApp.getActive();
    const name = getRegistrationById(spreadsheet, senderId)[2];

    if (name == null) {
        greetUnregistered(spreadsheet, senderId, text, split);
    } else if (split[0] === unregisterCommand) {
        unregister(spreadsheet, senderId);
    } else if (text === helpCommand || text === beginCommand) {
        sendMessage(senderId, personalHelpMessage);
    } else if (text === scoreCommand) {
        sendScore(spreadsheet, name, senderId);
    } else if (split.length === 2) {
        addNotification(spreadsheet, senderId, name, split, message.message_id);
    } else {
        sendMessage(senderId, wrongMessageType);
    }
}