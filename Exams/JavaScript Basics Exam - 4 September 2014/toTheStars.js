function toTheStars(input) {
	var data = [];
	var systemCoordinates = [];
	var systemNames = [];
	var normandyCoordinates = [];
	
	var n = 0;
	var location = '';
	
	for (var i = 0; i < input.length; i++) {
		data.push(input[i].split(/\s+/g));
	}
	
	for (var row = 0; row < data.length; row++) {
		if (row >= 0 && row < 3) {
			systemCoordinates.push([Number(data[row][1]), Number(data[row][2])]);
			systemNames.push(data[row][0]);
		}
		if (row == 3) {
			normandyCoordinates = [Number(data[3][0]), Number(data[3][1])]
		}
		if (row == 4) {
			n = Number(data[4][0]);
		}
	}
	
	var system1Ranges = [];
	var system2Ranges = [];
	var system3Ranges = [];
	
	for (row = 0; row < systemCoordinates.length; row++) {
		for (var x = systemCoordinates[row][0] - 1; x <= systemCoordinates[row][0] + 1; x++) {
			for (var y = systemCoordinates[row][1] - 1; y <= systemCoordinates[row][1] + 1; y++) {
				if (row === 0) {
					system1Ranges.push(x + ',' + y);
				}
				if (row === 1) {
					system2Ranges.push(x + ',' + y);
				}
				if (row === 2) {
					system3Ranges.push(x + ',' + y);
				}
				
			}
		}
	}
	var normandyCoordinatesAsString = normandyCoordinates[0] + ',' + normandyCoordinates[1];
	for (var k = 0; k < n + 1; k++) {
		
		if (system1Ranges.indexOf(normandyCoordinatesAsString) !== -1) {
			location = systemNames[0];
		}
		
		else if (system2Ranges.indexOf(normandyCoordinatesAsString) !== -1) {
			location = systemNames[1];
		}
		else if (system3Ranges.indexOf(normandyCoordinatesAsString) !== -1) {
			location = systemNames[2];
		}
		else {
			location = 'space'
		}
		console.log(location.toLowerCase());
		normandyCoordinates[1]++;
		normandyCoordinatesAsString = normandyCoordinates[0] + ',' + normandyCoordinates[1];
	}

}