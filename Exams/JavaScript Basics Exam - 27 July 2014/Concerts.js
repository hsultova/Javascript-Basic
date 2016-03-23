function concerts(input)
{
	var concerts = {};

	for (var i in input)
	{
		var line = input[i].trim().split(/\s+\|\s+/g);
		var band = line[0];
		var town = line[1];
		var venue = line[3];

		if (!concerts[town])
		{
			concerts[town] = {};
		}

		if (!concerts[town][venue])
		{ 
			concerts[town][venue] = [];
		}

		if (concerts[town][venue].indexOf(band) == -1)
		{ 
			concerts[town][venue].push(band);
		}
	}
	
	concerts = sortObject(concerts);
	for (var town in concerts)
	{
		concerts[town] = sortObject(concerts[town]);
		for (venue in concerts[town])
		{ 
			concerts[town][venue].sort();
		}
	}
	
	function sortObject(obj)
	{
		var townKeys = Object.keys(obj).sort();
		var output = {};
		for (var j in townKeys)
		{
			output[townKeys[j]] = obj[townKeys[j]];
		}
		return output;
	}
	console.log(JSON.stringify(concerts));
}