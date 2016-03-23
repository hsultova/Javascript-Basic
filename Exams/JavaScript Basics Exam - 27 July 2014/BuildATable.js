function buildTable(arr) {
	var start = parseInt(arr[0]);
	var end = parseInt(arr[1]);
	
	function printTable() {
		console.log('<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
		for (start; start <= end; start++) {
			console.log('<tr><td>%s</td><td>%s</td><td>%s</td></tr>', start, start * start, isFibonacciNumber(start));
		}
		console.log('</table>');
	}
	
	function isFibonacciNumber(number) {
		var previous = 0;
		var current = 1;
		
		while (previous <= number) {
			if (previous === number) {
				return 'yes';
			}
			current += previous;
			previous = current - previous;
		}
		return 'no';
	}
	
	printTable();
}