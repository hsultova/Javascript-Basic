function revealTriangle(input) {
	var output = [];
	for (var i = 0; i < input.length; i++) {
		output[i] = input[i].split('');
	}
	
	for (var row = 1; row < input.length; row++) {
		for (var column = 0; column < output[row].length; column++) {
			var a = input[row][column];
			var b = input[row][column + 1];
			var c = input[row][column + 2];
			var d = input[row - 1][column + 1];
			
			if (a === b && b === c && c === d) {
				output[row][column] = '*';
				output[row][column + 1] = '*';
				output[row][column + 2] = '*';
				output[row - 1][column + 1] = '*';
			}
		}
	}
	for (var i = 0; i < input.length; i++) {
		console.log(output[i].join(''));
	}
}