function generaQuadratoMagico(): void {
    let avviso = document.getElementById("erroreScacchiera") as HTMLElement;
    let outputSomma = document.getElementById("totaleMagico") as HTMLElement;
    let valoreInserito = Number((document.getElementById("valoreN") as HTMLInputElement).value);

    avviso.textContent = "";
    outputSomma.textContent = "";

    if (Number.isNaN(valoreInserito) || !Number.isInteger(valoreInserito) || valoreInserito < 1 || valoreInserito > 10) {
        avviso.textContent = "Errore: Inserisci un numero intero compreso tra 1 e 10.";
        (document.getElementById("corpoTabella") as HTMLElement).innerHTML = "";
        return;
    }

    let sommaRisultato = costruisciScacchiera(valoreInserito);
    outputSomma.textContent = "Somma Magica: " + sommaRisultato;
}

function costruisciScacchiera(n: number): number {
    let corpoTabella = document.getElementById("corpoTabella") as HTMLElement;
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