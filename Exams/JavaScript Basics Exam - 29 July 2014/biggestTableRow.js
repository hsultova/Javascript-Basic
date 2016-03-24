function biggestTable(input) {
	var biggestSum = -Infinity;
	var biggestSumAsString = "";
	var nums;
	
	for (var i = 2; i < input.length - 1; i++) {
		var data = input[i];
		var regex = /\-?[\d\.]+/g;
		nums = data.match(regex);
		
		var sum = 0;
		
		if (nums !== null) {
			
			for (var j = 0; j < nums.length; j++) {
				sum += Number(nums[j]);
				
				if (sum > biggestSum) {
					biggestSum = sum;
					biggestSumAsString = biggestSum + ' = ';
					for (var k = 0; k < nums.length; k++) {
						biggestSumAsString += nums[k] + ' + '
					}
				}
			}
		}
	}
	
	if (biggestSumAsString === "") {
		console.log('no data');
	} else {
		console.log(biggestSumAsString.slice(0, biggestSumAsString.length - 2));
	}
}