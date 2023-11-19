let shuffleCards = function() {
    const gameBoard = document.getElementById('gameBoard');
    const cardsContainer = gameBoard.querySelector('.cards');
    const cards = Array.from(cardsContainer.children).filter(card => !card.classList.contains('details'));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        cardsContainer.insertBefore(cards[i], cards[j]);
    }
}

document.addEventListener('DOMContentLoaded', shuffleCards)

const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let timer;
let secondsRemaining;

let flipCard = function() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;

    checkForMatch();
}

let updateScore = function() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = score;
    }

    if (score === 6) {
        clearInterval(timer);
        alert("Grattis! Du vann!")
    }
}

let checkForMatch = function() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card
    isMatch ? disableCards() : unflipcards();
}

let disableCards = function() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    score++;

    updateScore();
    resetBoard();
}

let unflipcards = function() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
        }, 1000)
}

let resetBoard = function() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [false, false];
}

let restartGame = function(){
    score = 0;
    secondsRemaining = 0;
    updateScore();
    updateTimer();
    const flippedCards = document.querySelectorAll('.flip');
    flippedCards.forEach(card => card.classList.remove('flip'));
}

cards.forEach(card => card.addEventListener("click", flipCard));

let restartButton = document.getElementById("restart");

restartButton.addEventListener("click", restartGame)

function updateTimer() {
    const timerDropdown = document.getElementById('timerDropdown');
    secondsRemaining = parseInt(timerDropdown.value);

    clearInterval(timer);

    timer = setInterval(function () {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = secondsRemaining;
        }

        if (secondsRemaining <= 0 && score < 6) {
            clearInterval(timer);
            alert("Game over! Tiden tog slut!");
        } 
        
        else if (secondsRemaining <=0 && score === 6) {
            alert("Grattis! Du vann!");
        }

        else {
            secondsRemaining--;
        }
    }, 1000);
}
