function writeResult(){
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	output.innerHTML = eval(input.value);
}