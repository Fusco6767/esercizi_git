// Un parcheggio ha tariffa 2€ per la prima ora di sosta e 1€ per ogni ora successiva. Conoscendo l’orario di
//entrata e quello di uscita di un’autovettura (espressi in ore e minuti) emetti uno scontrino con l’ora di
//entrata, l’ora di uscita, la durata della sosta e il relativo costo.

export {};

let oraEntrata: number = Number(prompt("Ora di entrata (0-23):"));
let minEntrata: number = Number(prompt("Minuti di entrata (0-59):"));
let oraUscita: number = Number(prompt("Ora di uscita (0-23):"));
let minUscita: number = Number(prompt("Minuti di uscita (0-59):"));

let minutiEntrata: number = oraEntrata * 60 + minEntrata;
let minutiUscita: number = oraUscita * 60 + minUscita;

let durataMinuti: number = minutiUscita - minutiEntrata;

let oreSosta: number = Math.floor(durataMinuti / 60);
let minutiSosta: number = durataMinuti % 60;


let oreTariffa: number = Math.ceil(durataMinuti / 60);

let costo: number;
if (oreTariffa <= 1) {
  costo = 2;
} else {
  costo = 2 + (oreTariffa - 1) * 1;
}

console.log(" SCONTRINO PARCHEGGIO ");
console.log("Entrata: " + oraEntrata + ":" + String(minEntrata).padStart(2, "0"));
console.log("Uscita:  " + oraUscita + ":" + String(minUscita).padStart(2, "0"));
console.log("Durata:  " + oreSosta + "h " + minutiSosta + "min");
console.log("Costo:   " + costo + "€");
