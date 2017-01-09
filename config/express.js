var express = require('express');
var load = require('express-load');
var path = require( 'path' );

 //var compression = require('compression');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var favicon = require('serve-favicon');
var oneDay;

module.exports = function () {
	var app = express();
	//var oneDay = 86400000;
    //app.use(compression());
	app.set('port', 3000);
	//app.use(express.static(path.resolve('public'), { maxAge: oneDay }));
	app.use(express.static(path.resolve('public')));
	
	app.get('/view[^\.]+$', function(req, res){
		console.log(req.url);
		res.set('Content-Type', 'text/html').sendFile(path.resolve('public') + '/index.html');
	});
	
	app.use(favicon('./public/favicon.ico'));
	app.set('view engine', 'ejs');
	app.set('views', './views');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	app.use(cookieParser());
	app.use(session({secret: 'homem avestruz', resave: true, saveUninitialized: true }));
	app.use(passport.initialize());
	app.use(passport.session());

	load('models').then('controllers').then('routes').into(app);
	
	return app;
	
};

