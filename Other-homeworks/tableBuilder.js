function buildTable(arr) {
	var start = arr[0];
	var end = arr[1];
	var table;

	function printTable() {
		table = '<table><br><tr><th>Num</th><th>Square</th><th>Fib</th></tr>';
		for (start; start <= end; start++) {
			table += '<tr><td>' + start + '</td><td>'+ (start * start) + '</td><td>' + isFibonacciNumber(start) + '</td></tr>';
		}
		table += '<br></table>';
	}

	function isFibonacciNumber(number) {
		var previous = 0;
		var current = 1;

		while (previous <= number) {
			if (previous === number) { 
				return 'yes';
			}
			current +=previous;
			previous = current - previous;
		}
		return 'no';
	}

	//console.log(printTable());
	printTable();
	document.getElementById("table").innerHTML = table;
}

buildTable([2, 6]);