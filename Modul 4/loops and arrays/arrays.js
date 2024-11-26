// **Eksempel 1: Opprette en array**
// En array er en samling av verdier. I dette eksempelet lagrer vi en liste med frukt.
const fruits = ['pære', 'eple', 'banan', 'klementiner'];

// **Skrive ut hele arrayen**
console.log(fruits); // Output: ['pære', 'eple', 'banan', 'klementiner']

// **Skrive ut individuelle elementer i arrayen**
console.log(fruits[0]); // Output: 'pære' (første element i arrayen)
// Husk: Array-indekser starter alltid på 0
console.log(fruits[2]); // Output: 'banan' (tredje element i arrayen)

// **Skrive ut lengden av arrayen**
console.log(fruits.length); // Output: 4 (antall elementer i arrayen)

// **Skrive ut det siste elementet i arrayen**
console.log(fruits[fruits.length - 1]); // Output: 'klementiner'
// `fruits.length - 1` gir oss indeksen til det siste elementet

// **Hva skjer hvis vi prøver å få tilgang til en indeks utenfor rekkevidde?**
console.log(fruits[fruits.length]); // Output: undefined (det er ingen verdi her)

// **Legge til elementer i HTML ved hjelp av en `for`-løkke**
// Vi antar at det finnes et HTML-element med ID "frukt"
const fruktTag = document.getElementById("frukt"); // Henter elementet med ID 'frukt'
console.log(fruktTag); // Sjekker at vi har fått elementet

// Gå gjennom alle elementene i arrayen og legg dem til som `<li>` i HTML
for (let i = 0; i < fruits.length; i++) {
    fruktTag.innerHTML += "<li>" + fruits[i] + "</li>";
}

// **Eksempel 2: Velge en matrett**
// En ny array som inneholder forskjellige matretter
const matretter = ['Fiskeboller hvitsaus', 'Torskerogn', 'Pizza', 'Hamburger', 'Thai suppe'];

// **Skrive ut en spesifikk matrett**
console.log(matretter[2]); // Output: 'Pizza' (tredje matrett)

// Anta at det finnes et HTML-element med ID 'matrett'
const matrett = document.getElementById("matrett");

// **La brukeren velge en matrett**
let matrettAlternativ = parseInt(prompt("Hvilken matrett ønsker du? (1-5)")); // Be brukeren velge en matrett
let gyldigAlternativ = false; // Sjekker om brukeren skrev inn et gyldig alternativ

while (!gyldigAlternativ) {
    if (isNaN(matrettAlternativ)) {
        // Hvis brukeren skrev inn noe som ikke er et tall
        alert("1. Du tastet inn et ugyldig alternativ. Prøv igjen!");
        matrettAlternativ = parseInt(prompt("Hvilken matrett ønsker du? (1-5)"));
    } else {
        // Sjekker om brukeren skrev inn et tall som er utenfor gyldig område
        if (matrettAlternativ > matretter.length || matrettAlternativ < 1) {
            alert("2. Du tastet inn et ugyldig alternativ. Prøv igjen!");
            matrettAlternativ = parseInt(prompt("Hvilken matrett ønsker du? (1-5)"));
        } else {
            // Hvis valget er gyldig
            gyldigAlternativ = true; // Oppdaterer at vi fikk et gyldig valg
            matrett.innerText = matretter[matrettAlternativ - 1]; // Oppdaterer HTML med valgt matrett
        }
    }
}

// **Eksempel 3: Legge til et nytt element i en array**
fruits.push('appelsin'); // Legger til 'appelsin' på slutten av arrayen
console.log(fruits); // Output: ['pære', 'eple', 'banan', 'klementiner', 'appelsin']

// **Eksempel 4: Fjerne det siste elementet i en array**
fruits.pop(); // Fjerner det siste elementet ('appelsin')
console.log(fruits); // Output: ['pære', 'eple', 'banan', 'klementiner']

// **Eksempel 5: Gå gjennom arrayen med `for of`**
for (const fruit of fruits) {
    console.log(fruit); // Skriver ut hvert element i arrayen
}

// **Eksempel 6: Sjekke om en verdi finnes i en array**
if (fruits.includes('eple')) {
    console.log('Eple finnes i listen!'); // Output: 'Eple finnes i listen!'
} else {
    console.log('Eple finnes ikke i listen.');
}