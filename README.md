# RestApi for online videos using Nodejs

This project is designed to provide a RESTful api service to handle the requests. Cross-origin resource sharing is been handled with in the api.
Using this OnlineVideo_RestApi_Nodejs, clients can creates and manages the videos and the playlists.

**Video**
* Creating a video schema that accepts Title, thumbnailURL, VideoURL, Duration in seconds as input parameters. 
* Get the details of individual video by passing the unique video id.
* Delete the exisiting video by passing the unique video id..

**Playlist**
* Creating a new playlist schema that accepts list of videos, Title for playlist and websiteURL as input parameters.
* Fetch the details of list of videos, that were present in particular playlist by passing the uique playlist id.
* Delete the existing playlist by passing the uique playlist id.


## Getting Started

* Download the project files to local folder.
* Install the node modules to the downloaded project i.e., OnlineVideo_RestApi_Nodejs via **'npm install`** in visual studio code terminal or in command prompt. 
* Start the mongoDb server, which run's under the port `"localhost:27017"` and create DataBase and name it of your choice.
* Change the Database_Name in project which can be found in the below mentioned path to user preferred database_name.
> `api -> Models -> db.js`  
> `mongoose.connect('mongodb://localhost:27017/`Database_Name`', {useNewUrlParser :true}`.
* Start the API server by running the command **`npm start`** in visual studio command terminal, which run's the application in **`http://localhost:3000`**.
* Developers may call the API via protocol methods GET, POST and DELETE to perform operations, using the language of their choice.
* To test the API we can use Postman/Fiddler.

### Prerequisites
* Node.js and NPM
* MongoDb compass community
* Visual Studio Code

## Resources URI
Below is a list of resources URI endpoints. 

### Video
Video endpoint URI allows client to retrieve, create and delete Video.

| Method | URI Endpoint |
| ------------- | ------------- |
| GET | http://localhost:3000/videos/ |
| GET | http://localhost:3000/videos/:VideoId |
| POST | http://localhost:3000/videos/ |
| DELETE | http://localhost:3000/videos/:VideoId |

For detailed schema, parameters, code snippet and returned responses, read [Video - Code Snippet](https://github.com/gandholi-kumar/OnlineVideo_RestApi_Nodejs/blob/master/Video%20Code%20Snippet.pdf)

### Playlist
Playlist endpoint URI allows client to retrieve, create and delete Playlist.

| Method | URI Endpoint |
| ------------- | ------------- |
| GET | http://localhost:3000/playlists |
| GET | http://localhost:3000/playlists/:Playlist_id |
| POST | http://localhost:3000/playlists |
| DELETE | http://localhost:3000/playlists/:Playlist_id |

For detailed schema, parameters, code snippet and returned responses, read [Playlist - Code Snippet](https://github.com/gandholi-kumar/OnlineVideo_RestApi_Nodejs/blob/master/Playlist%20Code%20Snippet.pdf)

## Built With

* Node.js - Server side framework
* Express.js - It offer various features like template engines, simplified multiple routing, database integration.
* Body-parser - Parse the content in the body.
* Mongoose - Database connection to store data.
* Morgan - For logging request details.
* Nodemon - Detect the changes and run the server automatically

## Author

* **Gandholi Saiarunkumar** - [gandholi-kumar](https://github.com/gandholi-kumar)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/gandholi-kumar/OnlineVideo_RestApi_Nodejs/blob/master/LICENSE) file for details
