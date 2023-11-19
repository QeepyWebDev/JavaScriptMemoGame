const tileContainer = document.querySelector("cards");
let card1 = document.getElementById("img1");
let card2 = document.getElementById("img2");
let card3 = document.getElementById("img3");
let card4 = document.getElementById("img4");
let card5 = document.getElementById("img5");
let card6 = document.getElementById("img6");
const memoCards = [card1, card2, card3, card4, card5, card6];
const memoCardPicklist = [...memoImg, ...memoImg];
const tileCount = memoCardPicklist.lenght;

//Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

for (let i = 0; i < tileCount; i ++) {
    const randomIndex = Math.floor(Math.random() * memoImgPicklist.lenght);
    const cardFront = memoCardPicklist[randomIndex];

    memoCardPicklist.splice(randomIndex, 1);
}



let flipCard = function() {

}