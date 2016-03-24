function pricesTrends(input) {
	var prices = [];
	var trend = '';
	
	for (var i = 0; i < input.length; i++) {
		prices.push(Number(Number(input[i]).toFixed(2)));
	}
	
	console.log('<table>\n<tr><th>Price</th><th>Trend</th></tr>');
	
	for (var i = 0; i < prices.length; i++) {

		if (prices[i] > prices[i - 1]) {
			trend = 'up';
		}
		else if (prices[i] < prices[i - 1]) {
			trend = 'down';
		}
		else {
			trend = 'fixed';
		}
		console.log('<tr><td>%s</td><td><img src="%s.png"/></td></td>', prices[i].toFixed(2), trend);
	}
	
	console.log('</table>');
}