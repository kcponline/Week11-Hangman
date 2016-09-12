// pseudo 3 - make sure modularization works and get the chosenWord from game.js
// var game = require('./game.js');
// 	console.log('main game log: ', game);

// // pseudo 1 - make sure node works with simple user input if-then evaluation
// console.log("Guess the first letter of a Marvel Superhero name!")
// var superhero = "i";

// var playerinput = process.argv[2];

// if (playerinput == superhero) {
// 	console.log("dude you're right");
// }
// else {
// 	console.log("dude you're wrong");
// }

// // pseudo 4 - this if-then will go to the word.js file later; confirmed working
// console.log("Hard code guess!")

// var playerGuess = process.argv[2];
// 	console.log("playerGuess", playerGuess);

// if (playerGuess == game.chosenWord) { // remember that chosenWord.chosenWord as variable.export
// 	console.log("true");
// }
// else {
// 	console.log("false");
// }

// pseudo 5 - modularized playerGuess evaluation and display back result
console.log("Let's Play Hangman!");

var word = require('./word.js');
	console.log(word.askQuestion);
	



