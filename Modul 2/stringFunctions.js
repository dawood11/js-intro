// **Tema: String-funksjoner**
// - String-funksjoner i JavaScript brukes til å manipulere og analysere tekst.
// - Vanlige funksjoner inkluderer:
//   - `replace()`: Erstatt en del av en streng med noe annet.
//   - `length`: Gir lengden på strengen.
//   - `charAt()`: Henter en spesifikk bokstav basert på posisjon.
//   - `substring()` og `slice()`: Henter en del av en streng.
//   - `split()`: Deler opp en streng i en liste basert på et skille.

// Grunnleggende eksempel på `replace`
const str = "Don't talk to me!";
let replaced = str.replace("t", "d"); // Erstatter første "t" med "d"
console.log("Erstattet streng:", replaced); // "Don'd talk to me!"

// Hent siste bokstav i strengen (lengde minus 1 fordi posisjoner starter på 0)
const lastChar = str[str.length - 1];
console.log("Siste bokstav:", lastChar); // "!"

// Lengden på strengen
console.log("Lengde på strengen:", str.length); // 17

// Eksempel 1: Erstatt alle forekomster av en bokstav
const replacedAll = str.replace(/t/g, "d"); // Bruker regex (/t/g) for å erstatte alle "t"
console.log("Erstatt alle 't' med 'd':", replacedAll); // "Don'd dalk do me!"

// Eksempel 2: Hente en del av strengen med `substring`
const subStr = str.substring(6, 10); // Henter tegn fra posisjon 6 til 9 (ikke inkludert 10)
console.log("Del av strengen (substring):", subStr); // "talk"

// Eksempel 3: Deler opp en streng med `split`
const sentence = "JavaScript er morsomt!";
const words = sentence.split(" "); // Deler opp på mellomrom
console.log("Liste av ord:", words); // ["JavaScript", "er", "morsomt!"]

// Eksempel 4: Sjekker om strengen inneholder et ord
const containsWord = sentence.includes("morsomt");
console.log("Inneholder ordet 'morsomt':", containsWord); // true

// Eksempel 5: Trim whitespace fra starten og slutten
const messyString = "   Dette er en rotete streng!   ";
const cleanedString = messyString.trim(); // Fjerner mellomrom i starten og slutten
console.log("Trimmet streng:", cleanedString); // "Dette er en rotete streng!"

// Eksempel 6: Kombinasjon av funksjoner
const input = "frontend utvikling med JavaScript";
const result = input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log("Formater tekst:", result); // "Frontend Utvikling Med JavaScript"
