var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, filter);


	function filter(err, list) {

		var result = [];

		if (err) return callback(err);

		for (var i=0; i<list.length; i++) {
			
			if (path.extname(list[i]) === '.'+ext) {

				result.push(list[i]);

			}
		}

		callback(null, result);

	}

}