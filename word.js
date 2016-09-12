
var game = require('./game.js');
	console.log('word.game', game.chosenWord);

var word = game.chosenWord;

var inquirer = require('inquirer');

function Programmer(name){
	this.name = name;
	console.log('word.Programmer', this);
};

Programmer.prototype.printInfo = function(name){
	if(this.name == word) {
		console.log('guessed right: ' + this.name);
	}else {
		console.log('guessed wrong: ' + this.name);
	}
};

var count = 0;

var programmerArray = [];

var askQuestion = function() {

	if (count < 3) {

		inquirer.prompt({
			name : 'name',
			message : 'Guess Letter: '
		}).then(function(answer) {

			var playerGuess = new Programmer(answer.name);
			programmerArray.push(playerGuess);
			// playerGuess.printInfo();
			count++;
			askQuestion();
			// playerGuess.printInfo();
		});
	}else {
		console.log('over');
		for (var x = 0; x < programmerArray.length; x++) {
			programmerArray[x].printInfo();
		}
	}
};

askQuestion();

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