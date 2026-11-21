let dimensioneGriglia: number = 0;
let posAsteroideRiga: number = 0;
let posAsteroideColonna: number = 0;
let contatoreTentativi: number = 0;
let partitaInCorso: boolean = false;

function avviaBattaglia(): void {
    let log = document.getElementById("log") as HTMLElement;
    let griglia = document.getElementById("griglia") as HTMLElement;
    let testoDim = (document.getElementById("dimensione") as HTMLInputElement).value;

    dimensioneGriglia = Number(testoDim);

    if (Number.isNaN(dimensioneGriglia) || dimensioneGriglia < 2 || dimensioneGriglia > 10) {
        log.textContent = "Errore: Inserisci una dimensione valida (2-10).";
        return;
    }

    posAsteroideRiga = Math.floor(Math.random() * dimensioneGriglia);
    posAsteroideColonna = Math.floor(Math.random() * dimensioneGriglia);
    
    contatoreTentativi = 0;
    partitaInCorso = true;

    (document.getElementById("tentativi") as HTMLElement).textContent = "Tentativi: 0";
    log.textContent = "Satelliti in orbita. Cerca l'asteroide!";

    griglia.innerHTML = "";
    griglia.style.gridTemplateColumns = `repeat(${dimensioneGriglia}, 50px)`;

    for (let i = 0; i < dimensioneGriglia; i++) {
        for (let j = 0; j < dimensioneGriglia; j++) {
            let cella = document.createElement("div");
            cella.className = "cella";
            cella.textContent = `(${i},${j})`;
            cella.onclick = function() { controllaCella(i, j, cella); };
            griglia.appendChild(cella);
        }
    }
}

function controllaCella(rigaCliccata: number, colonnaCliccata: number, cellaCliccata: HTMLElement): void {
    if (!partitaInCorso) return;

    let log = document.getElementById("log") as HTMLElement;
    contatoreTentativi++;
    (document.getElementById("tentativi") as HTMLElement).textContent = "Tentativi: " + contatoreTentativi;

    if (rigaCliccata === posAsteroideRiga && colonnaCliccata === posAsteroideColonna) {
        log.textContent = `Boom! Asteroide distrutto in ${contatoreTentativi} tentativi.`;
        cellaCliccata.classList.add("asteroide-trovato");
        partitaInCorso = false;
    } else {
        let indizio = calcolaDirezione(rigaCliccata, colonnaCliccata);
        log.textContent = "Mira " + indizio + "!";
    }
}

function calcolaDirezione(rigaCliccata: number, colonnaCliccata: number): string {
    let verticale = "";
    let orizzontale = "";

    if (rigaCliccata > posAsteroideRiga) {
        verticale = "a nord";
    } else if (rigaCliccata < posAsteroideRiga) {
        verticale = "a sud";
    }

    if (colonnaCliccata > posAsteroideColonna) {
        orizzontale = "ovest";
    } else if (colonnaCliccata < posAsteroideColonna) {
        orizzontale = "est";
    }

    if (verticale !== "" && orizzontale !== "") {
        return verticale + "-" + orizzontale;
    } else if (verticale !== "") {
        return verticale;
    } else {
        return orizzontale;
    }
}

function ricomincia(): void {
    (document.getElementById("griglia") as HTMLElement).innerHTML = "";
    (document.getElementById("log") as HTMLElement).textContent = "In attesa di coordinate...";
    (document.getElementById("tentativi") as HTMLElement).textContent = "Tentativi: 0";
    (document.getElementById("dimensione") as HTMLInputElement).value = "";
    partitaInCorso = false;
}