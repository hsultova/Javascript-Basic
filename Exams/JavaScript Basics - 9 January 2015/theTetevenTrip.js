function trip(input) {
	for (var i = 0; i < input.length; i++) {
		var data = input[i].split(' ');
		var carModel = data[0];
		var fuelType = data[1];
		var routeNumber = Number(data[2]);
		var luggageWeight = Number(data[3]);
		var consumption = 0;
		var quantityOfFuel = 0;

		if (fuelType == 'gas') {
			consumption = 1.2 * 10;
		}
		else if (fuelType == 'petrol') {
			consumption = 10;
		}
		else if (fuelType == 'diesel') {
			consumption = 0.8 * 10;
		}
		else { 
			consumption = 'invalid fuel type';
		}
		var totalConsumption =consumption + luggageWeight * 0.01; 
		var total = 0;
		var extraSnow = 0;
		if (routeNumber === 1) {
			total = 110 * totalConsumption / 100;
			extraSnow = 10 * totalConsumption * 0.3 / 100;
		}
		else if (routeNumber === 2) {
			total = 95 * totalConsumption / 100; 
			extraSnow = 30 * totalConsumption * 0.3 / 100;
		}
		quantityOfFuel = extraSnow + total;
		console.log(carModel + ' ' + fuelType + ' ' + routeNumber + ' ' + Math.round(quantityOfFuel));
	}
}