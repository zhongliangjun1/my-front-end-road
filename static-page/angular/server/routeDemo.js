
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

var loadMessages = function(req, res) {
	res.writeHead(200, {'Content-type': 'text/json;charset=utf-8'} );
	var msg =  [
		{ name:'pangpang', sex:'male', img:'./images/image_1.jpg', msg:"AngularJS is one of the most popular Javascript frameworks available today. One of AngularJS's goals is to simplify the development process which makes it great for prototyping small apps, but its power allows scaling to full featured client side applications. " },
		{ name:'tutu', sex:'female', img:'./images/image_2.jpg', msg:"The combination ease of development, breadth of features, and performance has led to wide adoption, and with wide adoption comes many common pitfalls. This list captures common AngularJS mistakes, especially when scaling an app." }
	];
	res.end(JSON.stringify(msg));
}

var loadPage = function(pageName) {
	return fs.readFileSync('./angular/'+pageName);
}

exports.index = index;
exports.home = home;
exports.profiles = profiles;
exports.messages = messages;
exports.loadMessages = loadMessages;




