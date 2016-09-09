console.log("Guess the first letter of a Marvel Superhero name!")
var superhero = "i";

var playerinput = process.argv[2]

if (playerinput == superhero) {
	console.log("dude you're right");
}
else {
	console.log("dude you're wrong");
}