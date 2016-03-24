function solve(input) {
	var regex = /\d+/g;
	var degrees = regex.exec(input[0]);
	var n = parseInt(degrees) / 90;
	var matrix = [];
	var len = 0;
	
	for (var i = 1; i < input.length; i++) {
		var line = input[i];
		matrix.push(line.split(''));
		if (line.length > len) {
			len = line.length;
		}
	}
	
	for (var i = 0; i < matrix.length; i++) {
		while (matrix[i].length < len) {
			matrix[i].push(' ');
		}
	}
	
	function rotateMatrix() {
		var maxRow = matrix.length - 1;
		var maxCol = matrix[0].length - 1;
		var rotatedMatrix = new Array(maxCol);

		for (var col = 0; col <= maxCol; col++) {
			rotatedMatrix[col] = new Array(maxRow);
			for (var row = 0; row <= maxRow; row++) {
				rotatedMatrix[col][maxRow - row] = matrix[row][col];
			}
		}

		matrix = rotatedMatrix;
	}
	
	for (var step = 0; step < n; step++) {
		rotateMatrix();
	}
	
	for (var i in matrix) {
		console.log(matrix[i].join(''));
	}
}