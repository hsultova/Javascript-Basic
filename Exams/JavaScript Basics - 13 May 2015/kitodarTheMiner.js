function solve(input)
{
	var silver = 0;
	var gold = 0;
	var diamonds = 0;
	
	for (var i = 0; i < input.length; i++)
	{
		var regex = /mine.*\s*-(.*)\s*:\s*(.*)/g;
		var match = regex.exec(input[i]);
		if (match != undefined)
		{
			var ore = match[1].trim().toLowerCase();
			var quantity = Number(match[2].trim());
			
			
			if (ore === 'gold')
			{
				gold += quantity;
			}
			else if (ore === 'silver')
			{
				silver += quantity;
			}
			else if (ore === 'diamonds')
			{
				diamonds += quantity;
			}
		}
	}
	
	console.log('*Silver: ' + silver);
	console.log('*Gold: ' + gold);
	console.log('*Diamonds: ' + diamonds);
}