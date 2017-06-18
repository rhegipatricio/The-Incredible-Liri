
var process2 = process.argv[2];
var process3 = process.argv[3];

var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require ('fs'); 

switch (process2) {
	case "my-tweets":
		twitter();
		break;

	case "spotify-this-song":
		spotify();
		break;

	case "movie-this":
		ombd();
		break;

	case "do-what-it-says":
		readfile();
		break;

	default:
		console.log("Choose one of the following: my-tweets, spotify-this-song, movie-this, do-what-it-says")
}

function twitter () {
	console.log("tweet this");
	var client = new twitter(keys.twitterKeys);
	var params = {screen_name: 'ucfliri', limit: 20};

	client.get("statuses/user_timeline", function(error, tweets, response){
		if(error){
			console.log(error);
		}
		else{
			console.log(tweets);
			}
			for(i = 0; i < tweets.length; i++){
				//console.log(tweets[i].text);
				//console.log(tweets[i].created_at);
				//console.log("----------------------------------------");
		}

	});	


}





