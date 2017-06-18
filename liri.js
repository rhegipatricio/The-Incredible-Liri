
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
	//console.log("tweet this");
	var client = new Twitter(keys.twitterKeys);
	var params = {screen_name: 'ucfliri', limit: 20};

	client.get("statuses/user_timeline", function(error, tweets, response){
		if(error){
			console.log(error);
		}
		else{
			//console.log(tweets);
			}
			for(i = 0; i < tweets.length; i++){
				console.log(tweets[i].text);
				console.log(tweets[i].created_at);
				console.log("----------------------------------------");
		}

	});	


}

function spotify () {

var spotify = new Spotify({
	id: "bef31be7a3b84a6d9fe98ddd7bf12b61", 
	secret: "3a1ae5d36aaa45bcac14b95c91f653be"
});
 
spotify.search({ type: 'track', query: process3 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

//console.log(data.tracks.items[0]);
console.log(data.tracks.items[0].album.artists[0].name);
console.log(data.tracks.items[0].album.name); 
});







}




