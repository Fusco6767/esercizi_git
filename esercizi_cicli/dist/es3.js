"use strict";
function creaFloyd() {
    let avvisoFloyd = document.getElementById("avvisoFloyd");
    let risultatoFloyd = document.getElementById("risultatoFloyd");
    avvisoFloyd.textContent = "";
    risultatoFloyd.textContent = "";
    let quantitaRighe = Number(document.getElementById("righeFloyd").value);
    if (Number.isNaN(quantitaRighe) || !Number.isInteger(quantitaRighe) || quantitaRighe <= 0) {
        avvisoFloyd.textContent = "Errore: Inserisci un numero intero positivo.";
        return;
    }
    let disegnoFinale = "";
    let contatoreNumeri = 1;
    for (let rigaCorrente = 1; rigaCorrente <= quantitaRighe; rigaCorrente++) {
        for (let elementoRiga = 1; elementoRiga <= rigaCorrente; elementoRiga++) {
            disegnoFinale += contatoreNumeri + " ";
            contatoreNumeri++;
        }
        disegnoFinale += "\n";
    }
    risultatoFloyd.textContent = disegnoFinale;
}
//# sourceMappingURL=es3.js.map