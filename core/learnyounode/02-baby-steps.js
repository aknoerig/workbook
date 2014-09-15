var result = 0;

var args = process.argv.slice(2);

for (var i=0; i<args.length; i++) {
	//console.log(args[i]);
	result += parseInt(args[i]);
}

console.log(result);