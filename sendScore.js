function sendScore(spreadsheet, name, id, message_id = null) {
    const tableScore = spreadsheet.getSheetByName(scoreSheet).getRange("A1:P700").getValues();
    let score;
    let nameIndex;
    const marks = [];
    if (name.split(" ").length === 2) {
        nameIndex = 1;
    } else {
        nameIndex = 2;
    }
    score = extractValue(tableScore, name, nameIndex);
    if (score === null) {
        score = extractValue(tableScore, name, nameIndex);
        if (score === null) {
            if (message_id == null) {
                sendMessage(id, registrationNotFound);
                return;
            } else {
                sendMessage(id, personNotFound, message_id);
                return;
            }
        }
    }

    const splitName = name.split(" ");
    name = splitName[0] + " " + splitName[1] + "\n" + yourScoreKal;
    //TO refactor at all
    if (score[0] === "y2023") {
        for (i = 0; i < 7; i++) {
            score[i] = parseFloat(score[i + 4]);
            if (score[i] > 90) {
                marks[i] = "A ";
            } else if (score[i] > 83) {
                marks[i] = "B ";
            } else if (score[i] > 74) {
                marks[i] = "C ";
            } else if (score[i] > 67) {
                marks[i] = "D ";
            } else if (score[i] >= 60) {
                marks[i] = "E ";
            } else {
                marks[i] = "FX";
            }
            score[i] = Math.floor(score[i] * 100) / 100;
            temp = score[i];
            if (temp < 100) {
                score[i] = " " + score[i];
                if (temp < 10) {
                    score[i] = " " + score[i];
                }
            }
            while (score[i].length !== 6) {
                score[i] = score[i] + " ";
            }
        }
        var message = name + "\r\n" + "<pre>Calculus       ║ " + score[5] + " ║  " + marks[5] + " ║\r\n" + "Prog-intro     ║ " + score[1] + " ║  " + marks[1] + " ║\r\n" + "Discrete Math  ║ " + score[0] + " ║  " + marks[0] + " ║\r\n" + "A&DS           ║ " + score[2] + " ║  " + marks[2] + " ║\r\n" + "Linear Algebra ║ " + score[4] + " ║  " + marks[4] + " ║\r\n" + "Comp-arch      ║ " + score[3] + " ║  " + marks[3] + " ║\r\n" + "               ║        ║     ║\r\n" + "Average        ║ " + score[6] + " ║  " + marks[6] + " ║</pre>";
        if (message_id == null) {
            sendMessage(id, message);
        } else {
            sendMessage(id, message, message_id);
        }
        return;
    }
    if (score[0] === "y2022") {
        for (var i = 0; i < 8; i++) {
            score[i] = parseFloat(score[i + 4]);
            if (score[i] > 90) {
                marks[i] = "A ";
            } else if (score[i] > 83) {
                marks[i] = "B ";
            } else if (score[i] > 74) {
                marks[i] = "C ";
            } else if (score[i] > 67) {
                marks[i] = "D ";
            } else if (score[i] >= 60) {
                marks[i] = "E ";
            } else {
                marks[i] = "FX";
            }
            score[i] = Math.floor(score[i] * 100) / 100;
            temp = score[i];
            if (temp < 100) {
                score[i] = " " + score[i];
                if (temp < 10) {
                    score[i] = " " + score[i];
                }
            }
            while (score[i].length !== 6) {
                score[i] = score[i] + " ";
            }
        }
        var message = name + "\r\n" + "<pre>Discrete Math      ║ " + score[0] + " ║  " + marks[0] + " ║\r\n" + "OS: " + score[13] + "           ║ " + score[1] + " ║  " + marks[1] + " ║\r\n" + "A&DS               ║ " + score[2] + " ║  " + marks[2] + " ║\r\n" + "Mathematical Logic ║ " + score[3] + " ║  " + marks[3] + " ║\r\n" + "Diff Equations     ║ " + score[4] + " ║  " + marks[4] + " ║\r\n" + "Calculus           ║ " + score[5] + " ║  " + marks[5] + " ║\r\n" + score[14] + " ".repeat(19 - score[14].length) + "║ " + score[6] + " ║  " + marks[6] + " ║\r\n" + "                   ║        ║     ║\r\n" + "Average            ║ " + score[7] + " ║  " + marks[7] + " ║</pre>";
        if (message_id == null) {
            sendMessage(id, message);
        } else {
            sendMessage(id, message, message_id);
        }
        return;
    }
    if (score[0] === "y2021") {
        for (var i = 0; i < 8; i++) {
            score[i] = parseFloat(score[i + 4]);
            if (i === 7) {
                score[i] *= 100;
            }
            if (score[i] > 90) {
                marks[i] = "A ";
            } else if (score[i] > 83) {
                marks[i] = "B ";
            } else if (score[i] > 74) {
                marks[i] = "C ";
            } else if (score[i] > 67) {
                marks[i] = "D ";
            } else if (score[i] >= 60) {
                marks[i] = "E ";
            } else {
                marks[i] = "FX";
            }
            score[i] = Math.floor(score[i] * 100) / 100;
            temp = score[i];
            if (temp < 100) {
                score[i] = " " + score[i];
                if (temp < 10) {
                    score[i] = " " + score[i];
                }
            }
            while (score[i].length !== 6) {
                score[i] = score[i] + " ";
            }
        }
        var message = name + "\r\n" + "<pre>MT                 ║ " + score[0] + " ║  " + marks[0] + " ║\r\n" + "МатСтат            ║ " + score[1] + " ║  " + marks[1] + " ║\r\n" + "ФП                 ║ " + score[2] + " ║  " + marks[2] + " ║\r\n" + "Параллел           ║ " + score[3] + " ║  " + marks[3] + " ║\r\n" + "АнДан              ║ " + score[4] + " ║  " + marks[4] + " ║\r\n" + score[14] + " ".repeat(19 - score[14].length) + "║ " + score[5] + " ║  " + marks[5] + " ║\r\n" + score[15] + " ".repeat(19 - score[15].length) + "║ " + score[6] + " ║  " + marks[6] + " ║\r\n" + "                   ║        ║     ║\r\n" + "Average            ║ " + score[7] + " ║  " + marks[7] + " ║</pre>";
        if (message_id == null) {
            sendMessage(id, message);
        } else {
            sendMessage(id, message, message_id);
        }
    }
}

sendScore("a", 'a');