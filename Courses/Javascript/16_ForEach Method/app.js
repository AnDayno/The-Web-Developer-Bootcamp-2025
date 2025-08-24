const movies = [
	{title: "Amadeus", score: 99,},

	{ title: "Stand By me", score: 85 },

	{ title: "Parasite", score: 95 },

	{ title: "Alien", score: 90 },
];

movies.forEach((movie) => {
	console.log(`${movie.title} - ${movie.score}/100`);
});
