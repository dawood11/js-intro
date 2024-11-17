// **Hvordan fungerer switch?**
// - Switch brukes til å sjekke verdien av en variabel mot flere mulige verdier (case).
// - Hvis en verdi samsvarer med en case, kjøres koden i den blokken.
// - Vi bruker `break` for å stoppe videre sjekking når en match er funnet.
// - Hvis ingen verdier samsvarer, kjører koden i `default`-blokken.
// - Dette er nyttig når du har flere alternativer å sjekke på en ryddig måte.

// Funksjon for å håndtere søk etter biler
function handleSearch() {
    // Henter verdien brukeren har skrevet i input-feltet
    const searchValue = document.getElementById("inputValue").value; // Input fra bruker
    let car = null; // Definerer variabelen som skal holde søkeresultatet

    // **Switch-forklaring:** 
    // Her sjekker vi hvilken bil brukeren søkte etter ved å sammenligne `searchValue` med flere case-alternativer.
    switch (searchValue) {
        case "Tesla": // Hvis søkeverdien er "Tesla"
            car = "Tesla Model 3"; // Vi lagrer bilmodellen i variabelen `car`
            break; // Stopper videre sjekking (referer til forklaringen om `break`)
        case "Mercedes": // Hvis søkeverdien er "Mercedes"
            car = "Mercedes Benz e350 de"; // Lagrer en annen modell i `car`
            break; // Stopper videre sjekking
        default: // Hvis ingen case matcher søkeverdien
            car = "Fant ikke bilen du søker etter..."; // Standardmelding
    }

    // **Hvordan bruke resultatet fra switch?**
    // Basert på verdien i `car`, viser vi en melding til brukeren.
    if (car === "Fant ikke bilen du søker etter...") {
        // Hvis ingen treff, viser vi standard feilmelding i HTML
        document.getElementById("car").innerHTML = car;
    } else {
        // Hvis det finnes et treff, viser vi detaljene om bilen
        const resultMsg = "Bilen du søkte etter ga treff på denne bilen: " + car;
        document.getElementById("car").innerHTML = resultMsg;
    }
}