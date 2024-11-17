// **Tema: toUpperCase() og toLowerCase()**
// - `toUpperCase()`: Gjør alle bokstavene i en streng om til store bokstaver.
// - `toLowerCase()`: Gjør alle bokstavene i en streng om til små bokstaver.
// - Disse metodene påvirker ikke den opprinnelige verdien av strengen, men returnerer en ny streng med endringen.
// - Brukes ofte for å standardisere tekst, som ved søk eller sammenligninger.

const nameValue = "Bertil";

// Eksempel 1: Grunnleggende bruk av toLowerCase og toUpperCase
console.log("Original:", nameValue);
console.log("Små bokstaver:", nameValue.toLowerCase()); // bertil
console.log("Store bokstaver:", nameValue.toUpperCase()); // BERTIL

// Eksempel 2: Standardisering av brukerinput
const userInput = "HeI hANsEn"; // Bruker skriver tekst med ulik bokstavstørrelse
const standardizedInput = userInput.toLowerCase();
console.log("Standardisert input:", standardizedInput); // hei hansen

// Eksempel 3: Sammenligne strenger uavhengig av bokstavstørrelse
const input1 = "JavaScript";
const input2 = "javascript";

if (input1.toLowerCase() === input2.toLowerCase()) {
    console.log("Inputene er like (case-insensitive)."); // Denne linjen kjører
} else {
    console.log("Inputene er forskjellige.");
}

// Eksempel 4: Kombinere toLowerCase/toUpperCase med andre metoder
const mixedText = "  VelKoMMen tiL Kodeverden!  ";
const cleanedText = mixedText.trim().toUpperCase();
console.log("Trimmet og store bokstaver:", cleanedText); // "VELKOMMEN TIL KODEVERDEN!"

// Eksempel 5: Bruk i en funksjon for å formatere tekst
function formatName(name) {
    // Gjør alle bokstaver små, men gjør første bokstav stor
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log("Formatert navn:", formatName("eLISe")); // Elise
console.log("Formatert navn:", formatName("hANSen")); // Hansen

// Eksempel 6: Validering av e-post (case-insensitive sammenligning)
const emailInput = "Bruker@DOMENe.NO";
const storedEmail = "bruker@domene.no";

if (emailInput.toLowerCase() === storedEmail.toLowerCase()) {
    console.log("E-postadressene samsvarer."); // Denne linjen kjører
} else {
    console.log("E-postadressene samsvarer ikke.");
}
