var net = require('net');

var server = net.createServer(function (socket) {

	var date = new Date();
	

	socket.write(date.getFullYear().toString());
	socket.write('-');
	socket.write(leadingZero((date.getMonth()+1).toString()));
	socket.write('-');
	socket.write( leadingZero( date.getDate().toString() ) );
	socket.write(' ');
	socket.write(leadingZero(date.getHours().toString()));
	socket.write(':');
	socket.write(leadingZero(date.getMinutes().toString()));
	socket.write('\n');

	socket.end();


});

server.listen(process.argv[2]);


function leadingZero(str) {
	if (str.length === 1)
		return '0' + str;
	else
		return str;
}