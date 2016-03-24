function daggersAndSwords(input) {
	console.log('<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>');
	
	for (var i = 0; i < input.length; i++) {
		var bladeLength = Math.floor(input[i]);
		var application = '';
		var typeOfBlade = '';
		var reminder = bladeLength % 5;
		
		bladeLength > 40 ?	typeOfBlade = 'sword': typeOfBlade = 'dagger';
		
		if (reminder == 1 || reminder == 6) {
			application = 'blade';
		}
		else if (reminder == 2 || reminder == 7) {
			application = 'quite a blade';
		}
		else if (reminder == 3 || reminder == 8) {
			application = 'pants-scraper'
		}
		else if (reminder == 4 || reminder == 9) {
			application = 'frog-butcher';
		}
		else if (reminder == 5 || reminder == 10 || reminder == 0) {
			application = '*rap-poker';
		}
		
		if (bladeLength > 10) {
			console.log('<tr><td>%s</td><td>%s</td><td>%s</td></tr>', bladeLength, typeOfBlade, application);
		}
	}
	console.log('</tbody>\n</table>');
}