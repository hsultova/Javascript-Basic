function calcCylinderVol(arr){
	var r = arr[0];
	var h = arr[1];
	var v = Math.PI * r * r * h;
	console.log(v.toFixed(3));
} 

calcCylinderVol([2,4]);
calcCylinderVol([5,8]);
calcCylinderVol([12,3]);