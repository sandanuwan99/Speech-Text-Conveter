const resultEi = document.getElementById('result');
let recognition;
''

function startConverting(){
     if('webkitSpeechRecognition' in window)
        recognition = new webkitSpeechRecognition();
        setUpRecognition(recognition);
        recognition.start();
}

function setUpRecognition(recognition){
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
}

function processResult(result){


}











function stopConverting(){

}