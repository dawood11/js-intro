// **Tema: Functions med parametere**
// - Funksjoner med parametere lar deg sende data til funksjonen når den kalles.
// - Parametere fungerer som plassholdere for verdier som funksjonen trenger for å utføre oppgaven.
// - Dette gjør funksjoner mer fleksible og gjenbrukbare.
// - Når funksjonen kalles, må verdiene (argumenter) til parametrene sendes inn.

// Funksjon for å legge til et produkt på handlelisten
function addToShoppingList(product, amount) {
    // Henter handlelisten fra DOM (ul-listen med ID 'list')
    const ul_list = document.getElementById('list');

    // Oppdaterer handlelisten med et nytt produkt
    ul_list.innerHTML = `<li>${product}, ${amount} stk <button>x</button></li>`;
    // Merk: Vi bruker backticks (`) for å inkludere variablene direkte i HTML-strengen
}

// Funksjon for å hente verdier fra input-feltene og legge til produktet på handlelisten
function handleListe() {
    // Henter verdiene fra input-feltene
    const product = document.getElementById('product').value; // Produktnavn
    const amount = document.getElementById('amount').value; // Antall

    // Kaller funksjonen addToShoppingList med inputverdiene som argumenter
    addToShoppingList(product, amount);
}

// Enkel demonstrasjonsfunksjon for debugging
function demo() {
    console.log("Trigget!!!!!"); // Viser en melding i konsollen når demo-funksjonen kalles
}
