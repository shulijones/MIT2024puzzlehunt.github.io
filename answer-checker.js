// Code skeleton and hashing by Michael Tang, minor edits by Shuli Jones

function hashAnswer(submission) {
    const strippedSubmission = submission.toUpperCase().replace(/[^A-Z0-9]/g, "");
    var submissionHashCode = 0;
    for (var i = 0; i < strippedSubmission.length; i++) {
        const char = strippedSubmission.charCodeAt(i);
        submissionHashCode = (submissionHashCode * 2019) + char;
        submissionHashCode %= 4294967296;
    }
    return submissionHashCode;
}

function checkAnswer(puzzleId, submission) {
    const answerHashCodes = {
        'arts-1': 5,
        'arts-2': 5,
        'arts-3': 5,
        'arts-4': 5,
        'ers-1': 5,
        'ers-2': 5,
        'ers-3': 5,
        'ers-4': 5,
        'ers-5': 5,
        'ers-6': 5,
        'hum-1': 5,
        'hum-2': 5,
        'hum-3': 5,
        'hum-4': 2645599512,
        'int-1': 5,
        'int-2': 5,
        'int-3': 5,
        'int-4': 5,
        'int-5': 5,
        'ss-1': 5,
        'ss-2': 5,
        'ss-3': 5,
        'ss-4': 5,
        'ss-5': 5
    }    
    const answerHashCode = answerHashCodes[puzzleId];    
    if (hashAnswer(submission) == answerHashCode) {
        return 'Correct!';
    } else {return 'Incorrect.';}
}

function check(puzzleName) {
    const answer = document.forms.namedItem(puzzleName + '--ac')[0].value;
    document.getElementById(puzzleName + '--result').innerHTML =
        checkAnswer(puzzleName, answer);
}
