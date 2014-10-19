
var fs = require('fs');
var jade = require('jade');



var render = function(req, res) {

	var templateFile = fs.readFileSync('./jade/messages.jade');
	var fn = jade.compile(templateFile);

	var messages =  [
		{ name:'pangpang', sex:'male', img:'./image_1.jpg', msg:"AngularJS is one of the most popular Javascript frameworks available today. One of AngularJS's goals is to simplify the development process which makes it great for prototyping small apps, but its power allows scaling to full featured client side applications. " },
		{ name:'tutu', sex:'female', img:'./image_2.jpg', msg:"The combination ease of development, breadth of features, and performance has led to wide adoption, and with wide adoption comes many common pitfalls. This list captures common AngularJS mistakes, especially when scaling an app." }
	];

	var htmlOutput = fn({ 
		'title':'Jade - Template Engine', 
		'messages':messages 
	});

	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(htmlOutput);
}


exports.render = render;

