
type Fascia = "Cucciolo" | "Adulto" | "Anziano";

let ultimoNome: string = "";
let postiLiberi: number = 6;

function registra(): void {
   

    let nomeInput: HTMLInputElement = document.getElementById("nome") as HTMLInputElement;
    let nome: string = nomeInput.value.trim();
    let specieInput: HTMLSelectElement = document.getElementById("specie") as HTMLSelectElement;
    let specie: string = specieInput.value;
    let tagliaElement: HTMLInputElement | null = document.querySelector('input[name="taglia"]:checked') as HTMLInputElement | null;
    let etaInput: HTMLInputElement = document.getElementById("eta") as HTMLInputElement;
    let etaTesto: string = etaInput.value.trim();
    let vaccinatoInput: HTMLInputElement = document.getElementById("vaccinato") as HTMLInputElement;
    let vaccinato: boolean = vaccinatoInput.checked;
    let messaggio: HTMLElement = document.getElementById("messaggio") as HTMLElement;

    if (nome === "") {
        messaggio.textContent = "Inserisci il nome dell'animale";
        return;
    }

    if (nome.toLowerCase() === ultimoNome.toLowerCase() && ultimoNome !== "") {
        messaggio.textContent = nome + " è appena stata registrata";
        return;
    }

    if (specie === "") {
        messaggio.textContent = "Scegli la specie";
        return;
    }

    if (tagliaElement === null) {
        messaggio.textContent = "Scegli la taglia";
        return;
    }

    if (etaTesto === "") {
        messaggio.textContent = "L'età deve essere un numero intero da 0 a 20";
        return;
    }

    let eta: number = Number(etaTesto);
    if (Number.isNaN(eta) || !Number.isInteger(eta) || eta < 0 || eta > 20) {
        messaggio.textContent = "L'età deve essere un numero intero da 0 a 20";
        return;
    }

    messaggio.textContent = "";

    let fascia: Fascia;
    if (eta <= 1) {
        fascia = "Cucciolo";
    } else if (eta <= 7) {
        fascia = "Adulto";
    } else {
        fascia = "Anziano";
    }

    let immagine: HTMLImageElement = document.getElementById("immagine") as HTMLImageElement;
    switch (specie) {
        case "Cane":
            immagine.src = "img/cane.svg";
            immagine.alt = "Cane";
            break;
        case "Gatto":
            immagine.src = "img/gatto.svg";
            immagine.alt = "Gatto";
            break;
        case "Coniglio":
            immagine.src = "img/coniglio.svg";
            immagine.alt = "Coniglio";
            break;
    }

    let taglia: string = tagliaElement.value;
    let costo: number = 0;
    switch (taglia) {
        case "Piccola": costo = 40; break;
        case "Media": costo = 60; break;
        case "Grande": costo = 80; break;
    }
    
    if (fascia === "Anziano") {
        costo = costo / 2;
    }

    let riga: HTMLElement = document.createElement("li");
    let testo: string = nome + " – " + specie + ", taglia " + taglia + " – " + eta + " anni (" + fascia + ") – " + costo + " € ";
    
    if (fascia === "Anziano" && !vaccinato) {
        testo = "URGENTE " + testo;
        riga.style.color = "red";
    }
    
    riga.textContent = testo;

    let link: HTMLAnchorElement = document.createElement("a");
    link.textContent = "Chiedi info";
    link.href = "mailto:adozioni@canile.it?subject=" + encodeURIComponent("Informazioni su " + nome);
    riga.appendChild(link);

    if (vaccinato) {
        let elencoPronti: HTMLElement = document.getElementById("elenco-pronti") as HTMLElement;
        elencoPronti.appendChild(riga);
    } else {
        let elencoAttesa: HTMLElement = document.getElementById("elenco-attesa") as HTMLElement;
        elencoAttesa.appendChild(riga);
    }

    let cellaId: string = "";
    switch (specie) {
        case "Cane": cellaId = "conta-cane"; break;
        case "Gatto": cellaId = "conta-gatto"; break;
        case "Coniglio": cellaId = "conta-coniglio"; break;
    }
    
    let cella: HTMLElement = document.getElementById(cellaId) as HTMLElement;
    let conteggio: number = Number(cella.textContent);
    cella.textContent = String(conteggio + 1);

    let contaCane: number = Number((document.getElementById("conta-cane") as HTMLElement).textContent);
    let contaGatto: number = Number((document.getElementById("conta-gatto") as HTMLElement).textContent);
    let contaConiglio: number = Number((document.getElementById("conta-coniglio") as HTMLElement).textContent);
    let piuOspitata: HTMLElement = document.getElementById("piu-ospitata") as HTMLElement;

    if (contaCane > contaGatto && contaCane > contaConiglio) {
        piuOspitata.textContent = "Specie più ospitata: Cane";
    } else if (contaGatto > contaCane && contaGatto > contaConiglio) {
        piuOspitata.textContent = "Specie più ospitata: Gatto";
    } else if (contaConiglio > contaCane && contaConiglio > contaGatto) {
        piuOspitata.textContent = "Specie più ospitata: Coniglio";
    } else {
        piuOspitata.textContent = "Nessuna specie prevale";
    }

    postiLiberi = postiLiberi - 1;
    let posti: HTMLElement = document.getElementById("posti") as HTMLElement;
    
    if (postiLiberi === 0) {
        posti.textContent = "Canile al completo";
        let bottone: HTMLButtonElement = document.getElementById("registra") as HTMLButtonElement;
        bottone.disabled = true;
    } else {
        posti.textContent = "Posti liberi: " + postiLiberi;
    }

    ultimoNome = nome;
    nomeInput.value = "";
    etaInput.value = "";
    vaccinatoInput.checked = false;
}

document.getElementById("btn-registra")?.addEventListener("click", registra);