const mongoose = require('mongoose');

var  playlistSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true},
    websiteURL: {type: String, required:true},
    video: [{type: mongoose.Schema.Types.ObjectId, ref: 'Video'}]
}); 


module.exports = mongoose.model('playlist',playlistSchema);