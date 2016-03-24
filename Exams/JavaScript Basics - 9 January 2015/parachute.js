function parachute(input)
{
	var parachutePosition = 0;
	
	for (var r = 0; r < input.length; r++)
	{
		for (var c = 0; c < input[r].length; c++)
		{
			var element = input[r][c];
			if (element === 'o')
			{
				parachutePosition = [r, c];
			}
		}
	}
	
	var output = '';
	
	for (var row = parachutePosition[0]; row < input.length; row++)
	{
		var originalPosition = new Array(parachutePosition[0], parachutePosition[1]);
		for (var col = 0; col < input[row].length; col++)
		{
			var element = input[row][col];
			if (element === '>')
			{
				parachutePosition[1]++;
			}
			
			if (element === '<')
			{
				parachutePosition[1]--;
			}
			
			output = parachutePosition[0] + ' ' + (parachutePosition[1]);
			
			elementUnderParachute = input[parachutePosition[0]][parachutePosition[1]];
			if (elementUnderParachute === '~')
			{
				console.log("Drowned in the water like a cat!");
				console.log(output);
				return;
			}			
			else if (elementUnderParachute === '_')
			{
				console.log("Landed on the ground like a boss!");
				console.log(output);
				return;
			}
			else if ((elementUnderParachute.search(/[\/|\\|\|]/g) > -1))
			{
				console.log("Got smacked on the rock like a dog!");
				console.log(output);
				return;
			}
		}
		parachutePosition[0]++;
	}
}