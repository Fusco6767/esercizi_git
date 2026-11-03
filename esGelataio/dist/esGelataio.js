"use strict";
let dispPanna = 5000;
let dispCioccolato = 5000;
let dispFragola = 5000;
let dispLimone = 5000;
let dispPistacchio = 5000;
let incassoTotale = 0;
function calcolaScontrino() {
    let messaggio = document.getElementById("messaggio");
    let output = document.getElementById("scontrino-output");
    let fine = document.getElementById("sommario");
    messaggio.textContent = "";
    output.textContent = "";
    fine.textContent = "";
    let pallineTesto = document.getElementById("palline").value.trim();
    let contenitoreElement = document.querySelector('input[name="contenitore"]:checked');
    let gusto = document.getElementById("gusto").value;
    if (pallineTesto === "") {
        messaggio.textContent = "Inserisci il numero di palline";
        return;
    }
    let palline = Number(pallineTesto);
    if (Number.isNaN(palline) || !Number.isInteger(palline) || palline < 1 || palline > 3) {
        messaggio.textContent = "Le palline devono essere un numero intero da 1 a 3";
        return;
    }
    if (contenitoreElement === null) {
        messaggio.textContent = "Scegli cono o coppetta";
        return;
    }
    if (gusto === "") {
        messaggio.textContent = "Scegli il gusto";
        return;
    }
    let grammiNecessari = palline * 110;
    let disponibile = 0;
    switch (gusto) {
        case "Panna":
            disponibile = dispPanna;
            break;
        case "Cioccolato":
            disponibile = dispCioccolato;
            break;
        case "Fragola":
            disponibile = dispFragola;
            break;
        case "Limone":
            disponibile = dispLimone;
            break;
        case "Pistacchio":
            disponibile = dispPistacchio;
            break;
    }
    if (disponibile < grammiNecessari) {
        messaggio.textContent = "Gelato al " + gusto + " esaurito o insufficiente!";
        return;
    }
    switch (gusto) {
        case "Panna":
            dispPanna -= grammiNecessari;
            break;
        case "Cioccolato":
            dispCioccolato -= grammiNecessari;
            break;
        case "Fragola":
            dispFragola -= grammiNecessari;
            break;
        case "Limone":
            dispLimone -= grammiNecessari;
            break;
        case "Pistacchio":
            dispPistacchio -= grammiNecessari;
            break;
    }
    let costo = palline * 1.20;
    let contenitore = contenitoreElement.value;
    if (contenitore === "Coppetta") {
        costo += 0.20;
    }
    else {
        costo += 0.10;
    }
    let toppingsSelezionati = document.querySelectorAll('input[name="topping"]:checked');
    let numToppings = toppingsSelezionati.length;
    costo += numToppings * 0.50;
    incassoTotale += costo;
    output.textContent = "Scontrino: " + palline + " palline di " + gusto + " (" + contenitore + "). Totale: " + costo.toFixed(2) + " €";
}
function fineGiornata() {
    let sommario = document.getElementById("sommario");
    let messaggio = document.getElementById("messaggio");
    messaggio.textContent = "";
    let testo = "--- FINE GIORNATA ---\n";
    testo += "Incasso totale: " + incassoTotale.toFixed(2) + " €\n\n";
    testo += "Gelato rimanente:\n";
    testo += "Panna: " + (dispPanna / 1000).toFixed(3) + " kg\n";
    testo += "Cioccolato: " + (dispCioccolato / 1000).toFixed(3) + " kg\n";
    testo += "Fragola: " + (dispFragola / 1000).toFixed(3) + " kg\n";
    testo += "Limone: " + (dispLimone / 1000).toFixed(3) + " kg\n";
    testo += "Pistacchio: " + (dispPistacchio / 1000).toFixed(3) + " kg\n";
    sommario.textContent = testo;
}
document.getElementById("btn-scontrino")?.addEventListener("click", calcolaScontrino);
document.getElementById("btn-fine")?.addEventListener("click", fineGiornata);
//# sourceMappingURL=esGelataio.js.map