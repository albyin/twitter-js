var morgan = require('morgan');
var express = require( 'express' );
var app = express();

app.use(morgan('dev'));

app.listen("3000");

app.get("/", function(req, res){

	res.send("Hello, world!");
});