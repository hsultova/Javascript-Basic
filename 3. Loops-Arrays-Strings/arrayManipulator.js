function manipulateArray(input) {
	function isNumber(number) {
		return !isNaN(parseFloat(number)) && isFinite(number);
	}
	
	var filtred = input.filter(isNumber);
	
	filtred.sort(function (a, b) { return b - a });
	
	var maxNumber = filtred[0];
	var minNumber = filtred[filtred.length - 1];
	
	var frequentNumber = 0;
	
	function findMostFrequentNumber(arr) {
		var frequentNumber = 0;
		
		for (var index = 0; index < arr.length - 1; index++) {
			if (arr[index] === arr[index + 1]) {
				frequentNumber = arr[index];
			}
		}
		
		return frequentNumber;
	}
	
	console.log('Min number: ' + minNumber + '\nMax number: ' + maxNumber + '\nMost frequent number: ' + findMostFrequentNumber(filtred));
	console.log(filtred);
	
}

manipulateArray(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10 }, [10, 20, 30, 40]]);