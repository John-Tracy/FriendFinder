//========================================
// loading data from the friends api
//========================================
var friendsList = require('../data/friends.js');
var path = require('path');



//========================================
// Routing
//========================================

module.exports = function(app) {

	var friendData = [];

	app.get('/api/friends', function(req, res){
		res.json(friendsList);
	});

	app.post('/api/friends', function(req, res){
		
		var compatibility = [];
			for(var i = 0; i < friendsList.length; i++){

				var differences = [];

				for(var x = 0; x < friendsList[i].scores.length; x++){
					var diff;
					 if(friendsList[i].scores[x] > req.body.scores[x]){
						 diff = friendsList[i].scores[x] - req.body.scores[x];
						 differences.push(diff);
						}
					else if(friendsList[i].scores[x] < req.body.scores[x]){
						 diff = req.body.scores[x] - friendsList[i].scores[x];
						 differences.push(diff);
						}
					else if(friendsList[i].scores[x] == req.body.scores[x]){
						diff = 0;
						differences.push(diff);
					}
				}

				function add(a, b){
					return a + b;
				};


				differences = differences.reduce(add, 0);


			compatibility.push({
					name: friendsList[i].name,
					picture: friendsList[i].picture,
					scores: differences
			});
				
			}

	var magicValue = Math.min(compatibility[0].scores, compatibility[1].scores, compatibility[2].scores);

	if(magicValue == compatibility[0].scores){
		res.json(compatibility[0]);
	}
	else if(magicValue == compatibility[1].scores){
		res.json(compatibility[1]);
	}
	else if(magicValue == compatibility[2].scores){
		res.json(compatibility[2]);
	}

	})

};