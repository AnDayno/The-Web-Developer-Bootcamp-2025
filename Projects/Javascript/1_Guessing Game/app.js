let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
	maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guessAttempt = 1;

let guess = parseInt(prompt("Enter your first guess!"));

while (parseInt(guess) !== targetNum) {
	if (guess === "q") break;
	guessAttempt++;
	if (guess > targetNum) {
		guess = prompt("Too high! Enter a new guess:");
	} else {
		guess = prompt("Too low! Enter a new guess:");
	}
}

if (guess === "q") {
	console.log("Ok, You quit!");
} else {
	console.log("Congratulation!");
	console.log(`You got it! It took you ${guessAttempt} guesses!`);
}
