
// var app = exports = module.exports = {};

var app = {};
var init = function(name) {
	console.log("before init app :" + JSON.stringify(app));
	app.name = name? name:'app';
	console.log("after init app :" + JSON.stringify(app));
	return app;
}

app.start = function(port) {
	console.log(app.name+' start on : ' + port);
}


module.exports = init;


