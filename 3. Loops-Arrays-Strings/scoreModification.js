function scoreModification(input) {
	var filtred = input.filter(function (e) {
		if (e > 0 && e < 400) {
			return e;
		}
	})
	
	var downward = filtred.map(function (e) { return parseFloat((e * 0.8).toFixed(2));})
	
	downward.sort(function (a, b) { return a - b;})
	console.log(downward);
}

scoreModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);