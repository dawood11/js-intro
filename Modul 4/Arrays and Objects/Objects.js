// **Eksempel 1: Enkelt objekt**
// Oppretter et objekt som representerer en person
const person = {
    name: 'Nina Einarsen', // Nøkkel: 'name', Verdi: 'Nina Einarsen'
    age: 36               // Nøkkel: 'age', Verdi: 36
};

// Objektet `person` inneholder informasjon som navn og alder
console.log(person); // Skriver ut hele objektet

// **Eksempel 2: Kompleks objekt med nøstede nøkler**
// Oppretter et objekt som representerer et klasserom med flere egenskaper
const classroom = {
    personType: {
        teacher: 'Dawood', // En nøkkel som viser lærerens navn
        students: ['Bertil Einarsen', 'Student 1', 'Student 2'], // Array av studentnavn
    },
    roomName: 'Færder',        // Nøkkel: 'roomName', Verdi: 'Færder'
    numberOfChairs: 20,        // Antall stoler i rommet
    equipment: ['Projector', 'whiteboard', 'tables'], // Array av utstyr i rommet
    booked: true,              // Boolean som indikerer om rommet er booket
};

// Skriver ut hele klasseromsobjektet
console.log(classroom); 

// Skriver ut romnavnet på to måter:
// 1. Direkte tilgang via punktnotation
console.log(classroom.roomName); // Output: 'Færder'
// 2. Bruker bracket notation
console.log(classroom['roomName']); // Output: 'Færder'

// Eksempel på feilnøkkel
console.log(classroom['roomNamee']); // Output: undefined (fordi nøkkelen ikke finnes)

// Endrer verdien til en nøkkel
console.log(classroom.numberOfChairs); // Output: 20
classroom.numberOfChairs = 99;         // Oppdaterer antall stoler
console.log(classroom.numberOfChairs); // Output: 99

// **Eksempel 3: Array av objekter**
// En liste med områder representert som objekter
const matriseOmråder = [
    {
        url: 'vikenadv.no/arbeidsrett', // URL til området
        name: 'Arbeidsrett',           // Navn på området
        highlighted: true,             // Boolean som indikerer om det er markert
    },
];

// Skriver ut verdien av en nøkkel i det første objektet i arrayen
console.log(matriseOmråder[0].highlighted); // Output: true

// **Eksempel 4: Annonser**
// En liste med annonser, hver representert som et objekt
const annonseList = [
    {
        id: 1,                         // Unik ID for annonsen
        img: 'https://www.finn.no/finnkode:1234567&bilde1.png', // URL til bilde
        url: 'https://www.finn.no/finnkode:1234567',           // URL til annonsen
        title: 'Led lys til...',       // Tittel på annonsen
        pris: 100,                     // Pris i kroner
        sted: 'Oslo',                  // Sted for varen
    },
    {
        id: 2,
        img: 'https://www.finn.no/finnkode:1234567&bilde1.png',
        url: 'https://www.finn.no/finnkode:1234567',
        title: 'Led lys til...',
        pris: 100,
        sted: 'Oslo',
    },
    {
        id: 3,
        img: 'https://www.finn.no/finnkode:1234567&bilde1.png',
        url: 'https://www.finn.no/finnkode:1234567',
        title: 'Led lys til...',
        pris: 100,
        sted: 'Oslo',
    },
];

// Skriver ut første annonse i listen
console.log(annonseList[0]); // Output: Det første annonseobjektet
// Skriver ut tittel for alle annonser
for (const annonse of annonseList) {
    console.log(annonse.title); // Skriver ut tittelen for hver annonse
}
