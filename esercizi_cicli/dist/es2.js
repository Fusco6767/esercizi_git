"use strict";
let messaggio = document.getElementById("messaggio");
let output = document.getElementById("output");
function creaQuadrato(n) {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            risultato += "* ";
        }
        risultato += "\n";
    }
    return risultato;
}
function creaContorno(n) {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                risultato += "* ";
            }
            else {
                risultato += "  ";
            }
        }
        risultato += "\n";
    }
    return risultato;
}
function creaTriangolo(n) {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            risultato += "* ";
        }
        risultato += "\n";
    }
    return risultato;
}
function creaLabirinto(n) {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                risultato += "* ";
            }
            else {
                risultato += "+ ";
            }
        }
        risultato += "\n";
    }
    return risultato;
}
function disegna() {
    messaggio.textContent = "";
    output.textContent = "";
    let n = Number(document.getElementById("n").value);
    let figura = document.getElementById("figura").value;
    if (Number.isNaN(n) || !Number.isInteger(n) || n <= 0) {
        messaggio.textContent = "Errore: Inserisci un numero intero positivo.";
        return;
    }
    let risultato = "";
    switch (figura) {
        case "quadrato":
            risultato = creaQuadrato(n);
            break;
        case "contorno":
            risultato = creaContorno(n);
            break;
        case "triangolo":
            risultato = creaTriangolo(n);
            break;
        case "labirinto":
            risultato = creaLabirinto(n);
            break;
    }
    output.textContent = risultato;
}
//# sourceMappingURL=es2.js.map