"use strict";
function validaInput(testo, chiave) {
    let avviso = document.getElementById("errore");
    avviso.textContent = "";
    if (testo === "") {
        avviso.textContent = "Errore: Inserisci un messaggio.";
        return false;
    }
    if (Number.isNaN(chiave) || !Number.isInteger(chiave)) {
        avviso.textContent = "Errore: Lo spostamento deve essere un numero intero.";
        return false;
    }
    return true;
}
function cifra(testo, passo) {
    let stringaCifrata = "";
    passo = passo % 26;
    for (let i = 0; i < testo.length; i++) {
        let codice = testo.charCodeAt(i);
        if (codice >= 65 && codice <= 90) {
            stringaCifrata += String.fromCharCode((codice - 65 + passo) % 26 + 65);
        }
        else if (codice >= 97 && codice <= 122) {
            stringaCifrata += String.fromCharCode((codice - 97 + passo) % 26 + 97);
        }
        else {
            stringaCifrata += testo.charAt(i);
        }
    }
    return stringaCifrata;
}
function decifra(testo, passo) {
    let stringaDecifrata = "";
    passo = passo % 26;
    for (let i = 0; i < testo.length; i++) {
        let codice = testo.charCodeAt(i);
        if (codice >= 65 && codice <= 90) {
            stringaDecifrata += String.fromCharCode((codice - 65 - passo + 26) % 26 + 65);
        }
        else if (codice >= 97 && codice <= 122) {
            stringaDecifrata += String.fromCharCode((codice - 97 - passo + 26) % 26 + 97);
        }
        else {
            stringaDecifrata += testo.charAt(i);
        }
    }
    return stringaDecifrata;
}
function eseguiOperazione() {
    let testoInserito = document.getElementById("messaggio").value;
    let passo = Number(document.getElementById("spostamento").value);
    let azione = document.querySelector('input[name="azione"]:checked');
    let risultatoDiv = document.getElementById("risultato");
    risultatoDiv.textContent = "";
    if (validaInput(testoInserito, passo) === false) {
        return;
    }
    let testoFinale = "";
    if (azione.value === "cifra") {
        testoFinale = cifra(testoInserito, passo);
    }
    else {
        testoFinale = decifra(testoInserito, passo);
    }
    risultatoDiv.textContent = testoFinale;
}
//# sourceMappingURL=es4.js.map