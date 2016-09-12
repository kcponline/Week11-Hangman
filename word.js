var Dud = require('./dud.js');

var PartyBus = function(driverName, startLocation, destination){
	this.duds = [];
	this.driverName = driverName;
	this.startLocation = startLocation;
	this.destination = destination;
	this.addDud = function(g, n, r){
		this.duds.push(new Dud(g, n, r));
	}
}

module.exports = PartyBus;

	updateGuesses: function(letter){
		//if the letter is not in the guessedLetters array
		//and
		//the letter is not in the lettersOfTheWord array
		//then
		//make guesses go down

		if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersOfTheWord.indexOf(letter) == -1)){
			
			this.guessedLetters.push(letter);

			this.guessesLeft--;

			document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;

			document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(', ');
		}
	},
	updateMatchedLetters: function(letter){
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
				this.matchedLetters.push(letter);
			};
		};
	},

// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);
// }




// // pseudo 5 - modularize playerGuess and chosenWord evaluation
// var main = require('./main.js');
// 	console.log('word.mainchosenWord: ', main.mainchosenWord);
// 	console.log('word.playerGuess: ', main.playerGuess);
// // var main = require('./main.js');

// var playerGuess = 'neena';
// 	console.log('hard code playerGuess: ', playerGuess);

// var wordResult = '';

// if (playerGuess == main.mainchosenWord) {
// 	wordResult = 'true';
// 	console.log(wordResult);
// }
// else {
// 	wordResult = 'false';
// 	console.log(wordResult);
// }

// console.log('2nd log: ', wordResult);

// exports.wordResult;

// pseudo - this thing is going to get 2 or 3 arguments
// argument 1 is the playerGuess letter
// argument 2 is the chosenword

// function startGame() {
// 	// Reset the guesses back to 0
// 	numGuesses = 9;

// 	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList
// 	lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters
// 	numBlanks = lettersInChosenWord.length; // we cound the number of letters in the word

// 	console.log(chosenWord); // We print the solution in console (for testing)

// 	blanksAndSuccesses = []; // CRITICAL LINE - here we *reset* the guess and success array at each round. 
// 	wrongGuesses = []; // CRITICAL LINE - here we *reset* the wrong guesses from the previous round.