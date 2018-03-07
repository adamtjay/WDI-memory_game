
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
	}

];

var cardsInPlay = [];

var checkForMatch = function() {


	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


var flipCard = function(cardId) {

	var cardId = this.getAttribute('data-id');


	console.log("User flipped " + cards.rank);

	cardsInPlay.push(cards.rank);

	console.log(cards.cardImage);

	console.log(cards.rank);

	this.setAttribute('src', cards[cardId].cardImage);


	checkForMatch();


} //end of flipCard() function


var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);

		var gameboard = document.getElementById('game-board');

		gameboard.appendChild(cardElement);

	}
}


createBoard();




//OLD Code from previous tutorial - start
	/* var cardOne = cards[0];

		cardsInPlay.push(cardOne);

		console.log("User flipped " + cardsInPlay[0]);

	var cardTwo = cards[1];

		cardsInPlay.push(cardTwo);

		console.log("User flipped " + cardsInPlay[1]);


	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}

	} END of old Code*/




