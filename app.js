var morgan = require('morgan');
var express = require( 'express' );
var app = express();
var swig = require('swig');
swig.setDefaults({ cache: false }); //turn off caching

var routes = require('./routes');

app.use(morgan('dev'));
app.listen("3000");
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/views");

app.use('/', routes);
app.use(express.static(__dirname + '/public'));



