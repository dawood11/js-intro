// Eksempel på if, else og else if

// Vi starter med å definere to tall og sammenligner dem
const tall1 = 1;
const tall2 = 4;

// if-statement sjekker om tallene er like
if (tall1 === tall2) {
    // Hvis betingelsen over er sann, vil denne koden kjøre
    console.log("Ja, det er faktisk sant. 1 er faktisk lik 4! No shit!");
} else {
    // Hvis betingelsen er falsk (altså at tallene ikke er like), kjører koden her
    console.log("Ey!!! 1 er IKKE lik 4");
}

// Vi definerer to navn
const fullname1 = "Elon Musk";
const fullname2 = "Donald Trumps";

// if-statement sjekker om fullname1 er "Elon Muskan"
if (fullname1 === "Elon Muskan") {
    console.log("Jeg fant, jeg fant...!!");
} 
// Hvis ikke første betingelsen er sann, sjekker vi denne betingelsen med else if
else if (fullname2 === "Donald Trumps") {
    console.log("Fant influencer presidenten!");
} 
// Hvis ingen av betingelsene over er sanne, kjører else-blokken
else {
    console.log("Dessverre, ingen som heter det der....");
}

// Kombinere betingelser med || (OR / ELLER)
// Dette sjekker om minst én av betingelsene er sann
if ((fullname1 !== "Elon Muskan") || (fullname2 === "Donald Trumps")) {
    console.log("Fant en av de to rakkerne! X = Fake news!");
}
// Her vil koden kjøre fordi fullname2 er lik "Donald Trumps", som gjør uttrykket sant.

console.log("All done!!"); // Utskrift til slutt for å indikere at koden er ferdig


// Realistisk scenario: Login-sjekk med brukernavn og passord
const brukernavn = "dahmad";
const password = "12345678";

// Definerer en variabel som starter som false, fordi brukeren ikke er logget inn
let brukerLoggetInn = false;

// Sjekker om både brukernavn og passord er korrekte
if (brukernavn === "dahmad" && password === "12345678") {
    // Hvis både brukernavn og passord er riktige, settes brukerLoggetInn til true
    brukerLoggetInn = true;
}

// Her sjekker vi om brukeren er logget inn basert på om brukerLoggetInn er true
if (brukerLoggetInn === true) {
    alert("Bruker logget inn..."); // Viser en melding om at brukeren er logget inn
} else {
    alert("Feil brukernavn eller passord"); // Viser en melding hvis innlogging mislykkes
}