function keepTheChange(input) {
	var bill = Number(input[0]);
	var mood = input[1];
	var tip = 0;

	if (mood === 'happy') {
		tip = bill * 0.1;
	}
	else if (mood === 'married') {
		tip = bill * 0.0005;
	}
	else if (mood === 'drunk') {
		var firstTip = bill * 0.15;
		var firstTipAsString = firstTip + "";
		var n = Number(firstTipAsString[0]);
		tip = Math.pow(firstTip, n);
	}
	else { 
		tip = bill * 0.05;
	}

	console.log(tip.toFixed(2));	
}