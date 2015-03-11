var morgan = require('morgan');
var express = require( 'express' );
var app = express();
var swig = require('swig');

app.use(morgan('dev'));

app.listen("3000");

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/views");

swig.setDefaults({ cache: false }); //turn off caching


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get("/", function(req, res){

	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get("/news", function(req, res){

	res.send("Hello from news! david addition");
});

app.get("/updated", function(req, res){

	res.send("Hello from updated!");
});