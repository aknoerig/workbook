var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res) {

	console.log(req.url)

	if (req.method === 'GET') {

		var urlobj = url.parse(req.url, true);

		isotime = urlobj.query.iso;

		var date = new Date(isotime);

		res.writeHead(200, { 'Content-Type': 'application/json' });

		if (urlobj.pathname === '/api/parsetime') {

			res.write( JSON.stringify(
				{
			      "hour": date.getHours(),
			      "minute": date.getMinutes(),
			      "second": date.getSeconds()
			    }
			) );

		}

		if (urlobj.pathname === '/api/unixtime') {

			res.write( JSON.stringify(
				{ "unixtime": date.getTime() }
			) );

		}


		res.end();

	}

})

server.listen(port)


