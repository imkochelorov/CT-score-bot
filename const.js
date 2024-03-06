//const token declared in privateConst file
//const webAppUrl declared in privateConst file
const telegramUrl = "https://api.telegram.org/bot" + token;

//TO remove?
const subjects = {"матан": 8, "java": 4, "дм": 3, "аисд": 5, "линал": 7, "эвм": 6};

const telegramTag = "@CT_score_bot";

const beginCommand = "/start";
const scoreCommand = "/score";
const helpCommand = "/help";
const unregisterCommand = "/unregister";

const unsupportedChatTypeMessage = "Неподдерживаемый тип чата!";

const unregisteredMessage = `
К сожалению, вы не зарегистрированы!
Вы можете зарегистрироваться, написав боту в личные сообщения
`;
const unregisterMessage = "Пожалуйста, зарегистрируйтесь снова, введя ФИО, строго совпадающие с табличным";
const greetMessage = "<b>Для начала работы с ботом введите своё ФИО, строго совпадающее с табличным</b>";
const successfullRegistrationMessage = "Регистрация прошла успешно!";
const wrongMessageType = "Неверный формат сообщения";

const groupHelpMessage = `
<b>Получить свои баллы (только если вы зарегестрированы)</b>
` + scoreCommand + telegramTag + `

<b>Получить баллы человека по имени</b>
` + scoreCommand + telegramTag + ` <i>Фамилия Имя</i>

<b>Получить это сообщение</b>
` + helpCommand + telegramTag;

const personalHelpMessage = `
<b>Получить свои баллы</b>
` + scoreCommand + `

<b>Перерегистирроваться</b>
` + unregisterCommand + `

<b>Получить это сообщение</b>
` + helpCommand;

const personNotFound = `
Указанный человек не найден
Убедитесь, что ввод совпадает табличному и попробуйте ещё раз`;
const registrationNotFound = `
К сожалению, не удалось найти Ваши баллы
Попробуйте перерегистрироваться, а если не поможет, напишите @imkochelorov`;

const registrationsSheet = "bot_registrations"
const scoreSheet = "score"

const registrationsCountCell = "D1"

const yourScoreKal = `
............/´¯/)...............(\\¯\`\\...... ......
.........../...//.............. .\\...\\............
........../...//..................\\...\\...........
....../´¯/.../´¯\\..ТВОИ БАЛЛЫ.../¯\\\` ..\\¯\`\\.......
..././../.../../.|_....КАЛ...._|.\\..\\...\\..\\.\\....
.(.(...(...(../.)..).........(..(.\\..)...)..).)...
.\\............\\/.../.........\\...\\/.........../...
..\\............../............\\............../....
...\\............(..............)............/.....
....\\............\\............./.........../......`;