var http = require('http');
var https = require('https');
var tls = require('tls');
var fs = require('fs');
var app = require('./config/express')();

require('./config/passport')();
require('./config/database.js')('mongodb://localhost/db_lakatitas');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server escutando na porta ' + app.get('port'));
});

/*
const credentials = {
	key: fs.readFileSync("ntask.key", "utf8"),
	cert: fs.readFileSync("ntask.cert", "utf8")
}

https.createServer(credentials, app).listen(app.get("port"), () => {
	console.log('Express Server escutando na porta ' + app.get('port'));
});
*/


