// **Eksempel 1: .push()**
// Brukes for å legge til et nytt element på slutten av en array
const fruits = ['eple', 'banan', 'pære'];
console.log('Før .push:', fruits); // Output: ['eple', 'banan', 'pære']

fruits.push('klementin'); // Legger til 'klementin' på slutten
console.log('Etter .push:', fruits); // Output: ['eple', 'banan', 'pære', 'klementin']

// **Eksempel 2: .pop()**
// Fjerner det siste elementet fra en array
const lastFruit = fruits.pop(); // Fjerner 'klementin' og lagrer det i `lastFruit`
console.log('Etter .pop:', fruits); // Output: ['eple', 'banan', 'pære']
console.log('Fjernet element:', lastFruit); // Output: 'klementin'

// **Eksempel 3: .shift()**
// Fjerner det første elementet i arrayen
const firstFruit = fruits.shift(); // Fjerner 'eple' og lagrer det i `firstFruit`
console.log('Etter .shift:', fruits); // Output: ['banan', 'pære']
console.log('Fjernet element:', firstFruit); // Output: 'eple'

// **Eksempel 4: .unshift()**
// Legger til ett eller flere elementer foran i arrayen
fruits.unshift('jordbær', 'mango'); // Legger til 'jordbær' og 'mango' foran
console.log('Etter .unshift:', fruits); // Output: ['jordbær', 'mango', 'banan', 'pære']

// **Eksempel 5: .splice()**
// Legger til, fjerner eller erstatter elementer i arrayen
// Fjerne 1 element fra indeks 1 (fjerner 'mango')
const removed = fruits.splice(1, 1);
console.log('Etter .splice:', fruits); // Output: ['jordbær', 'banan', 'pære']
console.log('Fjernet element:', removed); // Output: ['mango']

// Legge til et nytt element på indeks 1
fruits.splice(1, 0, 'kiwi'); // Setter inn 'kiwi' på indeks 1
console.log('Etter å ha lagt til med .splice:', fruits); // Output: ['jordbær', 'kiwi', 'banan', 'pære']

// **Eksempel 6: .slice()**
// Kopierer deler av arrayen uten å endre originalen
const someFruits = fruits.slice(1, 3); // Kopierer elementer fra indeks 1 til 2 (ikke inkluderer 3)
console.log('Original array:', fruits); // Output: ['jordbær', 'kiwi', 'banan', 'pære']
console.log('Kopi med .slice:', someFruits); // Output: ['kiwi', 'banan']

// **Eksempel 7: .indexOf()**
// Finner indeksen til et spesifikt element
const index = fruits.indexOf('banan'); // Returnerer indeksen til 'banan'
console.log('Indeksen til "banan":', index); // Output: 2

// **Eksempel 8: .includes()**
// Sjekker om et spesifikt element finnes i arrayen
const hasKiwi = fruits.includes('kiwi'); // Sjekker om 'kiwi' finnes
console.log('Inneholder arrayen "kiwi"?', hasKiwi); // Output: true

// **Eksempel 9: .map()**
// Lager en ny array ved å utføre en funksjon på hvert element
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); // Gjør alle fruktnavn store
console.log('Original array:', fruits); // Output: ['jordbær', 'kiwi', 'banan', 'pære']
console.log('Nytt array med .map:', upperCaseFruits); // Output: ['JORDBÆR', 'KIWI', 'BANAN', 'PÆRE']

// **Eksempel 10: .filter()**
// Lager en ny array med elementer som oppfyller en betingelse
const longFruits = fruits.filter(fruit => fruit.length > 5); // Finner fruktnavn med mer enn 5 bokstaver
console.log('Original array:', fruits); // Output: ['jordbær', 'kiwi', 'banan', 'pære']
console.log('Nytt array med .filter:', longFruits); // Output: ['jordbær', 'banan']

// **Eksempel 11: .reduce()**
// Reduserer arrayen til en enkelt verdi
const totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0); // Summerer lengden av alle navn
console.log('Total lengde på alle fruktnavn:', totalLength); // Output: 19

// **Eksempel 12: .forEach()**
// Utfører en funksjon for hvert element i arrayen (uten å lage ny array)
fruits.forEach(fruit => {
    console.log('Frukt:', fruit); // Skriver ut hver frukt
});
