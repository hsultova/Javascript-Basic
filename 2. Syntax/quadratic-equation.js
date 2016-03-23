var a = parseFloat(prompt("a = "));
var b = parseFloat(prompt("b = "));
var c = parseFloat(prompt("c = "));

findQuadraticEquationRoots(a,b,c);

function findQuadraticEquationRoots(a, b, c){
	var x1;
	var x2;
	var d = b * b - 4 * a * c;
	
	if (d > 0){
	x1 = (-b + Math.sqrt(d)) / (2 * a);
	x2 = (-b - Math.sqrt(d)) / (2 * a);
	console.log('X1 = '  +  x1 + '\nX2 = ' + x2);
	}
	else if (d === 0){
		x1 = (-b ) / (2 * a);
		console.log('X = '  +  x1);
	}
	else{
		console.log('No real rots')
	}
}











