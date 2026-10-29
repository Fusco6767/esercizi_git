"use strict";
let ultimoNome = "";
let postiLiberi = 6;
function registra() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();
    let specieInput = document.getElementById("specie");
    let specie = specieInput.value;
    let tagliaElement = document.querySelector('input[name="taglia"]:checked');
    let etaInput = document.getElementById("eta");
    let etaTesto = etaInput.value.trim();
    let vaccinatoInput = document.getElementById("vaccinato");
    let vaccinato = vaccinatoInput.checked;
    let messaggio = document.getElementById("messaggio");
    if (nome === "") {
        messaggio.textContent = "Inserisci il nome dell'animale";
        return;
    }
    if (nome.toLowerCase() === ultimoNome.toLowerCase() && ultimoNome !== "") {
        messaggio.textContent = nome + " è appena stata registrata";
        return;
    }
    if (specie === "") {
        messaggio.textContent = "Scegli la specie";
        return;
    }
    if (tagliaElement === null) {
        messaggio.textContent = "Scegli la taglia";
        return;
    }
    if (etaTesto === "") {
        messaggio.textContent = "L'età deve essere un numero intero da 0 a 20";
        return;
    }
    let eta = Number(etaTesto);
    if (Number.isNaN(eta) || !Number.isInteger(eta) || eta < 0 || eta > 20) {
        messaggio.textContent = "L'età deve essere un numero intero da 0 a 20";
        return;
    }
    messaggio.textContent = "";
    let fascia;
    if (eta <= 1) {
        fascia = "Cucciolo";
    }
    else if (eta <= 7) {
        fascia = "Adulto";
    }
    else {
        fascia = "Anziano";
    }
    let immagine = document.getElementById("immagine");
    switch (specie) {
        case "Cane":
            immagine.src = "img/cane.svg";
            immagine.alt = "Cane";
            break;
        case "Gatto":
            immagine.src = "img/gatto.svg";
            immagine.alt = "Gatto";
            break;
        case "Coniglio":
            immagine.src = "img/coniglio.svg";
            immagine.alt = "Coniglio";
            break;
    }
    let taglia = tagliaElement.value;
    let costo = 0;
    switch (taglia) {
        case "Piccola":
            costo = 40;
            break;
        case "Media":
            costo = 60;
            break;
        case "Grande":
            costo = 80;
            break;
    }
    if (fascia === "Anziano") {
        costo = costo / 2;
    }
    let riga = document.createElement("li");
    let testo = nome + " – " + specie + ", taglia " + taglia + " – " + eta + " anni (" + fascia + ") – " + costo + " € ";
    if (fascia === "Anziano" && !vaccinato) {
        testo = "URGENTE " + testo;
        riga.style.color = "red";
    }
    riga.textContent = testo;
    let link = document.createElement("a");
    link.textContent = "Chiedi info";
    link.href = "mailto:adozioni@canile.it?subject=" + encodeURIComponent("Informazioni su " + nome);
    riga.appendChild(link);
    if (vaccinato) {
        let elencoPronti = document.getElementById("elenco-pronti");
        elencoPronti.appendChild(riga);
    }
    else {
        let elencoAttesa = document.getElementById("elenco-attesa");
        elencoAttesa.appendChild(riga);
    }
    let cellaId = "";
    switch (specie) {
        case "Cane":
            cellaId = "conta-cane";
            break;
        case "Gatto":
            cellaId = "conta-gatto";
            break;
        case "Coniglio":
            cellaId = "conta-coniglio";
            break;
    }
    let cella = document.getElementById(cellaId);
    let conteggio = Number(cella.textContent);
    cella.textContent = String(conteggio + 1);
    let contaCane = Number(document.getElementById("conta-cane").textContent);
    let contaGatto = Number(document.getElementById("conta-gatto").textContent);
    let contaConiglio = Number(document.getElementById("conta-coniglio").textContent);
    let piuOspitata = document.getElementById("piu-ospitata");
    if (contaCane > contaGatto && contaCane > contaConiglio) {
        piuOspitata.textContent = "Specie più ospitata: Cane";
    }
    else if (contaGatto > contaCane && contaGatto > contaConiglio) {
        piuOspitata.textContent = "Specie più ospitata: Gatto";
    }
    else if (contaConiglio > contaCane && contaConiglio > contaGatto) {
        piuOspitata.textContent = "Specie più ospitata: Coniglio";
    }
    else {
        piuOspitata.textContent = "Nessuna specie prevale";
    }
    postiLiberi = postiLiberi - 1;
    let posti = document.getElementById("posti");
    if (postiLiberi === 0) {
        posti.textContent = "Canile al completo";
        let bottone = document.getElementById("registra");
        bottone.disabled = true;
    }
    else {
        posti.textContent = "Posti liberi: " + postiLiberi;
    }
    ultimoNome = nome;
    nomeInput.value = "";
    etaInput.value = "";
    vaccinatoInput.checked = false;
}
document.getElementById("btn-registra")?.addEventListener("click", registra);
//# sourceMappingURL=escanile.js.map