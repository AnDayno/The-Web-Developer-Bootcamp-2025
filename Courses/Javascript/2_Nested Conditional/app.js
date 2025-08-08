const password = prompt("Enter your Password");

if (password.length >= 6) {
	if (password.indexOf(" ") === -1) {
		console.log("Valid Password");
	} else {
		console.log("Password cannot contain space");
	}
} else {
	console.log("Password is too short! Must be 6+ Characters");
}
