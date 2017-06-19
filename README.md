# liri-bot-app

OVERVIEW

For this assignment, LIRI was created. Liri is and stands for Language Interpretation and Recognition Interface. It works in node and takes commands from the user and gives back data.

Liri pulls from APIs from Twitter, Spotify, and OMDB to generate it's response depending on the user's request. 

The user uses four specific commands, depending on what they want.

They are:
- "my-tweets"
- "spotify-this-song"
- "movie-this"
- "do-what-it-says"

TWITTER

The command "my-tweets" pulls from the Twitter API. In this instance, it'll pull from my dummy Twitter account I specifically created for this assignment. 

![In this instance, it'll pull from my dummy Twitter I specifically created for this assignment ](/images/01_twitter_generated_from.png)

The "node liri my-tweets" will request the first 20 tweets of the dummy Twitter account.

![](/images/02_twitter_command.png)

Here are tweets! The earlier tweets are at the bottom, much like twitter and show when the tweets were composed.

![](/images/03_twitter_results.png)

Notice how they matchup with a screenshot of the actual twitter account tweets starting with the "Happy Father's Day" tweet and goes up.

![](/images/04_matchup.png)

SPOTIFY

The command "spotify-this-song" will pull from the spotify API. The user must replace "--song title--" with an actual song title to get desired result.

![](/images/05_spotify_command.png)

For this example, "The Memory Remains" by Metallica was chosen. The result brings back the Artist, Album, Song Title, and URL.

![](/images/06_spotify_results.png)
