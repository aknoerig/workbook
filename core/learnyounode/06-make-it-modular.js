
var module06 = require('./module06');

var dir = process.argv[2];
var ext = process.argv[3];

module06(dir, ext, print);

function print(err, list) {

	if (err) {
		console.log("ERROR: " + err);
		return;
	}

	for (var i=0; i<list.length; i++) {

		console.log(list[i]);

	}

}