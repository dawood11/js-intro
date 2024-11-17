// Funksjon for å registrere et personlig bilskilt
function handleRegister() {
    // **1. Henter input fra brukeren:**
    // Henter verdien fra et input-felt med ID "in-value" og konverterer det til store bokstaver.
    const inValue = document.getElementById("in-value").value.toUpperCase(); 

    // Henter elementet der resultatet skal vises (med ID "out-value").
    const outValue = document.getElementById("out-value");

    // **2. Sjekker om inputen er forskjellig fra eksisterende tekst:**
    // Sammenligner inputen fra brukeren (`inValue`) med den eksisterende teksten i `outValue`,
    // men gjør begge om til store bokstaver for å unngå forskjeller på grunn av case.
    if (inValue !== outValue.innerText.toUpperCase()) {
        // Hvis inputen ikke matcher, oppdaterer vi teksten i `outValue` til det nye skiltet.
        outValue.innerText = inValue;
    } else {
        // Hvis inputen allerede finnes, viser vi en feilmelding i et element med ID "error".
        document.getElementById("error").innerText = "Dette personlige bilskiltet eksisterer allerede...";
    }
}