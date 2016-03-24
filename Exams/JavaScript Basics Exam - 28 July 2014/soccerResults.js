function solve(input)
{
	var results = {};
	
	for (var i in input)
	{
		var line = input[i].replace(/\/|\:|\-/g, ' - ');
		var tokens = line.trim().split(/\s+\-\s+/g);
		var homeTeam = tokens[0];
		var awayTeam = tokens[1];
		var homeGoals = Number(tokens[2]);
		var awayGoals = Number(tokens[3]);
		
		if (!results[homeTeam])
		{
			results[homeTeam] = {
				"goalsScored" : 0,
				"goalsConceded" : 0,
				"matchesPlayedWith" : []
			};
		}
		if (results[homeTeam].matchesPlayedWith.indexOf(awayTeam) == -1)
		{
			results[homeTeam].matchesPlayedWith.push(awayTeam);
		}
		
		results[homeTeam].goalsScored += homeGoals;
		results[homeTeam].goalsConceded += awayGoals;
		
		if (!results[awayTeam])
		{
			results[awayTeam] = {
				"goalsScored" : 0,
				"goalsConceded" : 0,
				"matchesPlayedWith" : []
			};
		}
		if (results[awayTeam].matchesPlayedWith.indexOf(homeTeam) == -1)
		{
			results[awayTeam].matchesPlayedWith.push(homeTeam);
		}
		results[awayTeam].goalsScored += awayGoals;
		results[awayTeam].goalsConceded += homeGoals;
	}
	
	var resultsKeys = Object.keys(results).sort();
	var sortedResults = {};
	for (var j in resultsKeys)
	{
		var key = resultsKeys[j];
		sortedResults[key] = results[key];
		sortedResults[key]["matchesPlayedWith"].sort();
	}
	
	console.log(JSON.stringify(sortedResults));
}