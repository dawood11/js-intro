// Introduksjon til JavaScript
// Dette er et eksempel som viser grunnleggende bruk av variabler, strenger, tall og kommentarer.

// En enkel variabel som inneholder en tekst (string)
let eventDescription = "Christmas 2024 @Gokstad Akademiet! :)";
console.log(eventDescription); // Skriver ut innholdet av variabelen til konsollen
console.log("Type of eventDescription:", typeof eventDescription); // Sjekker typen til variabelen

// Variabelen endrer type fra string til tall
let eventCode = 12345678;
console.log(eventCode); // Skriver ut tallet til konsollen
console.log("Type of eventCode:", typeof eventCode); // Sjekker typen til variabelen

// En variabel som representerer en boolsk verdi (true/false)
let isAdult = false;
console.log(isAdult); // Skriver ut "false" til konsollen
console.log("Type of isAdult:", typeof isAdult); // Sjekker typen til variabelen

// Endrer verdien til true
isAdult = true;
console.log(isAdult); // Skriver ut "true" til konsollen

// Konstant variabler som representerer tall
const num1 = 12;
const num2 = 14;

// Beregning av produktet av num1 og num2 (multiplisering)
const product = num1 * num2;
console.log("SUM:", product); // Skriver ut produktet med tekst foran
console.log("Type of product:", typeof product); // Sjekker typen til variabelen

// Alternativ måte å kombinere tekst og tall med strenger
console.log("SUM: " + product); // Samme som over, men bruker string-konkatenering

// Demonstrasjon av bruk av strenger og modifikasjon av variabler
// NB: Variabelen ble tidligere endret til et tall, så vi må være forsiktige.
console.log(eventCode + " AVLYST!"); // Legger til tekst til verdien av variabelen

// Forskjellen mellom const og let:
// - Variabler deklarert med 'const' kan ikke endres etter at de er tildelt en verdi.
// - Variabler deklarert med 'let' kan endres etter at de er tildelt en verdi.
// - 'const' brukes når verdien ikke skal endres, mens 'let' brukes når variabelens verdi kan endres.

// Eksempel:
const pi = 3.14; // pi kan ikke endres senere i koden
let radius = 5; // radius kan endres senere
radius = 10; // Endrer verdien av radius

console.log("Pi:", pi);
console.log("Radius:", radius);
console.log("Type of pi:", typeof pi); // Sjekker typen til pi
console.log("Type of radius:", typeof radius); // Sjekker typen til radius

// Kommentarer i JavaScript
// Enlinjekommentar: Forklarer en enkelt linje kode
/*
  Blokkkommentar: Brukes til å forklare flere linjer
  eller legge til notater om koden.
*/