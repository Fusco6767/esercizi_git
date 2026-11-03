let dispPanna: number = 5000;
let dispCioccolato: number = 5000;
let dispFragola: number = 5000;
let dispLimone: number = 5000;
let dispPistacchio: number = 5000;
let incassoTotale: number = 0;

function calcolaScontrino(): void {
    let messaggio: HTMLElement = document.getElementById("messaggio") as HTMLElement;
    let output: HTMLElement = document.getElementById("scontrino-output") as HTMLElement;
    let fine: HTMLElement = document.getElementById("sommario") as HTMLElement;
    
    messaggio.textContent = "";
    output.textContent = "";
    fine.textContent = "";

    let pallineTesto: string = (document.getElementById("palline") as HTMLInputElement).value.trim();
    let contenitoreElement: HTMLInputElement | null = document.querySelector('input[name="contenitore"]:checked') as HTMLInputElement | null;
    let gusto: string = (document.getElementById("gusto") as HTMLSelectElement).value;
    
    if (pallineTesto === "") {
        messaggio.textContent = "Inserisci il numero di palline";
        return;
    }

    let palline: number = Number(pallineTesto);
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

    let grammiNecessari: number = palline * 110;
    let disponibile: number = 0;
    
    switch (gusto) {
        case "Panna": disponibile = dispPanna; break;
        case "Cioccolato": disponibile = dispCioccolato; break;
        case "Fragola": disponibile = dispFragola; break;
        case "Limone": disponibile = dispLimone; break;
        case "Pistacchio": disponibile = dispPistacchio; break;
    }

    if (disponibile < grammiNecessari) {
        messaggio.textContent = "Gelato al " + gusto + " esaurito o insufficiente!";
        return;
    }

    switch (gusto) {
        case "Panna": dispPanna -= grammiNecessari; break;
        case "Cioccolato": dispCioccolato -= grammiNecessari; break;
        case "Fragola": dispFragola -= grammiNecessari; break;
        case "Limone": dispLimone -= grammiNecessari; break;
        case "Pistacchio": dispPistacchio -= grammiNecessari; break;
    }

    let costo: number = palline * 1.20;
    let contenitore: string = contenitoreElement.value;
    
    if (contenitore === "Coppetta") {
        costo += 0.20;
    } else {
        costo += 0.10;
    }

    let toppingsSelezionati: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="topping"]:checked');
    let numToppings: number = toppingsSelezionati.length;
    costo += numToppings * 0.50;

    incassoTotale += costo;

    output.textContent = "Scontrino: " + palline + " palline di " + gusto + " (" + contenitore + "). Totale: " + costo.toFixed(2) + " €";
}

function fineGiornata(): void {
    let sommario: HTMLElement = document.getElementById("sommario") as HTMLElement;
    let messaggio: HTMLElement = document.getElementById("messaggio") as HTMLElement;
    messaggio.textContent = "";
    
    let testo: string = "--- FINE GIORNATA ---\n";
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