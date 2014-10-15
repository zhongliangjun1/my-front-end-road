
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , httpDemo = require('./angular/server/httpDemo')
  , routeDemo = require('./angular/server/routeDemo')
  , windowDemo = require('./js/windowServer');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'angular')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/httpDemo', httpDemo.index);
app.get('/httpDemo/persons', httpDemo.persons)

app.get('/routeDemo', routeDemo.index);
app.get('/routeDemo/home.html', routeDemo.home);
app.get('/routeDemo/profile.html', routeDemo.profiles);
app.get('/routeDemo/messages.html', routeDemo.messages);
app.get('/routeDemo/loadMessages', routeDemo.loadMessages);

app.get('/window/open', windowDemo.open);
app.get('/window/close', windowDemo.close);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
