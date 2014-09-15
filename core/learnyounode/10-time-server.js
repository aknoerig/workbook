var net = require('net');

var server = net.createServer(function (socket) {

	var date = new Date();

	socket.write(date.getFullYear());
	socket.write('-');
	socket.write(date.getMonth());
	socket.write('-');
	socket.write(date.getDate());
	socket.write(' ');
	socket.write(date.getHours());
	socket.write(':');
	socket.write(date.getMinutes());
	socket.end('\n');


})

server.listen(process.argv[2]);