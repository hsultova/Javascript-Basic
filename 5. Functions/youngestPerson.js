function findYoungestPerson(array) {
	var filtredSmartphones = array.filter(function (e) { return e.hasSmartphone === true});
	var sortedArray = filtredSmartphones.sort(function (a, b) { return a - b; });
	var youngestPersonName = sortedArray[0].firstname + ' ' + sortedArray[0].lastname;

	console.log('The youngest person is ' + youngestPersonName);
}

var people = [
	{ firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false }, 
	{ firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
	{ firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
	{ firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);