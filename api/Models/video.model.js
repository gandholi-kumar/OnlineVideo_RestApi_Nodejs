const mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required:true},
    thumbnailURL: {type: String, required:true},
    videoUrl: {type: String, required:true},
    duration:{type: Number, required:true}
}); 


module.exports = mongoose.model('Video',videoSchema);