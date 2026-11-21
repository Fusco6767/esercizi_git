"use strict";
function generaQuadratoMagico() {
    let avviso = document.getElementById("erroreScacchiera");
    let outputSomma = document.getElementById("totaleMagico");
    let valoreInserito = Number(document.getElementById("valoreN").value);
    avviso.textContent = "";
    outputSomma.textContent = "";
    if (Number.isNaN(valoreInserito) || !Number.isInteger(valoreInserito) || valoreInserito < 1 || valoreInserito > 10) {
        avviso.textContent = "Errore: Inserisci un numero intero compreso tra 1 e 10.";
        document.getElementById("corpoTabella").innerHTML = "";
        return;
    }
    let sommaRisultato = costruisciScacchiera(valoreInserito);
    outputSomma.textContent = "Somma Magica: " + sommaRisultato;
}
function costruisciScacchiera(n) {
    let corpoTabella = document.getElementById("corpoTabella");
    corpoTabella.innerHTML = "";
    let accumulatoreSomma = 0;
    for (let riga = 1; riga <= n; riga++) {
        let tr = document.createElement("tr");
        for (let colonna = 1; colonna <= n; colonna++) {
            let td = document.createElement("td");
            let valoreProdotto = riga * colonna;
            td.textContent = String(valoreProdotto);
            tr.appendChild(td);
            accumulatoreSomma += valoreProdotto;
        }
        corpoTabella.appendChild(tr);
    }
    return accumulatoreSomma;
}
//# sourceMappingURL=es1.js.map