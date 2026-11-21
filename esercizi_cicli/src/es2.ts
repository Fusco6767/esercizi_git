let messaggio = document.getElementById("messaggio") as HTMLElement;
let output = document.getElementById("output") as HTMLElement;

function creaQuadrato(n: number): string {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            risultato += "* ";
        }
        risultato += "\n";
    }
    return risultato;
}

function creaContorno(n: number): string {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                risultato += "* ";
            } else {
                risultato += "  ";
            }
        }
        risultato += "\n";
    }
    return risultato;
}

function creaTriangolo(n: number): string {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            risultato += "* ";
        }
        risultato += "\n";
    }
    return risultato;
}

function creaLabirinto(n: number): string {
    let risultato = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                risultato += "* ";
            } else {
                risultato += "+ ";
            }
        }
        risultato += "\n";
    }
    return risultato;
}

function disegna(): void {
    messaggio.textContent = "";
    output.textContent = "";

    let n = Number((document.getElementById("n") as HTMLInputElement).value);
    let figura = (document.getElementById("figura") as HTMLSelectElement).value;

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

