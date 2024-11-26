let countdownElem = document.getElementById("countdown");
console.log(countdownElem);
const eventStart = 50;

// Bruker en for-løkke for å lage nedtellingen
for (let i = eventStart; i >= 0; i--) {
    // Sender verdien av `i` til `setTimeout` gjennom en lukking
    setTimeout(function () {
        countdownElem.innerHTML = i; // Oppdaterer HTML med gjeldende verdi av `i`
    }, (eventStart - i) * 1000); // Forsinkelse øker med 1 sekund for hver iterasjon
}
