
/******************************* Blackjack *****************************************/


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("msg-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let ramCard = "";

let player ={
    name: "Ed",
    chips: 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function ramdomCard(){
    let ramNumb = Math.floor(Math.random() * 11) + 2;
    if(ramNumb === 12) --ramNumb;
    return ramNumb; 
}


function startGame(){
    cards = [];
    isAlive = true;
    cards.push(ramdomCard());
    cards.push(ramdomCard());
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame(){

    cardsEl.textContent = "";

    if(sum < 21){
        message = "Do u want a new card?";
    } 
    else if(sum === 21){
        message = "Blackjack!!!";
        hasBlackJack = true;
    }
    else{
        message = "U are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent +=  cards[i] + " - ";
    }
}

function newCard(){

    if(isAlive === false && hasBlackJack === false) messageEl.textContent = "Sorry, u have to click on button 'START GAME'";
    
    else if(isAlive === true && sum < 21){
        ramCard = ramdomCard();
        sum += ramCard;
        cards.push(ramCard);
        renderGame();
        console.log(ramCard);
    }
}

