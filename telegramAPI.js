function setWebhook() {
    const url = telegramUrl + "/setWebhook?url=" + webAppUrl;
    const response = UrlFetchApp.fetch(url);
    Logger.log(response)
}

function sendMessage(chatId, text, reply = null, disable_notification = false) {
    const payload = {
        'method': 'sendMessage',
        'chat_id': String(chatId),
        'text': text,
        'parse_mode': 'HTML',
        'reply_to_message_id': String(reply),
        'disable_notification': disable_notification
    };
    const data = {
        "method": "post",
        "payload": payload
    };
    const response = UrlFetchApp.fetch(telegramUrl + '/', data);
    Logger.log(response);
}