// **1. click-event: Kjør en funksjon når en knapp klikkes**
// Henter knappen fra DOM ved hjelp av ID
const button = document.getElementById("clickButton");

// Legger til en event listener som lytter etter klikk på knappen
button.addEventListener("click", function () {
    // Når knappen klikkes, logges en melding til konsollen
    console.log("Knappen ble klikket!");
    // Viser en alert-melding til brukeren
    alert("Du klikket på knappen!");
});

// **2. mouseover-event: Når musen beveger seg over et element**
// Henter området som brukeren kan holde musen over
const hoverElement = document.getElementById("hoverArea");

// Legger til en event listener for når musen beveger seg over elementet
hoverElement.addEventListener("mouseover", function () {
    // Endrer bakgrunnsfargen til elementet når musen er over det
    hoverElement.style.backgroundColor = "lightblue";
    console.log("Musen er over området!");
});

// Legger til en event listener for når musen forlater elementet
hoverElement.addEventListener("mouseout", function () {
    // Tilbakestiller bakgrunnsfargen når musen forlater elementet
    hoverElement.style.backgroundColor = "";
    console.log("Musen forlot området!");
});

// **3. input-event: Oppdater tekst dynamisk når brukeren skriver**
// Henter input-feltet og elementet der teksten skal vises
const textInput = document.getElementById("textInput");
const outputText = document.getElementById("outputText");

// Legger til en event listener for input-feltet
textInput.addEventListener("input", function (event) {
    // Oppdaterer teksten i output-elementet til det brukeren skriver
    outputText.textContent = event.target.value;
    console.log("Input endret til:", event.target.value); // Logger verdien til konsollen
});

// **4. submit-event: Hindre standard oppførsel på et skjema**
// Henter skjemaet fra DOM
const form = document.getElementById("form");

// Legger til en event listener som lytter etter innsending av skjemaet
form.addEventListener("submit", function (event) {
    // Hindrer standard oppførsel (siden laster ikke inn på nytt)
    event.preventDefault();
    console.log("Skjema sendt!"); // Logger en melding til konsollen
    alert("Takk for at du sendte skjemaet!"); // Viser en bekreftelse til brukeren
});

// **5. change-event: Oppdag endringer i dropdown eller andre felt**
// Henter dropdown-menyen fra DOM
const selectElement = document.getElementById("dropdown");

// Legger til en event listener for når brukeren velger et nytt alternativ
selectElement.addEventListener("change", function (event) {
    // Logger det valgte alternativet til konsollen
    console.log("Valgt alternativ:", event.target.value);
});

// **6. keydown-event: Reager når en tast trykkes**
// Legger til en global event listener på dokumentet for å lytte etter tastetrykk
document.addEventListener("keydown", function (event) {
    // Logger hvilken tast brukeren trykket
    console.log("Tast trykket:", event.key);

    // Hvis brukeren trykker Enter-tasten, vis en melding
    if (event.key === "Enter") {
        alert("Du trykket Enter!");
    }
});
