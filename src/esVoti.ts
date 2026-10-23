let contaInsufficiente: number = 0;
let contaSufficiente: number = 0;
let contaBuono: number = 0;
let contaOttimo: number = 0;

function registraVoto(): void {
    let nome: string = (document.getElementById("nome") as HTMLInputElement).value.trim();
    let votoTesto: string = (document.getElementById("voto") as HTMLInputElement).value.trim();
    let messaggio: HTMLElement = document.getElementById("messaggio") as HTMLElement;

    if (nome === "") {
        messaggio.innerHTML = "Inserisci il nome dell'alunno";
        return;
    }

    if (votoTesto === "") {
        messaggio.innerHTML = "Il voto deve essere un numero da 1 a 10";
        return;
    }

    let voto: number = Number(votoTesto);

    if (Number.isNaN(voto) || voto < 1 || voto > 10) {
        messaggio.innerHTML = "Il voto deve essere un numero da 1 a 10";
        return;
    }

    messaggio.innerHTML = "";

    let giudizio: string = "";
    let classeCss: string = "";

    if (voto <= 5) {
        giudizio = "Insufficiente";
        classeCss = "insufficiente";
        contaInsufficiente++;
    } else if (voto === 6) {
        giudizio = "Sufficiente";
        classeCss = "sufficiente";
        contaSufficiente++;
    } else if (voto === 7 || voto === 8) {
        giudizio = "Buono";
        classeCss = "buono";
        contaBuono++;
    } else {
        giudizio = "Ottimo";
        classeCss = "ottimo";
        contaOttimo++;
    }

    let immagine: HTMLImageElement = document.getElementById("immagine") as HTMLImageElement;
    
    if (giudizio === "Insufficiente") {
        immagine.src = "img/insufficiente.PNG";
        immagine.alt = "Semaforo rosso";
    } else if (giudizio === "Sufficiente") {
        immagine.src = "img/sufficiente.PNG";
        immagine.alt = "Semaforo giallo";
    } else if (giudizio === "Buono") {
        immagine.src = "img/buono.PNG";
        immagine.alt = "Semaforo verde";
    } else {
        immagine.src = "img/ottimo.PNG";
        immagine.alt = "Stella";
    }

    let elenco: HTMLElement = document.getElementById("elenco") as HTMLElement;
    let nuovoLi: HTMLElement = document.createElement("li");
    nuovoLi.textContent = nome + " - " + voto + " (" + giudizio + ")";
    nuovoLi.classList.add(classeCss);
    elenco.appendChild(nuovoLi);

    (document.getElementById("conta-insufficiente") as HTMLElement).textContent = String(contaInsufficiente);
    (document.getElementById("conta-sufficiente") as HTMLElement).textContent = String(contaSufficiente);
    (document.getElementById("conta-buono") as HTMLElement).textContent = String(contaBuono);
    (document.getElementById("conta-ottimo") as HTMLElement).textContent = String(contaOttimo);
}