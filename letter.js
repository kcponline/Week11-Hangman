// pseudo - gets result of word evaluation as 2 parameters and rebuild wordView.
var RebuildWordView = function(lettersOfTheWord, matchedLetters) {
	this.wordView = "";

	for(var i=0; i < lettersOfTheWord.length; i++){
		if (matchedLetters.indexOf(lettersOfTheWord[i]) != -1){
			this.wordView += lettersOfTheWord[i];				
		}else{
			this.wordView += ' _ ';
		}
	}

	// document.querySelector('#current-word').innerHTML = wordView; // not applicable as wordView goes to main.js

}

module.exports = RebuildWordView;



// var word = require('./word.js');
// 	console.log('letter.wordResult: ', word.wordResult);

// var letterwordResult = word.wordResult;
// 	console.log(letterwordResult);

// exports.letterwordResult;