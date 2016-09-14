
var Inquirer = require('inquirer');

var Game = require('./game.js');

var Word = require('./word.js');
	// console.log('Word', Word);
var Letter = require('./letter.js');

var words = ["ab","bc","cd"];

var HangmanGame = function(){ // turn from obj to constructor.
	// wordsToPick: {
		// 	"genesis" : {
		// 		picture: 'genesis.jpg',
		// 		song: 'Illegal Alien',
		// 		preview: 'https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8'
		// 	}, 
		// 	"madonna" : {
		// 		picture: 'madonna.jpg',
		// 		song: 'Material Girl',
		// 		preview: 'https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c'
		// 	}, 
		// 	"toto" : {
		// 		picture: 'toto.jpg',
		// 		song: 'Rosanna',
		// 		preview: 'https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317'
		// 	}, 
		// 	"queen" : {
		// 		picture: 'queen.jpg',
		// 		song: 'Princes of the Universe',
		// 		preview: 'https://p.scdn.co/mp3-preview/b84f24300476f3d3f20056d2388cc51db2e3891f'
		// 	}, 
		// 	"u2" : {
		// 		picture: 'u2.jpg',
		// 		song: 'With or Without You',
		// 		preview: 'https://p.scdn.co/mp3-preview/28365dff1890075c1371628371cd0e5bbff9a3a3'
		// 	}, 
		// 	"metallica" : {
		// 		picture: 'metallica.jpg',
		// 		song: 'Master of Puppets',
		// 		preview: 'https://p.scdn.co/mp3-preview/60e6f8dab43f176dd9fb5e795d4e6459bad52e9e'
		// 	}, 
		// 	"journey" : {
		// 		picture: 'journey.jpg',
		// 		song: 'Don\'t Stop Believin\'',
		// 		preview: 'https://p.scdn.co/mp3-preview/21b9abd3cd2eea634e17a917196fdd5ba2e82670'
		// 	}, 
		// 	"inxs" : {
		// 		picture: 'inxs.jpg',
		// 		song: 'Need You Tonight',
		// 		preview: 'https://p.scdn.co/mp3-preview/61b17a335d5afc1c4086b1b08e2400f0da147977'
		// 	},
		// 	"poison" : {
		// 		picture: 'poison.jpg',
		// 		song: 'Fallen Angel',
		// 		preview: 'https://p.scdn.co/mp3-preview/0365ad1f152f1834b42b857c4625191cebf9f987'
		// 	}, 
		// 	"rush" : {
		// 		picture: 'rush.jpg',
		// 		song: 'Limelight',
		// 		preview: 'https://p.scdn.co/mp3-preview/154987dfb07f2fc5ed7aa4d76b80c5dc08ff4d6b'
		// 	}, 
		// 	"blondie" : {
		// 		picture: 'blondie.jpg',
		// 		song: 'Call Me',
		// 		preview: 'https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90'
		// 	}
	// }, // move to global as array instead of object.
	// this.wordsToPick = ["ab","bc","cd"]; // move out to global.
	this.wordInPlay = null; // move to method setupGame
	this.lettersOfTheWord = [];
	this.matchedLetters = [];
	this.guessedLetters = [];
	this.guessesLeft = 0;
	this.totalGuesses = 0;
	this.letterGuessed = null;
	this.wins = 0;
	this.wordView = null; // temp test
	// this.letter = null; // temp test
	this.setupGame = function(wordsToPick) { // add parameter to get words array.
		// ---Pick a random word
		// var objKeys = Object.keys(this.wordsToPick); // not applicable with array of words.
		// this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)]; // move to game as method in constructor.
		this.wordInPlayObj = new Game(wordsToPick); // add - creates new object with wordRandom property.
			console.log ('setupGame.wordInPlayObj: ', this.wordInPlayObj);
		this.wordInPlay = this.wordInPlayObj.wordRandom; // call wordRandom to set up to split
			console.log ('setupGame.wordInPlay: ', this.wordInPlay);
		this.lettersOfTheWord = this.wordInPlay.split('');
			console.log ('setupGame.lettersOfTheWord: ', this.lettersOfTheWord);
		// this.rebuildWordView();
		this.processUpdateTotalGuesses();
	// },
	};
	this.updatePage = function(letter) {
		if (this.guessesLeft == 0){
			// this.restartGame();
			console.log("over");
		}else{
			// this.updateGuesses(letter);
			this.guessesObj = new Word.UpdateGuesses(letter, this.guessedLetters, this.lettersOfTheWord, this.guessesLeft);
			this.letterGuessed = this.guessesObj.guessedLetter;
			this.guessedLetters.push(this.guessesObj.guessedLetter);
			this.guessesLeft = this.guessesObj.guessesLeft;
			// this.updateMatchedLetters(letter);
			this.matchedObj = new Word.UpdateMatchedLetters(letter, this.lettersOfTheWord, this.matchedLetters);
			this.matchedLetters.push(this.matchedObj.matchedLetter);

			// this.rebuildWordView();
			this.wordviewObj = new Letter(this.lettersOfTheWord, this.matchedLetters);
			this.wordView = this.wordviewObj.wordView;

			// if (this.updateWins() == true){
			// 	this.restartGame();
			// }
			// this.wordObj = new Word(letter);
			// console.log('wordObj', wordObj);
			
			
			// console.log('letterObj: ', this.letterObj);
			console.log('not over');
		}

	};

	// this.updateGuesses: function(letter){
	// 	//if the letter is not in the guessedLetters array
	// 	//and
	// 	//the letter is not in the lettersOfTheWord array
	// 	//then
	// 	//make guesses go down

	// 	if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersOfTheWord.indexOf(letter) == -1)){
			
	// 		this.guessedLetters.push(letter);

	// 		this.guessesLeft--;

	// 		document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;

	// 		document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(', ');
	// 	}
	// }, // move to word.js

	this.processUpdateTotalGuesses = function() {
			console.log('processUpdateTotalGuesses.guessesLeft: ', this.lettersOfTheWord);
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		// ---Render the guesses left
		// document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
			console.log('processUpdateTotalGuesses.guessesLeft: ', this.guessesLeft);
	};

	// this.updateMatchedLetters: function(letter){
	// 	for (var i = 0; i < this.lettersOfTheWord.length; i++) {
	// 		if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
	// 			this.matchedLetters.push(letter);
	// 		};
	// 	};
	// }, // move to word.js

	// this.rebuildWordView: function() {
	// 	var wordView = "";

	// 	for(var i=0; i < this.lettersOfTheWord.length; i++){
	// 		if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) != -1){
	// 			wordView += this.lettersOfTheWord[i];				
	// 		}else{
	// 			wordView += '&nbsp;_&nbsp;';
	// 		}
	// 	}

	// 	document.querySelector('#current-word').innerHTML = wordView;
	// }, // move to letter.js

	// this.restartGame = function(){
	// 	// document.querySelector('#guessed-letters').innerHTML = '';
	// 	this.wordInPlay = null;
	// 	this.lettersOfTheWord = [];
	// 	this.matchedLetters = [];
	// 	this.guessedLetters = [];
	// 	this.guessesLeft = 0;
	// 	this.totalGuesses = 0;
	// 	this.letterGuessed = null;
	// 	// this.setupGame();
	// 	// this.rebuildWordView();
	// }

	// this.updateWins: function() {

	// 	//this won't work for words with double or triple letters
	// 		//var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
	// 		//this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

	// 	if (this.matchedLetters.length == 0){
	// 		var win = false;
	// 	}else{
	// 		var win = true
	// 	}
		
	// 	for (var i=0; i < this.lettersOfTheWord.length; i++){
	// 		if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) == -1){
	// 			win = false;
	// 		}
	// 	}

	// 	if (win == true){
	// 		this.wins =  this.wins + 1;
			
	// 		document.querySelector('#wins').innerHTML = this.wins;

	// 		document.querySelector('#music').innerHTML = this.wordsToPick[this.wordInPlay].song + " By " + this.wordInPlay;

	// 		document.querySelector('#bandDiv').innerHTML = '<img class="bandImage" src="images/' + this.wordsToPick[this.wordInPlay].picture + '" alt="' + this.wordsToPick[this.wordInPlay].song + '">';

	// 		var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
	// 		audio.play();


	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
};



// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);
// }

// creates a new object from the HangmanGame constructor which in a hilarious way
// essentially gives me the original hangmanGame object behaving exactly the same as before.
var play = new HangmanGame();
// module.exports = play;
// calls setupGame inside new object Play with 'ab' argument
play.setupGame(words);

console.log('play after setup', play);

play.updatePage("a"); // hard code to simulate user input.

console.log('play after update: ', play);

var playCount = play.totalGuesses;

var letsPlay = function(){

	if (count < playCount) {
		inquirer.prompt([{
			name : "name",
			message : "Letter? "
		}]).then(play.updatePage(answers.name))
	}
}



// function Programmer(name){
// 	this.name = name;
// 	console.log('word.Programmer', this);
// };

// Programmer.prototype.printInfo = function(name){
// 	if(this.name == word) {
// 		console.log('guessed right: ' + this.name);
// 	}else {
// 		console.log('guessed wrong: ' + this.name);
// 	}
// };

// var count = 0;

// var programmerArray = [];

// var askQuestion = function() {

// 	if (count < 2) {

// 		inquirer.prompt({
// 			name : 'name',
// 			message : 'Guess Letter: '
// 		}).then(function(answer) {

// 			var playerGuess = new Programmer(answer.name);
// 			programmerArray.push(playerGuess);
// 			// playerGuess.printInfo();
// 			count++;
// 			askQuestion();
// 			// playerGuess.printInfo();
// 		});
// 	}else {
// 		console.log('over');
// 		for (var x = 0; x < programmerArray.length; x++) {
// 			programmerArray[x].printInfo();
// 		}
// 	}
// };

// askQuestion();



	// // pseudo 3 - make sure modularization works and get the chosenWord from game.js
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
