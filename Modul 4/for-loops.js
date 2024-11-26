// **Eksempel 1: En enkel oppadgående løkke**
console.log('start');
// Vi starter en løkke som teller fra 0 til 5
for (let i = 0; i <= 5; i++) {
    // `i` starter på 0. Løkken kjører så lenge `i <= 5`
    // Etter hver iterasjon økes `i` med 1 (`i++`)
    console.log(i); // Skriver ut verdien av `i` i hver iterasjon
}
console.log('end');
// Output:
// start
// 0
// 1
// 2
// 3
// 4
// 5
// end

// **Eksempel 2: En nedadgående løkke**
console.log('start');
// Starter en løkke som teller ned fra 10 til 5
for (let i = 10; i >= 5; i--) {
    // `i` starter på 10. Løkken kjører så lenge `i >= 5`
    // Etter hver iterasjon reduseres `i` med 1 (`i--`)
    console.log(i); // Skriver ut verdien av `i` i hver iterasjon
}
console.log('end');
// Output:
// start
// 10
// 9
// 8
// 7
// 6
// 5
// end

// **Eksempel 3: Bruk av funksjoner i løkker**
// Her definerer vi en funksjon som tar imot en melding og logger den til konsollen
function greet(message) {
    console.log('Hei Bertil! ' + message); // Skriver ut meldingen kombinert med "Hei Bertil!"
}

// Vi kaller funksjonen én gang utenfor en løkke
greet("Er du her i dag ååå?");
// Output:
// Hei Bertil! Er du her i dag ååå?

// Vi bruker en løkke for å kalle funksjonen flere ganger
for (let i = 0; i <= 5; i++) {
    // Sender en unik melding for hver iterasjon
    greet("I dag er det den " + i + ".ende gang du er med i denne forelesningen.");
}
// Output:
// Hei Bertil! I dag er det den 0.ende gang du er med i denne forelesningen.
// Hei Bertil! I dag er det den 1.ende gang du er med i denne forelesningen.
// ...
// Hei Bertil! I dag er det den 5.ende gang du er med i denne forelesningen.

// **Eksempel 4: Skrive ut Hei! 100 ganger**
// Dette er et eksempel på en stor løkke der vi skriver ut "Hei!" 100 ganger
for (let i = 0; i < 100; i++) {
    // `i` starter på 0 og øker med 1 for hver iterasjon til det når 99
    console.log('Hei! ' + i); // Skriver ut "Hei!" sammen med iterasjonens nummer
}
// Output:
// Hei! 0
// Hei! 1
// Hei! 2
// ...
// Hei! 99
