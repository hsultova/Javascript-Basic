function groupBy(criteria) {
	var groupPeople = {};
	
	if (criteria === 'firstName') {
		people.forEach(function (element) {
			var key = 'Group ' + element.firstName;
			if (!(key in groupPeople)) {
				groupPeople[key] = [];
				groupPeople[key].push(element.toString());
			}
			else {
				groupPeople[key].push(element.toString());
			}
		});
		return groupPeople;
	}
	
	if (criteria === 'lastName') {
		people.forEach(function (element) {
			var key = 'Group ' + element.lastName;
			if (!(key in groupPeople)) {
				groupPeople[key] = [];
				groupPeople[key].push(element.toString());
			}
			else {
				groupPeople[key].push(element.toString());
			}
		});
		return groupPeople;
	}
	
	if (criteria === 'age') {
		people.forEach(function (element) {
			var key = 'Group ' + element.age;
			if (!(key in groupPeople)) {
				groupPeople[key] = [];
				groupPeople[key].push(element.toString());
			}
			else {
				groupPeople[key].push(element.toString());
			}
		});
		return groupPeople;
	}
}

function buildPerson(firstName, lastName, age) {
	return {
		firstName : firstName,
		lastName: lastName,
		age: age,
		toString: function () { return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')'; }
	}
}

var people = [
	new buildPerson("Scott", "Guthrie", 38),
	new buildPerson("Scott", "Johns", 36),
	new buildPerson("Scott", "Hanselman", 39),
	new buildPerson("Jesse", "Liberty", 57),
	new buildPerson("Jon", "Skeet", 38)
];

console.log(groupBy('firstName'));
console.log('\n');
console.log(groupBy('lastName'));
console.log('\n');
console.log(groupBy('age'));


