function solve(input)
{
	var message = input[0];
	var magicNumber = Number(input[1]);
	var matrix = [];
	var lines = [];
	var sum = 0;
	var output = '';
	
	if (magicNumber < 0)
	{
		magicNumber = 0;
	}
	
	for (var i = 2; i < input.length; i++)
	{
		var line = input[i].split(' ');
		lines.push(line);
	}
	
	for (var r = 0; r < input.length - 2; r++)
	{
		matrix[r] = [];
		for (var c = 0; c < line.length; c++)
		{
			matrix[r][c] = Number(lines[r][c]);
		}
	}
	
	for (var row = 0; row < input.length - 2; row++)
	{
		for (var col = 0; col < line.length; col++)
		{
			var firstNumber = matrix[row][col];
			for (var row2 = 0; row2 < input.length - 2; row2++)
			{
				for (var col2 = 0; col2 < line.length; col2++)
				{
					var secondNumber = matrix[row2][col2];
					
					if (row !== row2 && col !== col2)
					{
						if (magicNumber === firstNumber + secondNumber)
						{
							sum = row + row2 + col + col2;
						}
					}
				}
			}
		}
	}
	
	for (var pos = 0; pos < message.length; pos++)
	{
		var code = 0;
		if (pos === 0 || pos % 2 === 0)
		{
			code = Number(message.charCodeAt(pos)) + sum;
		} 
		else
		{
			code = Number(message.charCodeAt(pos)) - sum;
		}
		output += String.fromCharCode(code);
	}
	
	console.log(output);
}