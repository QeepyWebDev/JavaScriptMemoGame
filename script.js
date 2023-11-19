const tileContainer = document.querySelector("cards");
let card1 = document.getElementById("img1");
let card2 = document.getElementById("img2");
let card3 = document.getElementById("img3");
let card4 = document.getElementById("img4");
let card5 = document.getElementById("img5");
let card6 = document.getElementById("img6");
const memoCards = [card1, card2, card3, card4, card5, card6];
const memoCardPicklist = [...memoCards, ...memoCards];
const tileCount = memoCardPicklist.lenght;

//Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

for (let i = 0; i < tileCount; i ++) {
    const randomIndex = Math.floor(Math.random() * memoCardPicklist.lenght);
    const cardFront = memoCardPicklist[randomIndex];

    memoCardPicklist.splice(randomIndex, 1);
}


    var cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        // Add a click event listener to each card
        card.addEventListener('click', function () {
            // Toggle the visibility of front and back views
            let frontView = card.querySelector('.front-view');
            let backView = card.querySelector('.back-view');

            frontView.style.display = frontView.style.display === 'none' ? 'flex' : 'none';
            backView.style.display = backView.style.display === 'none' ? 'flex' : 'none';
        });
    });
