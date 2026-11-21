"use strict";
let dimensioneGriglia = 0;
let posAsteroideRiga = 0;
let posAsteroideColonna = 0;
let contatoreTentativi = 0;
let partitaInCorso = false;
function avviaBattaglia() {
    let log = document.getElementById("log");
    let griglia = document.getElementById("griglia");
    let testoDim = document.getElementById("dimensione").value;
    dimensioneGriglia = Number(testoDim);
    if (Number.isNaN(dimensioneGriglia) || dimensioneGriglia < 2 || dimensioneGriglia > 10) {
        log.textContent = "Errore: Inserisci una dimensione valida (2-10).";
        return;
    }
    posAsteroideRiga = Math.floor(Math.random() * dimensioneGriglia);
    posAsteroideColonna = Math.floor(Math.random() * dimensioneGriglia);
    contatoreTentativi = 0;
    partitaInCorso = true;
    document.getElementById("tentativi").textContent = "Tentativi: 0";
    log.textContent = "Satelliti in orbita. Cerca l'asteroide!";
    griglia.innerHTML = "";
    griglia.style.gridTemplateColumns = `repeat(${dimensioneGriglia}, 50px)`;
    for (let i = 0; i < dimensioneGriglia; i++) {
        for (let j = 0; j < dimensioneGriglia; j++) {
            let cella = document.createElement("div");
            cella.className = "cella";
            cella.textContent = `(${i},${j})`;
            cella.onclick = function () { controllaCella(i, j, cella); };
            griglia.appendChild(cella);
        }
    }
}
function controllaCella(rigaCliccata, colonnaCliccata, cellaCliccata) {
    if (!partitaInCorso)
        return;
    let log = document.getElementById("log");
    contatoreTentativi++;
    document.getElementById("tentativi").textContent = "Tentativi: " + contatoreTentativi;
    if (rigaCliccata === posAsteroideRiga && colonnaCliccata === posAsteroideColonna) {
        log.textContent = `Boom! Asteroide distrutto in ${contatoreTentativi} tentativi.`;
        cellaCliccata.classList.add("asteroide-trovato");
        partitaInCorso = false;
    }
    else {
        let indizio = calcolaDirezione(rigaCliccata, colonnaCliccata);
        log.textContent = "Mira " + indizio + "!";
    }
}
function calcolaDirezione(rigaCliccata, colonnaCliccata) {
    let verticale = "";
    let orizzontale = "";
    if (rigaCliccata > posAsteroideRiga) {
        verticale = "a nord";
    }
    else if (rigaCliccata < posAsteroideRiga) {
        verticale = "a sud";
    }
    if (colonnaCliccata > posAsteroideColonna) {
        orizzontale = "ovest";
    }
    else if (colonnaCliccata < posAsteroideColonna) {
        orizzontale = "est";
    }
    if (verticale !== "" && orizzontale !== "") {
        return verticale + "-" + orizzontale;
    }
    else if (verticale !== "") {
        return verticale;
    }
    else {
        return orizzontale;
    }
}
function ricomincia() {
    document.getElementById("griglia").innerHTML = "";
    document.getElementById("log").textContent = "In attesa di coordinate...";
    document.getElementById("tentativi").textContent = "Tentativi: 0";
    document.getElementById("dimensione").value = "";
    partitaInCorso = false;
}
//# sourceMappingURL=es5.js.map