
var fs = require('fs');

var index = function(req, res) {
	var page = loadPage('route.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

var home = function(req, res) {
	var page = loadPage('templates/home.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

var profiles = function(req, res) {
	var page = loadPage('templates/profile.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

var messages = function(req, res) {
	var page = loadPage('templates/messages.html');
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(page);
}

var loadPage = function(pageName) {
	return fs.readFileSync('./angular/'+pageName);
}

exports.index = index;
exports.home = home;
exports.profiles = profiles;
exports.messages = messages;
