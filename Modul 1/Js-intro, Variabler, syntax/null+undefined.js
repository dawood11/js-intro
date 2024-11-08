// Demonstrasjon av null og undefined i JavaScript

// En variabel som er eksplisitt satt til null
const a = null;
console.log(a); // Skriver ut 'null' til konsollen

// Skriver ut verdien 'undefined' direkte til konsollen
console.log(undefined); // Skriver ut 'undefined' til konsollen

// Forklaring:
// - 'null' representerer en bevisst tom verdi eller "ingen verdi".
// - 'undefined' betyr at en variabel er deklarert, men ikke har blitt tildelt en verdi.

// Eksempel på en variabel som er deklarert, men ikke initialisert
let b;
console.log(b); // Skriver ut 'undefined' til konsollen fordi b ikke har en verdi

// Sammenligning mellom null og undefined
console.log(a === null); // true, fordi 'a' er eksplisitt satt til null
console.log(b === undefined); // true, fordi 'b' ikke har en verdi

// Viser forskjellen med typeof
console.log("Type of a:", typeof a); // Skriver ut 'object', som er typen for null (en kjent særhet i JavaScript)
console.log("Type of b:", typeof b); // Skriver ut 'undefined', som er typen for en uinitialisert variabel
console.log("Type of undefined:", typeof undefined); // Skriver ut 'undefined'