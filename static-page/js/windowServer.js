var fs = require('fs');

var open = function(req, res) {
	var page = loadPage('window-open.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

var close = function(req, res) {
	var page = loadPage('window-close.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

exports.open = open;
exports.close = close;


var loadPage = function(pageName) {
	return fs.readFileSync('./js/'+pageName);
}