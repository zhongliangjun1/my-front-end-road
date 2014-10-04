var fs = require('fs');


var index = function(req, res) {
	var page = fs.readFileSync('./angular/http.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

var persons = function(req, res) {
	res.writeHead(200, {'Content-type': 'text/json;charset=utf-8'} );
	var body =  [
		{ 'name':'tom', 'sex':'male', 'capacity':'abled' },
		{ 'name':'jack', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'helen', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'jessey', 'sex':'male', 'capacity':'abled' },
		{ 'name':'kitty', 'sex':'female', 'capacity':'abled' }
	];
	res.end(JSON.stringify(body));
}



exports.index = index;
exports.persons = persons;