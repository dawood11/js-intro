// Eksempel på bruk av switch

// Definerer en variabel med en bestemt verdi
const command = "A";

// Switch-syntaks: Gir oss et alternativ til flere if-else if-setninger.
// Sjekker verdien av "command" og utfører koden i blokken til riktig case.
switch (command) {
    case "A": // Hvis "command" er lik "A"
        console.log("Alt i orden! A er godkjent."); // Tilpasset melding for "A"
        break; // break stopper utførelsen slik at vi ikke går videre til neste case
    case "B": // Hvis "command" er lik "B"
        console.log("Bra jobba! Du har valgt B.");
        break; // Stopper her hvis "command" var "B"
    case "C": // Hvis "command" er lik "C"
        console.log("C? Interessant valg. Godkjent!");
        break;
    case "D": // Hvis "command" er lik "D"
        console.log("D for dynamisk! Fin velgelse.");
        break;
    case "E": // Hvis "command" er lik "E"
        console.log("E er en utmerket karakter.");
        break;
    case "F": // Hvis "command" er lik "F"
        console.log("F... kanskje vi må jobbe litt mer her?");
        break;
    default: // Default kjøres hvis ingen av casene over samsvarer
        console.log("Error: ukjent kommando"); // Viser en feilmelding hvis ingen match
}

// Forklaring av hvordan switch fungerer:
// 1. switch (command): Sjekker verdien av variabelen "command".
// 2. case "A": Hvis verdien er "A", kjøres koden inni denne blokken.
// 3. break: Stopper videre utførelse i switch-setningen, slik at koden ikke går til neste case.
// 4. default: Hvis ingen case stemmer med verdien, kjøres default-blokken, som en "else".
//
// Hver case representerer en spesifikk situasjon, og vi bruker break etter hver case
// for å unngå at de neste casene også kjører. Uten break vil JavaScript gå videre til
// neste case selv om det allerede har funnet en match.
