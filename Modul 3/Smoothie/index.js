// **Funksjon som lager smoothie**
// Denne funksjonen tar imot to parametere `f1` og `f2`, som representerer de to fruktene.
function lagSmoothie(f1, f2) {
    // Sjekker om smoothie-maskinen har strøm
    const maskinHarStrOm = true;

    if (maskinHarStrOm) {
        // Sjekker om begge fruktparametrene er gyldige
        if (f1 !== undefined && f2 !== undefined && f1 !== "" && f2 !== "") {
            console.log("Lager smoothie med:", f1, "og", f2); // Logger smoothie-innholdet
        } else {
            console.error("Ikke nok frukt!"); // Logger feilmelding hvis frukter mangler
        }
    } else {
        console.error("Maskinen har ikke strøm!"); // Logger feilmelding hvis maskinen ikke har strøm
    }
}

// Henter input fra brukeren
const frukt1 = prompt("Legg inn første frukt:"); // Brukeren skriver inn første frukt
const frukt2 = prompt("Legg inn andre frukt:"); // Brukeren skriver inn andre frukt

// Kaller funksjonen når siden lastes inn, og sender med fruktene som argumenter
window.onload = function () {
    lagSmoothie(frukt1, frukt2);
};