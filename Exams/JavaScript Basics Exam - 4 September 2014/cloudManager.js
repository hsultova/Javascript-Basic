function cloudManager(input) {
	var filesInfo = {};
	for (var i = 0; i < input.length; i++) {
		var line = input[i].trim().split(' ');
		var name = line[0];
		var extension = line[1];
		var memory = line[2];
		var memoryNumber = Number(memory.split('MB')[0]);
		
		if (!filesInfo[extension]) {
			filesInfo[extension] = {
				"files": [],
				"memory": 0
			};
		}
		
		if (filesInfo[extension]["files"].indexOf(name) == -1) {
			filesInfo[extension]["files"].push(name);
			filesInfo[extension]["memory"] += memoryNumber;
		}
	}
	
	var fileKeyes = Object.keys(filesInfo).sort();
	var output = {};
	for (var i = 0; i < fileKeyes.length; i++) {
		var key = fileKeyes[i];
		output[key] = filesInfo[key];
		output[key]["files"].sort();
		output[key]['memory'] = JSON.parse(output[key]['memory'], function (key, b) { return b.toFixed(2) });
	}
	
	console.log(JSON.stringify(output)); 

}