// pseudo 2 - make sure randomization works
// var wordsList   = ["jerome", "neena", "darion"];
// var chosenWord  = ""; // solution will be held here.

// chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // confirmed working
// console.log(chosenWord);

// pseudo 3 - since randomization works, now add exports. for other js file to connect
var wordsList   = ["jerome", "neena", "darion"];
var chosenWord  = ""; // solution will be held here.

exports.chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
console.log(chosenWord);