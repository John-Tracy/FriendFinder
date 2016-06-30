// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	
	// HTML GET Requests
	//---------------------------
	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));

	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// this is used in the case no matching route is found
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});



};
