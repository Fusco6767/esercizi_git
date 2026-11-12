"use strict";
let messaggio = document.getElementById("messaggio");
let contenitore = document.getElementById("contenitore-caselle");
let riepilogo = document.getElementById("riepilogo");
function generaFizzBuzz() {
    messaggio.textContent = "";
    contenitore.innerHTML = "";
    riepilogo.innerHTML = "";
    let input = document.getElementById("numero");
    let n = Number(input.value);
    if (Number.isNaN(n) || n < 1 || n > 100) {
        messaggio.textContent = "Errore: Inserisci un numero compreso tra 1 e 100.";
        return;
    }
    let contaFizz = 0;
    let contaBuzz = 0;
    let contaFizzBuzz = 0;
    for (let i = 1; i <= n; i++) {
        let casella = document.createElement("div");
        casella.classList.add("casella");
        if (i % 3 === 0 && i % 5 === 0) {
            casella.textContent = "FizzBuzz";
            casella.classList.add("verde");
            contaFizzBuzz++;
        }
        else if (i % 3 === 0) {
            casella.textContent = "Fizz";
            casella.classList.add("arancione");
            contaFizz++;
        }
        else if (i % 5 === 0) {
            casella.textContent = "Buzz";
            casella.classList.add("azzurra");
            contaBuzz++;
        }
        else {
            casella.textContent = String(i);
            casella.classList.add("grigia");
        }
        contenitore.appendChild(casella);
    }
    riepilogo.innerHTML = `Riepilogo: Fizz = <strong>${contaFizz}</strong> | Buzz = <strong>${contaBuzz}</strong> | FizzBuzz = <strong>${contaFizzBuzz}</strong>`;
}
document.getElementById("btn-genera")?.addEventListener("click", generaFizzBuzz);
//# sourceMappingURL=esFizz.js.map