// Un parcheggio ha tariffa 2€ per la prima ora di sosta e 1€ per ogni ora successiva. Conoscendo l’orario di
//entrata e quello di uscita di un’autovettura (espressi in ore e minuti) emetti uno scontrino con l’ora di
//entrata, l’ora di uscita, la durata della sosta e il relativo costo.
export {};
let oraEntrata = Number(prompt("Ora di entrata (0-23):"));
let minEntrata = Number(prompt("Minuti di entrata (0-59):"));
let oraUscita = Number(prompt("Ora di uscita (0-23):"));
let minUscita = Number(prompt("Minuti di uscita (0-59):"));
let minutiEntrata = oraEntrata * 60 + minEntrata;
let minutiUscita = oraUscita * 60 + minUscita;
let durataMinuti = minutiUscita - minutiEntrata;
let oreSosta = Math.floor(durataMinuti / 60);
let minutiSosta = durataMinuti % 60;
let oreTariffa = Math.ceil(durataMinuti / 60);
let costo;
if (oreTariffa <= 1) {
    costo = 2;
}
else {
    costo = 2 + (oreTariffa - 1) * 1;
}
console.log(" SCONTRINO PARCHEGGIO ");
console.log("Entrata: " + oraEntrata + ":" + String(minEntrata).padStart(2, "0"));
console.log("Uscita:  " + oraUscita + ":" + String(minUscita).padStart(2, "0"));
console.log("Durata:  " + oreSosta + "h " + minutiSosta + "min");
console.log("Costo:   " + costo + "€");
//# sourceMappingURL=es11.js.map