var morgan = require('morgan');
var express = require( 'express' );
var app = express();
var swig = require('swig');
swig.setDefaults({ cache: false }); //turn off caching
var socketio = require('socket.io');

var routes = require('./routes');

app.use(morgan('dev'));
var server = app.listen(3000);
var io = socketio.listen(server);
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/views");

app.use('/', routes(io));
app.use(express.static(__dirname + '/public'));



