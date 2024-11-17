// **Tema: parseInt og parseFloat**
// - Begge funksjonene brukes for å konvertere tekst (string) til tall i JavaScript.
// - `parseInt`: Konverterer tekst til et heltall (ignorerer desimaler).
// - `parseFloat`: Konverterer tekst til et desimaltall.
// - Begge returnerer `NaN` (Not a Number) hvis konvertering ikke er mulig.
// - Viktig å vite: All input fra brukeren (f.eks. via `prompt`) er strenger og må konverteres til tall for matematiske operasjoner.

// Eksempel: Konvertering og bruk av parseInt og parseFloat

// Ber brukeren om å skrive inn to tall som tekst
const userNumber1 = prompt("Skriv inn et heltall:"); // Input fra brukeren (streng)
const userNumber2 = prompt("Skriv inn et annet tall (desimal er lov):"); // Input fra brukeren (streng)

// Før konvertering: Sjekk hva typen er
console.log("Før konvertering:", userNumber1, typeof userNumber1); // Typen er string

// Konverterer tekst til tall
const num1 = parseInt(userNumber1); // Konverterer til heltall
const num2 = parseFloat(userNumber2); // Konverterer til desimaltall

// Etter konvertering: Logger verdiene og typene
console.log("Heltall (parseInt):", num1, typeof num1); // Forventet: et heltall (number)
console.log("Desimaltall (parseFloat):", num2, typeof num2); // Forventet: et desimaltall (number)

// Demonstrasjon: Hva skjer hvis vi legger til tall vs. tekst?
console.log("Tekst + tekst:", userNumber1 + userNumber2); // Strenger blir slått sammen (konkatenering)
console.log("Tall + tall (parseInt):", num1 + num1); // Numerisk addisjon (f.eks. 42 + 42)
console.log("Tall + tall (parseFloat):", num2 + num2); // Numerisk addisjon (f.eks. 3.14 + 3.14)

// Eksempel på NaN (Not a Number)
// isNaN sjekker om en verdi ikke er et tall
console.log("Er tom streng et tall? (isNaN):", isNaN("")); // true, tom streng gir NaN
console.log("Er '123abc' et gyldig tall? (isNaN):", isNaN("123abc")); // true, fordi "123abc" ikke er et gyldig tall
