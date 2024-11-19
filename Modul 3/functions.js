// **Tema: Functions**
// - Funksjoner i JavaScript brukes for å organisere og gjenbruke kode.
// - De kan utføre en spesifikk oppgave og returnere en verdi (hvis ønskelig).
// - En funksjon kan kalles flere ganger, noe som gjør koden mer effektiv og enklere å vedlikeholde.
// - Funksjoner kan bruke både globale variabler og interne variabler definert inni funksjonen.

// Eksempel 1: Funksjon for å sjekke om en bruker er autentisert
let autheticated = false; // Global variabel som sporer innloggingsstatus

function isAuthenticated() {
    // Sjekker om brukeren er autentisert
    if (autheticated) {
        alert("Hei og velkommen til MANDAAAAAAAAAAAAAAH");
    } else {
        console.error("Logg inn!"); // Skriver feilmelding i konsollen
    }
}

// Kaller funksjonen før brukeren er autentisert
isAuthenticated(); // Output: Logg inn!

// Endrer status til autentisert og kaller funksjonen på nytt
autheticated = true;
isAuthenticated(); // Output: Hei og velkommen til MANDAAAAAAAAAAAAAAH

// Kaller funksjonen igjen (brukeren er fortsatt autentisert)
isAuthenticated(); // Output: Hei og velkommen til MANDAAAAAAAAAAAAAAH

//---------------------------------------------

// Eksempel 2: Funksjon som utfører addisjon
function addisjon() {
    // Definerer to lokale variabler for tallene som skal legges sammen
    const tall1 = 1;
    const tall2 = 8;

    // Utfører addisjon og lagrer resultatet i en variabel
    const addisjonSum = tall1 + tall2;

    // Returnerer resultatet til funksjonskalleren
    return addisjonSum;
}

// Kaller funksjonen direkte i konsollen
console.log(addisjon()); // Output: 9

// Lagrer resultatet av funksjonen i en variabel
const sum = addisjon();
console.log(sum); // Output: 9