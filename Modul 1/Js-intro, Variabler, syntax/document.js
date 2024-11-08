// Demonstrasjon av bruk av document, getElementById og innerHTML

// Ber brukeren om å skrive inn navnet sitt
const navn = prompt("Hva heter du?");

// Henter elementet med ID 'info' fra dokumentet
const infoElement = document.getElementById('info');

// Henter elementet med ID 'divTest' fra dokumentet (kan brukes til videre demonstrasjoner)
const divTest = document.getElementById('divTest');

// Skriver ut innholdet i elementet med ID 'info' til konsollen før det endres
console.log(infoElement.innerHTML);

// Endrer innholdet i elementet med ID 'info' for å vise en velkomstmelding med brukers navn
infoElement.innerHTML = "<h1 style='color:red'>Velkommen, " + navn + "</h1>";

// Forklaring:
// - document: Representerer hele HTML-dokumentet og gir tilgang til elementer i DOM.
// - getElementById: En metode for å hente et element basert på ID-attributtet.
// - innerHTML: Lar deg lese eller endre det HTML-innholdet som finnes inni et element.