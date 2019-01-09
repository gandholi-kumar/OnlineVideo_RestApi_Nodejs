# RestApi for online videos using Nodejs

This project is designed to provide a RESTful api service to handle the requests.
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
* Install the node modules to the downloaded project i.e., OnlineVideo_RestApi_Nodejs via `npm install` in visual studio code or in command prompt.  
* Change the Database_Name to user preferred database_name, which can be found in the below mentioned path
> `api -> Models -> db.js`  
> `mongoose.connect('mongodb://localhost:27017/Database_Name', {useNewUrlParser :true}`.
* Start the API server by running the command `npm start`, which inturn run in `http://localhost:3000`.
* Developers may call the API via protocol methods GET, POST and DELETE to perform operations, using the language of their choice.

### Prerequisites

* MongoDb 
* Visual Studio Code

## Resources URI
Below is a list of resources URI endpoints. 

### Video
Video endpoint URI allows client to retrieve, create and delete Video.

| Method | URI Endpoint |
| ------------- | ------------- |
| POST | http://localhost:3000/videos/ |
| GET | http://localhost:3000/videos/ |
| GET | http://localhost:3000/videos/:VideoId |
| DELETE | http://localhost:3000/videos/:VideoId |

Check below code snipped for detailed schema, parameters, code snippet and returned responses  

#### POST

**Endpoint URI**
`http://localhost:3000/videos/`

**Required Parameters**
`title` `thumbnailURL` `videoUrl` `duration`

**URL Snippet**  
```
-H 'Content-Type: application/json'  
-d "{  
        "title": "Title 1",  
        "thumbnailURL": "https://asbcsdfldjf.jpg",  
        "videoUrl": "https://asdfnsdlo.sldjflkdsf",  
        "duration": 5082  
     }"  
```

**On Success**  
```
{  
"code":"200",  
"message":"Video inserted Succesfully",  
}  
```

**On Failure**
```
{
"code":"500",
"message":"Some error occurred"
}
```

### Playlist
Playlist endpoint URI allows client to retrieve, create and delete Playlist.

| Method | URI Endpoint |
| ------------- | ------------- |
| GET | http://localhost:3000/playlists |
| GET | http://localhost:3000/playlists/:Playlist_id |
| POST | http://localhost:3000/playlists |
| DELETE | http://localhost:3000/playlists/:Playlist_id |

For detailed schema, parameters, code snippet and returned responses, read [Playlist Resource Documentation](asdf sdf)

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

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
