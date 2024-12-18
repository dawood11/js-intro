const playerCards = [];

function play () {
    const playerName = document.getElementById("playerName").value;

    const player = {
        //Nøkkel: verdi ("Strings". 12334, true/false)
        //Key: value
        name: playerName,
        age: parseInt(document.getElementById("age").value),
    };
    
    if (player.age < 18) {
        alert("You're not old enough to play!");
        return;
    }

    
    const card1 = hit();
    const card2 = hit();
}

function calculateCardsSum() {
    let sum = 0;
    //ES6
    // playerCards.map((card) => {
    //     sum += card
    // });

    // for (card in playerCards) {
    //     sum += card
    // }

    // const names = ["Dawood", "Jackson", "Pernille"]
    // [0,            1,         2] = lenght =>> 3
    // console.log(names[1])
    for(let i = 0; i < playerCards.length; i++){
        sum = sum + playerCards[i];
    }

    document.getElementById("playerSum").innerText = sum;
    return sum;
};

function hit() {
    const card = Math.floor(Math.random() * 10) + 1;
    playerCards.push(card);
    const playerCardsDiv = document.getElementById("myCards");
    playerCardsDiv.innerHTML += `<p>${card}</p>`;

    calculateCardsSum()

    return card;
}