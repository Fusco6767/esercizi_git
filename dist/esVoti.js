"use strict";
function registraVoto() {
    let nome = document.getElementById("nome").value.trim();
    let votoTesto = document.getElementById("voto").value.trim();
    let messaggio = document.getElementById("messaggio");
    if (nome === "") {
        messaggio.innerHTML = "Inserisci il nome dell'alunno";
        return;
    }
    if (votoTesto === "") {
        messaggio.innerHTML = "Il voto deve essere un numero da 1 a 10";
        return;
    }
    let voto = Number(votoTesto);
    if (Number.isNaN(voto) || voto < 1 || voto > 10) {
        messaggio.innerHTML = "Il voto deve essere un numero da 1 a 10";
        return;
    }
    messaggio.innerHTML = "";
    let giudizio = "";
    let classeCss = "";
    if (voto <= 5) {
        giudizio = "Insufficiente";
        classeCss = "insufficiente";
    }
    else if (voto === 6) {
        giudizio = "Sufficiente";
        classeCss = "sufficiente";
    }
    else if (voto === 7 || voto === 8) {
        giudizio = "Buono";
        classeCss = "buono";
    }
    else {
        giudizio = "Ottimo";
        classeCss = "ottimo";
    }
    let immagine = document.getElementById("immagine");
    if (giudizio === "Insufficiente") {
        immagine.src = "img/insufficiente.png";
        immagine.alt = "Semaforo rosso";
    }
    else if (giudizio === "Sufficiente") {
        immagine.src = "img/sufficiente.png";
        immagine.alt = "Semaforo giallo";
    }
    else if (giudizio === "Buono") {
        immagine.src = "img/buono.png";
        immagine.alt = "Semaforo verde";
    }
    else {
        immagine.src = "img/ottimo.png";
        immagine.alt = "Stella";
    }
    let elenco = document.getElementById("elenco");
    let nuovoLi = document.createElement("li");
    nuovoLi.textContent = nome + " - " + voto + " (" + giudizio + ")";
    nuovoLi.classList.add(classeCss);
    elenco.appendChild(nuovoLi);
}
//# sourceMappingURL=esVoti.js.map