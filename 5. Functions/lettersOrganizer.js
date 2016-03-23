function sortLetter(str, bool) {
	var strArray = [];
	for (var i = 0; i < str.length; i++) {
		strArray[i] = str[i];
	}
	if (bool === true) {
		strArray.sort(function (a, b) { return a.localeCompare(b); });
	}
	else {
		strArray.sort(function (a, b) { return b.localeCompare(a); });
	}
	return strArray.join("");
}

console.log(sortLetter('HelloWorld', true));
console.log(sortLetter('HelloWorld', false));
