function scaleCourseGrades(input) {
	for (var i in input) {
		var score = input[i].score;
		score *= 1.1;
		
		input[i].score = parseFloat(score.toFixed(1));
		
		if (score >= 100) {
			input[i].hasPassed = true;
		}
		else {
			input[i].failed = true;
		}
	}
	
	var filtred = input.filter(function (e) { return e.hasPassed; });

	var sorted = filtred.sort(function (a, b) { return a.name.localeCompare(b.name) });
	
	console.log(sorted);

}

scaleCourseGrades([
	{
		'name' : 'Пешо',
		'score' : 91
	},
	{
		'name' : 'Лилия',
		'score' : 290
	},
	{
		'name' : 'Алекс',
		'score' : 343
	},
	{
		'name' : 'Габриела',
		'score' : 400
	},
	{
		'name' : 'Жичка',
		'score' : 70
	}
]
);