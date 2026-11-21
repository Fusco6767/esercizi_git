function validaInput(testo: string, chiave: number): boolean {
    let avviso = document.getElementById("errore") as HTMLElement;
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

function cifra(testo: string, passo: number): string {
    let stringaCifrata = "";
    passo = passo % 26;

    for (let i = 0; i < testo.length; i++) {
        let codice = testo.charCodeAt(i);

        if (codice >= 65 && codice <= 90) {
            stringaCifrata += String.fromCharCode((codice - 65 + passo) % 26 + 65);
        } else if (codice >= 97 && codice <= 122) {
            stringaCifrata += String.fromCharCode((codice - 97 + passo) % 26 + 97);
        } else {
            stringaCifrata += testo.charAt(i);
        }
    }
    return stringaCifrata;
}

function decifra(testo: string, passo: number): string {
    let stringaDecifrata = "";
    passo = passo % 26;

    for (let i = 0; i < testo.length; i++) {
        let codice = testo.charCodeAt(i);

        if (codice >= 65 && codice <= 90) {
            stringaDecifrata += String.fromCharCode((codice - 65 - passo + 26) % 26 + 65);
        } else if (codice >= 97 && codice <= 122) {
            stringaDecifrata += String.fromCharCode((codice - 97 - passo + 26) % 26 + 97);
        } else {
            stringaDecifrata += testo.charAt(i);
        }
    }
    return stringaDecifrata;
}

function eseguiOperazione(): void {
    let testoInserito = (document.getElementById("messaggio") as HTMLInputElement).value;
    let passo = Number((document.getElementById("spostamento") as HTMLInputElement).value);
    let azione = document.querySelector('input[name="azione"]:checked') as HTMLInputElement;
    let risultatoDiv = document.getElementById("risultato") as HTMLElement;

    risultatoDiv.textContent = "";

    if (validaInput(testoInserito, passo) === false) {
        return;
    }

    let testoFinale = "";

    if (azione.value === "cifra") {
        testoFinale = cifra(testoInserito, passo);
    } else {
        testoFinale = decifra(testoInserito, passo);
    }

    risultatoDiv.textContent = testoFinale;
}