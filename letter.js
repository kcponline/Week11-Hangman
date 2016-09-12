// 
var word = require('./word.js');
	console.log('letter.wordResult: ', word.wordResult);

var letterwordResult = word.wordResult;
	console.log(letterwordResult);

exports.letterwordResult;

	rebuildWordView: function() {
		var wordView = "";

		for(var i=0; i < this.lettersOfTheWord.length; i++){
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) != -1){
				wordView += this.lettersOfTheWord[i];				
			}else{
				wordView += '&nbsp;_&nbsp;';
			}
		}

		document.querySelector('#current-word').innerHTML = wordView;

	},