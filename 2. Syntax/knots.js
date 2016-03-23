function calculateKnots(number){
	var result = number / 1.852;
	console.log(parseFloat(result).toFixed(2));
}

calculateKnots(20);
calculateKnots(112);
calculateKnots(400);