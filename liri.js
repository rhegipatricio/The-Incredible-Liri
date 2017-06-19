//processes
var process2 = process.argv[2];
var process3 = process.argv[3];
//variables
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require ('fs'); 
//switch cases and defaults
switch (process2) {
	//twitter case
	case "my-tweets":
		twitter();
		break;

	//spotify case
	case "spotify-this-song":
		//if user choice is undefined, it will default to "The Sign by Ace of Base"
		if (process3 === undefined) {
			process3 = "The Sign - Ace of Base";
			spotify();
		} else {
			spotify();
		}
		break;

	//omdb case
	case "movie-this":
		//if user choice is undefined, film will default to "Mr. Nobody"
		if (process3 === undefined) {
			process3 = "Mr. Nobody";
			omdb();
		} else {
			omdb();
		}
		break;

	//random case		
	case "do-what-it-says":
		random();
		break;

	//if no responses are specified
	default:
		console.log("Please choose one of the following: my-tweets, spotify-this-song, movie-this, do-what-it-says")
}
//Twitter
function twitter () {
	//console.log("tweet this shiz");
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
//Spotify
function spotify () {
	//spotify keys requestd
	var spotify = new Spotify({
		id: "bef31be7a3b84a6d9fe98ddd7bf12b61", 
		secret: "3a1ae5d36aaa45bcac14b95c91f653be"
	});
	spotify.search({ type: 'track', query: process3 }, function(err, data) {
  		if (err) {
    	return console.log('Error occurred: ' + err);
  	}
  	//Results 
	console.log("-----------------------------------------------------")
	console.log("Artist: 	" + data.tracks.items[0].album.artists[0].name);
	console.log("Album: 		" + data.tracks.items[0].album.name);
	console.log("Song: 		" + data.tracks.items[0].name);
	console.log("URL:  		" + data.tracks.items[0].preview_url);
	console.log("-----------------------------------------------------"); 
	});
}
//OMDB
function omdb (){
	//requests from OMDB. Process3 is the user input (what movie they want to research). API key is 40e9cece.
	request("http://www.omdbapi.com/?t=" + process3 + "&apikey=40e9cece", function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("-----------------------------------------------------");
			console.log("Movie Title: 		" + JSON.parse(body).Title);
			console.log("Release Year: 		" + JSON.parse(body).Year);
			console.log("IMDB Rating: 		" + JSON.parse(body).imdbRating);
			console.log("Country of release: 	" + JSON.parse(body).Country);
			console.log("Languages: 		" + JSON.parse(body).Language);
			console.log("Plot/Synopsis: 		" + JSON.parse(body).Plot);
			console.log("Main Cast: 		" + JSON.parse(body).Actors);
			console.log("-----------------------------------------------------");
			//console.log(response);
		}
	})
}
//Do What It Says
function random (){
	//pulls text from random.txt
	fs.readFile("random.txt", "utf8", function(err, data){
		if (err){
			return console.log(err);
		}
		var dataSplit = data.split(",");
		//command = data [0];
		process3 = dataSplit[1];

		spotify();
		})
}



