let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
	maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guessAttempt = 1;

let guess = prompt("Enter your first guess! (press 'q' to quit)");

while (parseInt(guess) !== targetNum) {
	if (guess === "q") break;
	guess = parseInt(guess);
	if (guess > targetNum) {
		guess = prompt("Too high! Enter a new guess:");
		guessAttempt++;
	} else if (guess < targetNum) {
		guess = prompt("Too low! Enter a new guess:");
		guessAttempt++;
	} else {
		guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
	}
}

if (guess === "q") {
	console.log("Ok, You quit!");
} else {
	console.log("Congratulation!");
	console.log(`You got it! It took you ${guessAttempt} guesses!`);
}
