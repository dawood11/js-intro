// **Eksempel 1: Sjekk navn til det er riktig**
// Vi har en variabel som holder navnet vi leter etter
const navn = 'Bertil';
// En annen variabel som holder tilstanden: Er navnet korrekt?
let nameIsCorrect = false;

// Starter en while-løkke som kjører så lenge `nameIsCorrect` er `false`
while (nameIsCorrect === false) {
    // Sjekker om `navn` er lik "Bertil"
    if (navn === 'Bertil') {
        console.log('Du heter fortsatt Bertil'); // Skriver ut en bekreftelse
    }
    break; // Stopper løkken etter én iterasjon
    // Merk: Vi bruker `break` her for å unngå at løkken kjører evig
}

// **Eksempel 2: Teller med betingelse**
// Vi starter med en teller som holder styr på antall iterasjoner
let counter = 0;

// Løkken kjører så lenge `counter` er mindre enn 100
while (counter < 100) {
    // Sjekker om navnet er "Bertil"
    if (navn === 'Bertil') {
        console.log('Fant deg!'); // Hvis navnet er riktig, skriver vi ut meldingen
        break; // Avslutter løkken siden vi fant det vi lette etter
    }
    counter++; // Øker telleren med 1 i hver iterasjon
    // Dette sikrer at løkken avsluttes når `counter` når 100, selv om vi ikke finner "Bertil"
}

// **Eksempel 3: Brukerinput med maks forsøk**
// Vi simulerer en innloggingsfunksjon der brukeren må skrive inn riktig navn
let attempts = 0; // Teller antall forsøk brukeren har gjort
const maxAttempts = 5; // Maks antall forsøk brukeren har før løkken stopper
let input = ""; // Variabel som holder brukerens input

// Løkken kjører så lenge brukeren ikke skriver "Bertil" og ikke har overskredet maks antall forsøk
while (input !== "Bertil" && attempts < maxAttempts) {
    // Spør brukeren om å skrive inn navnet sitt
    input = prompt("Hva er navnet ditt?");
    attempts++; // Øker antall forsøk med 1

    // Hvis brukeren skriver "Bertil"
    if (input === "Bertil") {
        console.log("Velkommen, Bertil!"); // Ønsker velkommen og avslutter løkken
    } 
    // Hvis brukeren har nådd maks antall forsøk
    else if (attempts === maxAttempts) {
        console.log("For mange forsøk. Prøv igjen senere."); // Informer brukeren
    } 
    // Hvis brukeren skriver feil navn, men fortsatt har forsøk igjen
    else {
        console.log("Feil navn, prøv igjen."); // Oppfordrer brukeren til å prøve igjen
    }
}
