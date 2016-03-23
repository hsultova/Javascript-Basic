function extractObjects(array) {
	var filtredArray = [];
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] !== "number" && typeof array[i] !== "string" 
			&& !Array.isArray(array[i])) {
			filtredArray.push(array[i]);
		}
	}
	console.log(filtredArray);
}

extractObjects([
	"Pesho",
	4,
	4.21,
	{ name : 'Valyo', age : 16 },
	{ type : 'fish', model : 'zlatna ribka' },
	[1, 2, 3],
	"Gosho",
	{ name : 'Penka', height: 1.65 }
]
);