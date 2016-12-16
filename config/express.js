var express = require('express');
var load = require('express-load');
//var compression = require('compression');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var oneDay;

module.exports = function () {
	var app = express();
	//var oneDay = 86400000;
    //app.use(compression());
	app.set('port', 3000);
	//app.use(express.static('./public', { maxAge: oneDay }));
	app.use(express.static('./public'));
	app.use(favicon('./public/favicon.ico'));
	app.set('view engine', 'ejs');
	app.set('views', './views');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	load('models').then('controllers').then('routes').into(app);
	return app;
};

