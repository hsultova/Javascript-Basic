function solve(input) {
	var start = parseInt(input[0]);
	var end = parseInt(input[1]);

	console.log('<ul>');
	
	for (var i = start; i <= end; i++) {
		if (isRakiyaNumber(i)) {
			console.log('<li><span class=\'%s\'>%s</span><a href=\"view.php\?id=%s>View</a></li>', 'rakiya', i, i);
		}
		else {
			console.log('<li><span class=\'%s\'>%s</span></li>', 'num', i);
		}
	}
	
	console.log('</ul>');
	
	function isRakiyaNumber(number) {
		var numberAsString = number + " ";
		if (numberAsString.length > 3) {
			for (var i = 0; i < numberAsString.length - 1; i++) {
				var searchNumber = numberAsString[i] + numberAsString[i + 1];
				
				for (var j = i + 2; j < numberAsString.length - 1; j++) {
					
					if (searchNumber === numberAsString[j] + numberAsString[j + 1]) {
						return true;
					}
				}
			}
		}
		return false;
	}
}