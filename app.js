var morgan = require('morgan');
var express = require( 'express' );
var app = express();

app.use(morgan('dev'));

app.listen("3000");

app.get("/", function(req, res){

	res.send("Hello, world!");
});

app.get("/news", function(req, res){

	res.send("Hello from news! david addition");
});

app.get("/updated", function(req, res){

	res.send("Hello from updated!");
});