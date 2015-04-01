// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();
// Now that we have an app to build off of,
// we should set up some routes.


//Tell express to use EJS as its view engine
app.set("view engine", "ejs");

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true}));


// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'))


// Our first route will be `GET /` which will respond 

//Global Variable of Solution
var solution = [];

app.get('/', function(req,res) {
	res.render("index", { solution: solution });

});


// Create get solutions
app.get('/subtract/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var subtract = x - y;

   res.render("index", { solution: solution });
});

app.get('/multiply/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var multiply = x * y;

   res.render("index", { solution: solution }); 
});

app.get('/divide/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var divide = x / y;

   res.render("index", {solution: solution }); 
});


// Post Solutions
app.post('/add', function(req, res) {
	// solution.push(req.body);
	var x = Number(req.body.number1);
	var y = Number(req.body.number2);
	var sum = (x + y);
	solution.push(sum);
	res.redirect('/');
});


app.post('/subtract', function(req, res) {
	var x = Number(req.body.number1);
	var y = Number(req.body.number2);
	var sum = (x - y);
	solution.push(sum);
	res.redirect('/');
});

app.post('/multiply', function(req, res) {
	var x = Number(req.body.number1);
	var y = Number(req.body.number2);
	var sum = (x * y);
	solution.push(sum);
	res.redirect('/');
});

app.post('/divide', function(req, res) {
	var x = Number(req.body.number1);
	var y = Number(req.body.number2);
	var sum = (x / y);
	solution.push(sum);
	res.redirect('/');
});

// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);