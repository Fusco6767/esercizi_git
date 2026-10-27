"use strict";
function registra() {
    let titolo = document.getElementById("titolo").value.trim();
    let autore = document.getElementById("autore").value.trim();
    let genere = document.getElementById("genere").value;
    let formatoElement = document.querySelector('input[name="formato"]:checked');
    let stelleTesto = document.getElementById("stelle").value.trim();
    let consigliato = document.getElementById("consigliato").checked;
    let messaggio = document.getElementById("messaggio");
    if (titolo === "" || autore === "") {
        messaggio.innerHTML = "Inserisci titolo e autore";
        return;
    }
    if (genere === "") {
        messaggio.innerHTML = "Scegli il genere";
        return;
    }
    if (formatoElement === null) {
        messaggio.innerHTML = "Scegli il formato";
        return;
    }
    if (stelleTesto === "") {
        messaggio.innerHTML = "Il voto deve essere un numero intero da 1 a 5";
        return;
    }
    let stelle = Number(stelleTesto);
    if (Number.isNaN(stelle) || !Number.isInteger(stelle) || stelle < 1 || stelle > 5) {
        messaggio.innerHTML = "Il voto deve essere un numero intero da 1 a 5";
        return;
    }
    messaggio.innerHTML = "";
    let giudizio;
    if (stelle <= 2) {
        giudizio = "Da evitare";
    }
    else if (stelle === 3) {
        giudizio = "Discreto";
    }
    else if (stelle === 4) {
        giudizio = "Bello";
    }
    else {
        giudizio = "Imperdibile";
    }
    let immagine = document.getElementById("immagine");
    switch (genere) {
        case "Avventura":
            immagine.src = "img/avventura.svg";
            immagine.alt = "Avventura";
            break;
        case "Giallo":
            immagine.src = "img/giallo.svg";
            immagine.alt = "Lente d'ingrandimento";
            break;
        case "Fantasy":
            immagine.src = "img/fantasy.svg";
            immagine.alt = "Fantasy";
            break;
        case "Storico":
            immagine.src = "img/storico.svg";
            immagine.alt = "Storico";
            break;
    }
    let elenco = document.getElementById("elenco");
    let li = document.createElement("li");
    let stelleString = "★".repeat(stelle);
    let formato = formatoElement.value;
    let testo = `${titolo} – ${autore} (${formato}) – ${stelleString} ${giudizio}`;
    if (consigliato) {
        testo += " – Consigliato";
    }
    li.textContent = testo;
    let link = document.createElement("a");
    link.textContent = " Cerca";
    link.href = "https://www.google.com/search?q=" + encodeURIComponent(titolo + " " + autore);
    link.target = "_blank";
    li.appendChild(link);
    elenco.appendChild(li);
    let cellaId = "";
    switch (genere) {
        case "Avventura":
            cellaId = "conta-avventura";
            break;
        case "Giallo":
            cellaId = "conta-giallo";
            break;
        case "Fantasy":
            cellaId = "conta-fantasy";
            break;
        case "Storico":
            cellaId = "conta-storico";
            break;
    }
    let cella = document.getElementById(cellaId);
    let conteggio = Number(cella.textContent);
    cella.textContent = String(conteggio + 1);
    document.getElementById("titolo").value = "";
    document.getElementById("autore").value = "";
}
//# sourceMappingURL=esDiario.js.map