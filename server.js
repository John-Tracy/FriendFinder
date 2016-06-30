// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// uses any static files required by the html files.
app.use(express.static('app/public/'));
// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER
// The below points our server to "route" files within the directory.
// ================================================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app); 


// Starts the server 
// =============================================================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});