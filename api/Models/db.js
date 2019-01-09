const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/OnlineVideos', {useNewUrlParser :true},
(error) =>{
    if(!error){console.log('MongoDB Connection Successful.')}
    else{console.log('Error in DB connection : '+error)}
});


require('./video.model');