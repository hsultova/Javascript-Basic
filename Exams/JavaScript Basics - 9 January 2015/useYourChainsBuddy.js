function solve(input)
{
	var pTag = input[0].match(/<p>(.*?)<\/p>/g);
	var text = [];
	var output = '';
	
	for (var i in pTag)
	{
		text.push(pTag[i].split(/<p>|<\/p>/g)[1]);
	}
	
	for (var j in text)
	{
		text[j] = text[j].replace(/[^a-z0-9]/g, ' ');
		text[j] = text[j].replace(/[a-z]/g, function (l)
		{
			var code = l.charCodeAt(0);
			if (code < 110)
			{
				l = String.fromCharCode(code + 13);
			}
			else
			{
				l = String.fromCharCode(code - 13);
			}
			return l;
		});
		text[j] = text[j].replace(/ +/g, ' ');
		
		output += text[j];
	}
	
	console.log(output);
}