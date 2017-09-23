var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "clubs",
	cardImage: "images/queen-of-clubs.png"
},
{
	rank: "queen",
	suit: "spades",
	cardImage: "images/queen-of-spades.png"
},
{
	rank: "king",
	suit: "clubs",
	cardImage: "images/king-of-clubs.png"
},
{
	rank: "king",
	suit: "spades",
	cardImage: "images/king-of-spades.png"
}
];

// shuffle cards
cards.sort(function(a, b){return 0.5 - Math.random()});

//array to store cards in play
var cardsInPlay = [];

//create board
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//function to check for match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	cardsInPlay.length = 0;
};

//function to flip a card
function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};

createBoard();

// reset button
function resetGame() {
	location.reload();
}

document.getElementById('reset').addEventListener('click', resetGame)
