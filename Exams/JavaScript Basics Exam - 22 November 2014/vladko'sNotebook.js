function notebook(input)
{
	var results = {};
	
	for (var i = 0; i < input.length; i++)
	{
		var data = input[i].split('|');
		var color = data[0];
		
		if (!results[color])
		{
			
			
			results[color] = {
				"age" : 0,
				"name" : '',
				"opponents" : [],
				"rank" : 0,
				"win" : 0,
				"loss" : 0
			};
		}
		
		if (data[1] === 'age')
		{
			results[color].age = data[2];
		}
		else if (data[1] === 'name')
		{
			results[color].name = data[2];
		}
		else if (data[1] === 'win')
		{
			results[color].win++;
			results[color].opponents.push(data[2]);
		}
		else if (data[1] === 'loss')
		{
			results[color].loss++;
			results[color].opponents.push(data[2]);
		}
	}
	
	var colorKeys = Object.keys(results).sort();
	var sorted = {};
	for (var j in colorKeys)
	{
		var key = colorKeys[j];
		sorted[key] = results[key];
		sorted[key].rank = ((sorted[key].win + 1) / (sorted[key].loss + 1)).toFixed(2);
		sorted[key].opponents.sort();
		delete sorted[key].win;
		delete sorted[key].loss;
		
		if (sorted[key].name === '' || sorted[key].age === 0)
		{
			delete sorted[key];
		}
	}
	
	console.log(JSON.stringify(sorted));
}