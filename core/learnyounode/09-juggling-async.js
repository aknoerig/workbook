var http = require('http');

var urls = [
	process.argv[2], process.argv[3], process.argv[4]
]

var results = [];

var count = 0;


for (var i=0; i<urls.length; i++) {
	getURL(urls[i], i, print);
}


function getURL(url, i, callback) {

	var str = "";

	http.get(url, function(socket){

		socket.setEncoding('utf8');

		socket.on("data", function(chunk) {
			str += chunk;
		});


		socket.on("end", function(chunk) {
			callback(null, str, i);
		});

	});

}

function print(err, data, i) {

	results[i] = data;
	count++;

	if (count === 3) {
		for (var i=0; i<count; i++) {
			console.log(results[i]);
		}
	} 

}
