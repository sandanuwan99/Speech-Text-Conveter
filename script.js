const resultElement = document.getElementById("result");
let recognition;

function startConverting() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    } else {
        alert("Speech Recognition not supported in this browser. Please use Google Chrome.");
    }
}

function setupRecognition(recognition) {
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        const { finalTranscript, interTranscript } = processResult(event.results);
        resultElement.innerHTML = finalTranscript + '<span style="color:gray;">' + interTranscript + '</span>';
    };

    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
    };
}

function processResult(results) {
    let finalTranscript = '';
    let interTranscript = '';

    for (let i = 0; i < results.length; i++) {
        let transcript = results[i][0].transcript;
        transcript = transcript.replace(/\n/g, "<br>");

        if (results[i].isFinal) {
            finalTranscript += transcript + " ";
        } else {
            interTranscript += transcript;
        }
    }

    return { finalTranscript, interTranscript };
}

function stopConverting() {
    if (recognition) {
        recognition.stop();
    }
}
