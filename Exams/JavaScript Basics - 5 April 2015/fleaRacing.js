function solve(input)
{
	var jumps = parseInt(input[0]);
	var lengthTrack = parseInt(input[1]);
	var flea = [];
	var startJump = [];
	var matrix = [];
	
	for (var i = 2; i < input.length; i++)
	{
		var tokens = input[i].split(',');
		flea.push([tokens[0][0].toUpperCase(), parseInt(tokens[1]), tokens[0]]);
	}
	
	fillMatrix();
	
	for (var f in flea)
	{
		startJump.push(flea[f][1]);
	}
	
	for (var jump = 1; jump <= jumps; jump++)
	{
		for (var f = 0; f < flea.length; f++)
		{
			
			if (jump * startJump[f] >= (lengthTrack - 1))
			{
				flea[f][1] = jump * startJump[f];
				addLettersInMatrix();
				printMatrix();
				console.log('Winner: ' + flea[f][2]);
				return;
			}
			else
			{
				flea[f][1] = jump * startJump[f];
			}
		}
	}
	
	
	addLettersInMatrix();
	printMatrix();
	console.log('Winner: ' + flea[flea.length - 1][2]);
	
	
	
	function fillMatrix()
	{
		for (var row = 0; row < flea.length; row++)
		{
			matrix[row] = [];
			for (var col = 0; col < lengthTrack; col++)
			{
				matrix[row][col] = '.';
			}
		}
	}
	
	function addLettersInMatrix()
	{
		for (var row = 0; row < flea.length; row++)
		{
			for (var col = 0; col < lengthTrack; col++)
			{
				if (col == flea[row][1])
				{
					matrix[row][col] = flea[row][0];
				}
			}
		}
	}
	function printMatrix()
	{
		var output = '';
		
		for (var i = 0; i < flea.length; i++)
		{
			for (var j = 0; j < lengthTrack; j++)
			{
				output += matrix[i][j];
			}
			if (i != flea.length - 1)
			{
				output += '\n';
			}
			
		}
		
		printAudience();
		console.log(output);
		printAudience();
	}
	
	function printAudience()
	{
		
		var output = '';
		
		for (var j = 0; j < lengthTrack; j++)
		{
			output += '#';
		}
		output += '\n';
		for (var j = 0; j < lengthTrack; j++)
		{
			output += '#';
		}
		
		
		console.log(output);
	}
}