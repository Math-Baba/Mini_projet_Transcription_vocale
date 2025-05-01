//Mathieu Baba 
//Script JavaScript pour retranscrire la voix en texte en streaming
let recordButton = document.getElementById("record");
let stopButton = document.getElementById("stop");

function demarrerReconnaissance() {
    recognition.start();
}

function arreterReconnaissance(){
    recognition.stop();
}

const texte = document.getElementById("dom-msg");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "fr-FR";
recognition.interimResults = true;
recognition.continuous = true;

recognition.onresult = (event) => {
let contenu = '';
for (let i = event.resultIndex; i < event.results.length; i++) {
    contenu += event.results[i][0].transcript;
}
    texte.textContent = contenu;
};





recordButton.addEventListener("click", function () {
    demarrerReconnaissance(); 
});

stopButton.addEventListener("click", function(){
    arreterReconnaissance();
});










//fonction pour afficher la réponse
function reponse(nombre){
    if(nombre === false){
        let message = "Ce n'est pas un nombre premier";
        return message;
    } else if (nombre == true){
        let message = "c'est un nombre premier";
        return message;
    }
      
}

//fonction pour afficher le résultat final
function afficherResultat() {
    
    let valeur = document.getElementById("input-id").value;

    let NbPremier = isPrime(valeur);

    let affichageRep = reponse(NbPremier)

    let domMsg = document.getElementById("dom-msg");

    domMsg.innerText = affichageRep;
}


//fonction pour effacer le contenu du input
function clear(){
    let clearButton = document.getElementById("id-clear");
    
    clearButton.addEventListener("click", function () {
        let clearNumber = document.getElementById("input-id");
        clearNumber.value = ""; 
    });
}

clear()