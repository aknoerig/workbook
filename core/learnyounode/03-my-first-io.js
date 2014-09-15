var fs = require('fs');

var filename = process.argv[2];

//console.log(filename);

var buf = fs.readFileSync(filename);

var str = buf.toString();

var lines = str.split('\n');

console.log(lines.length - 1); 