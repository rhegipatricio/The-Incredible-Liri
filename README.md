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

01) TWITTER

The command "my-tweets" pulls from the Twitter API. In this instance, it'll pull from my dummy Twitter account I specifically created for this assignment. 

![In this instance, it'll pull from my dummy Twitter I specifically created for this assignment ](/images/01_twitter_generated_from.png)

The "node liri my-tweets" will request the first 20 tweets of the dummy Twitter account.

![](/images/02_twitter_command.png)

Here are tweets! The earlier tweets are at the bottom, much like twitter and show when the tweets were composed.

![](/images/03_twitter_results.png)

Notice how they matchup with a screenshot of the actual twitter account tweets starting with the "Happy Father's Day" tweet and goes up.

![](/images/04_matchup.png)

02) SPOTIFY

The command "spotify-this-song" will pull from the spotify API. The user must replace "--song title--" with an actual song title to get desired result.

![](/images/05_spotify_command.png)

For this example, "The Memory Remains" by Metallica was chosen. The result brings back the Artist, Album, Song Title, and URL.

![](/images/06_spotify_results.png)

If spotify doesn't currently have that song or no URL exists, "null" will show under URL, such as with "My Name Is" by Eminem.

![](/images/07_spotify_null.png)

If no song is specifed, LIRI will default to "The Sign" by Ace of Base.

![](/images/08_spotify_no_specify.png)

03) OMDB

The command "movie-this" will request from the OMDB API. The user must replace "-movie title-" with an actual movie title to get desired result.

![](/images/09_omdb_command.png)

For this example, "Little Giants" was selected. The result brings back the Movie Title, Release Year, Internet Movie Database (IMDB) rating, the Country of Release, the language(s), the Plot/Synopsis, and the Main Cast.

![](/images/10_omdb_results.png)

If no film title has been entered by the user, LIRI will default to the film "Mr. Nobody". Notice how there is nothing after "movie-this". It is because it has been defaulted to "Mr. Nobody".

![](/images/11_omdb_no_specify.png)

04) DO-WHAT-IT-SAYS

The command "do-what-it-says" will pull the text from an an internal created random.txt file. In that file, there is only one line of text: spotify-this-song, "I Want it That Way" but notice how it didn't pull just the text, but also the Spotify information. That is because the command "spotify-this-song" is in it as well.

![](/images/12_do_what_it_says.png)

Lastly, a friendly reminder will open up if the user just enters "node liri". LIRI will request that the user enters one of the four commands (as well as what information the user wants to request such as the song title for Spotify after "spotify-this-song" and movie title for OMDB after "movie-this".

![](/images/13_no_option_selected.png)
