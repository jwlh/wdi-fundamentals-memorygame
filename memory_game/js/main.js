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
var cardsInPlayRank = [];
var cardsInPlaySuit = [];

// reset button
function resetGame() {
	location.reload();
}

document.getElementById('reset').addEventListener('click', resetGame)

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
	if (cardsInPlayRank[0] === cardsInPlayRank[1] && cardsInPlaySuit[0] !== cardsInPlaySuit[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
		resetGame();
	}
	cardsInPlayRank.length = 0;
	cardsInPlaySuit.length = 0;
};

//function to flip a card
function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlayRank.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlaySuit.push(cards[cardId].suit);

	if (cardsInPlayRank.length === 2) {
	checkForMatch();
	}
};

createBoard();
