// **Hva er en for-løkke?**
// En for-løkke er som en automatisk teller. Den hjelper deg å gjenta samme oppgave
// flere ganger, men du kan bestemme hvor mange ganger det skjer og hva som skal skje hver gang.

// Eksempel: Hvis du vil telle fra 1 til 5 og skrive det ut, kan du gjøre dette manuelt:
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Men med en for-løkke kan du gjøre det på en smartere måte:
for (let i = 1; i <= 5; i++) {
    console.log(i); // Skriver ut 1, 2, 3, 4, 5
}
// Forklaring:
// - `let i = 1`: Starter telleren på 1.
// - `i <= 5`: Løkken kjører så lenge `i` er mindre enn eller lik 5.
// - `i++`: Øker telleren med 1 hver gang løkken kjører.

// **Vanlige For Loops**
console.log("Vanlig for-løkke:");
for (let i = 0; i < 5; i++) {
    console.log("Dette er iterasjon nummer:", i);
}

// **Baklengs For Loop**
console.log("Baklengs for-løkke:");
for (let i = 5; i > 0; i--) {
    console.log("Nedtelling:", i); // Skriver ut 5, 4, 3, 2, 1
}

// **For Loops med Steg**
console.log("For-løkke med steg:");
for (let i = 0; i <= 10; i += 2) {
    console.log("Teller hvert andre tall:", i); // Skriver ut 0, 2, 4, 6, 8, 10
}

// **For-In Loop**
// En `for-in`-løkke brukes til å gå gjennom nøklene (keys) i et objekt.
console.log("For-in løkke med objekt:");
const person = { name: "Alex", age: 12, hobby: "Fotball" };

for (let key in person) {
    console.log(key, ":", person[key]);
    // Skriver ut:
    // name: Alex
    // age: 12
    // hobby: Fotball
}

// **For-In Loop med Arrays**
// Du kan også bruke `for-in` på arrays, men det er ikke anbefalt.
console.log("For-in løkke med array:");
const colors = ["rød", "grønn", "blå"];
for (let index in colors) {
    console.log("Indeks:", index, "Farge:", colors[index]);
    // Skriver ut:
    // Indeks: 0 Farge: rød
    // Indeks: 1 Farge: grønn
    // Indeks: 2 Farge: blå
}

// **For-Of Loop**
// En `for-of`-løkke brukes til å gå gjennom verdiene i arrays, strenger eller andre itererbare objekter.
console.log("For-of løkke med array:");
for (let color of colors) {
    console.log("Farge:", color);
    // Skriver ut:
    // Farge: rød
    // Farge: grønn
    // Farge: blå
}

// **For-Of Loop med Strenger**
console.log("For-of løkke med streng:");
const text = "Hei!";
for (let char of text) {
    console.log("Bokstav:", char);
    // Skriver ut:
    // Bokstav: H
    // Bokstav: e
    // Bokstav: i
    // Bokstav: !
}

// **For Loops med Break**
console.log("For-løkke med break:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Stopper løkken på 5");
        break; // Stopper løkken når i er 5
    }
    console.log(i); // Skriver ut 0, 1, 2, 3, 4
}

// **For Loops med Continue**
console.log("For-løkke med continue:");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Hopper over alle partall
    }
    console.log("Oddetall:", i); // Skriver ut 1, 3, 5, 7, 9
}

// **Nestede For Loops**
console.log("Nestede for-løkker:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
        // Skriver ut:
        // i=1, j=1
        // i=1, j=2
        // i=1, j=3
        // ...
        // i=3, j=3
    }
}

// **For Loops med Arrays**
console.log("For-løkke for å iterere gjennom et array:");
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log("Tall:", numbers[i]);
    // Skriver ut:
    // Tall: 10
    // Tall: 20
    // Tall: 30
    // Tall: 40
    // Tall: 50
}