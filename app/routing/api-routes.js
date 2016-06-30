//========================================
// loading data from the friends api
//========================================
var friendsList = require('../data/friends.js');
var path = require('path');



//========================================
// Routing
//========================================

module.exports = function(app) {

	app.get('/api/friends', function(req, res){
		res.json(friendsList);
	});

	app.post('/api/friends', function(req, res){
		friendsList.push(req.body);

		console.log(req.body);
		// res.json(friendsList); // KEY LINE
	})

};