const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
require('./api/Models/db')

const videoRoutes  = require('./api/routes/videos');
const playlistRoutes  = require('./api/routes/Playlist');

// for logging
app.use(morgan('dev'));

// body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors error Handling
app.use((req,res,next)=>
{
res.header('Access-Control-Allow-Origin','*');
res.header("Access-Control-Allow-Headers",'*');
if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','POST,GET,DELETE');
    return res.status(200).json({});
    }
    next();
});


//List of routers are mentioned below
app.use('/videos',videoRoutes);
app.use('/playlists',playlistRoutes);

// error is been created and forwarded by using next
app.use((req, res, next) =>{
    const error =  new Error('Not Found');
    error.status = 404;
    next(error);
});


// all unhandled errors anywhere in application were catched here
app.use((error,req,res,next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    });
});

module.exports = app;