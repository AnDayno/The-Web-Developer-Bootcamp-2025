let commands = prompt("What would you like to do?");
const list = ["Clean Room", "Plant Tree"];

while (commands.toLowerCase() !== "quit") {
	if (commands.toLowerCase() == "new") {
		todo = prompt("Enter new todo");
		list.push(todo);
		console.log(`${todo} added to the list`);
	} else if (commands.toLowerCase() == "list") {
		for (lists of list) {
			console.log(`${list.indexOf(lists)}: ${lists}`);
		}
		console.log("************");
	} else if (commands.toLowerCase() == "delete") {
		del = parseInt(prompt("Enter Index of todo to delete"));
		while (!del) {
			del = parseInt(prompt("Enter a correct index to delete"));
			for (lists of list) {
				console.log(`${list.indexOf(lists)}: ${lists}`);
			}
			console.log("************");
		}

		while (del < 0 || del > list.length) {
			del = parseInt(prompt("Enter a correct index to delete"));
			for (lists of list) {
				console.log(`${list.indexOf(lists)}: ${lists}`);
			}
			console.log("************");
		}

		if (del < list.length && del >= 0) {
			deleted = list.splice(del, 1);
			console.log(`Deleted ${deleted[0]}`);
		}
	}

	commands = prompt("What would you like to do?");
}

console.log("Ok, you quit the app");
