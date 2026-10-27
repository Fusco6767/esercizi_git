type Giudizio = "Da evitare" | "Discreto" | "Bello" | "Imperdibile";

function registra(): void {
    let titolo: string = (document.getElementById("titolo") as HTMLInputElement).value.trim();
    let autore: string = (document.getElementById("autore") as HTMLInputElement).value.trim();
    let genere: string = (document.getElementById("genere") as HTMLSelectElement).value;
    let formatoElement = document.querySelector('input[name="formato"]:checked') as HTMLInputElement | null;
    let stelleTesto: string = (document.getElementById("stelle") as HTMLInputElement).value.trim();
    let consigliato: boolean = (document.getElementById("consigliato") as HTMLInputElement).checked;
    let messaggio: HTMLElement = document.getElementById("messaggio") as HTMLElement;

    if (titolo === "" || autore === "") {
        messaggio.innerHTML = "Inserisci titolo e autore";
        return;
    }

    if (genere === "") {
        messaggio.innerHTML = "Scegli il genere";
        return;
    }

    if (formatoElement === null) {
        messaggio.innerHTML = "Scegli il formato";
        return;
    }

    if (stelleTesto === "") {
        messaggio.innerHTML = "Il voto deve essere un numero intero da 1 a 5";
        return;
    }

    let stelle: number = Number(stelleTesto);
    if (Number.isNaN(stelle) || !Number.isInteger(stelle) || stelle < 1 || stelle > 5) {
        messaggio.innerHTML = "Il voto deve essere un numero intero da 1 a 5";
        return;
    }

    messaggio.innerHTML = "";

    let giudizio: Giudizio;
    if (stelle <= 2) {
        giudizio = "Da evitare";
    } else if (stelle === 3) {
        giudizio = "Discreto";
    } else if (stelle === 4) {
        giudizio = "Bello";
    } else {
        giudizio = "Imperdibile";
    }

    let immagine: HTMLImageElement = document.getElementById("immagine") as HTMLImageElement;
    switch (genere) {
        case "Avventura":
            immagine.src = "img/avventura.png";
            immagine.alt = "Avventura";
            break;
        case "Giallo":
            immagine.src = "img/giallo.png";
            immagine.alt = "Lente d'ingrandimento";
            break;
        case "Fantasy":
            immagine.src = "img/fantasy.png";
            immagine.alt = "Fantasy";
            break;
        case "Storico":
            immagine.src = "img/storico.png";
            immagine.alt = "Storico";
            break;
    }

    let elenco: HTMLElement = document.getElementById("elenco") as HTMLElement;
    let li: HTMLElement = document.createElement("li");
    let stelleString: string = "★".repeat(stelle);
    let formato: string = formatoElement.value;
    let testo: string = `${titolo} – ${autore} (${formato}) – ${stelleString} ${giudizio}`;
    if (consigliato) {
        testo += " – Consigliato";
    }
    li.textContent = testo;

    let link: HTMLAnchorElement = document.createElement("a");
    link.textContent = " Cerca";
    link.href = "https://www.google.com/search?q=" + encodeURIComponent(titolo + " " + autore);
    link.target = "_blank";
    li.appendChild(link);

    elenco.appendChild(li);

    let cellaId: string = "";
    switch (genere) {
        case "Avventura": cellaId = "conta-avventura"; break;
        case "Giallo": cellaId = "conta-giallo"; break;
        case "Fantasy": cellaId = "conta-fantasy"; break;
        case "Storico": cellaId = "conta-storico"; break;
    }
    let cella: HTMLElement = document.getElementById(cellaId) as HTMLElement;
    let conteggio: number = Number(cella.textContent);
    cella.textContent = String(conteggio + 1);

    (document.getElementById("titolo") as HTMLInputElement).value = "";
    (document.getElementById("autore") as HTMLInputElement).value = "";
}