var http = require('http')
var fs = require('fs');

var port = process.argv[2]

var url = process.argv[3]


var server = http.createServer(function (req, res) {

	var dst;

	var stream = fs.createReadStream(url);

	stream.on("open", function() {
		stream.pipe(res);
	});

})

server.listen(port)


