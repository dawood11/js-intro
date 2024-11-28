// **Introduksjon til objekter**
// Et objekt i JavaScript er en samling av nøkkel-verdi-par (key-value pairs).
// Hver nøkkel (key) er unik, og hver verdi (value) kan være hvilken som helst datatype (string, number, array, etc.).

// Eksempel på et objekt:
// const person = {
//     name: 'Nina Einarsen', // Key: 'name', Value: 'Nina Einarsen'
//     age: 36               // Key: 'age', Value: 36
// };

// **Hovedkode: Registrer personer til lunsj**
// Vi bruker en array for å lagre alle påmeldte personer
const paameldteTilLunsj = []; // En tom liste som skal holde objekter med informasjon om påmeldte

// **Funksjon for å registrere en person**
function registerPerson() {
    // Oppretter et objekt for personen som registreres
    const person = {
        navn: document.getElementById('navn').value, // Nøkkel: 'navn', Verdi: input fra bruker
        allergi: document.getElementById('allergi').value // Nøkkel: 'allergi', Verdi: input fra bruker
    };

    // Legger objektet `person` inn i listen `paameldteTilLunsj`
    paameldteTilLunsj.push(person);

    // **Oppdaterer listen i HTML**
    const registeredList = document.getElementById('paameldte'); // Henter HTML-elementet som viser listen
    registeredList.innerHTML = ''; // Tømmer eksisterende liste for å unngå duplikater

    // Itererer gjennom alle påmeldte personer for å oppdatere listen i HTML
    for (personElement of paameldteTilLunsj) {
        // Legger til hver person som et `<li>`-element i listen
        registeredList.innerHTML += `<li>
            ${personElement.navn}, ${personElement.allergi} 
        </li>`;
    }
};