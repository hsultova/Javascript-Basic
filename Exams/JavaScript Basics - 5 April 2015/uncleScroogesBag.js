function solve(input)
{
	var sum = 0;
	var gold = 0;
	var silver = 0;
	var bronze = 0;
	
	for (var i in input)
	{
		var data = input[i].split(' ');
		var coin = data[0].toLowerCase();
		var coinValue = Number(data[1]);
		
		if (coin === 'coin')
		{
			if (coinValue % 1 == 0 && coinValue > 0)
			{
				sum += coinValue;
				gold = parseInt(sum / 100);
				silver = parseInt(sum % 100 / 10);
				bronze = parseInt(sum % 10);
			}
		}
	}
	console.log('gold : ' + gold);
	console.log('silver : ' + silver);
	console.log('bronze : ' + bronze);
}