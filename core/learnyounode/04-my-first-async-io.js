var fs = require('fs');

var filename = process.argv[2];

var buf = fs.readFile(filename, 'utf8', callback);

function callback(err, data) {
	if (!err) {
		var str = data.toString();

		var lines = str.split('\n');

		console.log(lines.length - 1); 
	}
}


