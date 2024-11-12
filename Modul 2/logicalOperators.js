// Sammenligning mellom tall og streng med ==
console.log(1, "1", 1 == "1"); // True fordi == sjekker verdi, ikke type

// Strengt likhetsoperator ===
console.log(1, "1", 1 === "1"); // False fordi == sjekker verdi og type
console.log(true === true); // True, siden begge verdier og typer er like

// Bruk av && (og) operatoren med streng og tall
const navn = "Bertil";
const age = 5;
// Sjekker om både navn og alder stemmer med spesifikke verdier
console.log(navn === "Bertil" && age === 18); 
// False, fordi age ikke er 18. For at &&-operatoren skal returnere true, må begge betingelsene være true.

console.log(navn === "Bertil" && age === 5); 
// True, fordi både navn er "Bertil" og age er 5. Begge betingelsene er oppfylt, så hele uttrykket er true.

// Bruk av || (eller) og ! (ikke) operatorene
const erMyndig = false;
console.log(!(erMyndig === true || 18 !== 18)); // True, uttrykket i parantes er false, men blir til true med !

// Eksempel på syntaksfeil
// !navn === "A" && firmaNavn === "GA" gir en feil hvis firmaNavn ikke er definert
// For å unngå feil, må firmaNavn defineres før bruk
let firmaNavn = "GA";
console.log(!navn === "A" && firmaNavn === "GA"); // False, siden !navn ikke gir ønsket sammenligning
