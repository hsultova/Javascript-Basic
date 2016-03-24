function solve(input) {
	var numbers = input[0].match(/\d+/g);
	var hexNumbers = [];
	var output = '';
	for (var i = 0; i < numbers.length; i++) {
		hexNumbers.push(Number(numbers[i]).toString(16).toUpperCase());
	}
	
	for (var j = 0; j < hexNumbers.length; j++) {
		var hexNumbersLength = hexNumbers[j].length;
		
		hexNumbers[j] = '0000' + hexNumbers[j];
		hexNumbers[j] = hexNumbers[j].slice(hexNumbersLength, hexNumbers[j].length);
		
		output += '0x' + hexNumbers[j] + '-';
	}

	console.log(output.slice(0, output.length - 1));
}