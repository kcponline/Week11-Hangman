// pseudo 5 - modularize playerGuess and chosenWord evaluation
var game = require('./game.js');
	console.log('word.chosenWord', game.chosenWord);
// var main = require('./main.js');

var playerGuess = 'neena';
	console.log('playerGuess', playerGuess);

var result = '';

if (playerGuess == game.chosenWord) {
	wordResult = 'true';
}
else {
	wordResult = 'false';
}

// console.log(result);

exports.wordResult;