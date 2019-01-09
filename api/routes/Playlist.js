const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PlaylistModel = require('../Models/playlist.model');
const VideoModel = require('../Models/video.model')

// Fetch all Playlist for a user
router.get('/',(req,res,next) =>{
    PlaylistModel.find()
    .select('_id name websiteURL video')
    .populate('video','_id title thumbnailURL url duration')
    .exec()
    .then(doc => {
        const response={
            count: doc.length,
            playlists: doc
        }
        if(doc.length>0){
            res.status(200).json({
                count: doc.length,
                playlist: doc.map( doc =>{
                    return{
                        _id : doc._id,
                        name: doc.name,
                        websiteURL: doc.websiteURL,
                        videos: doc.video
                    }
                })
            });
        }else{
            res.status(404).json({
                message: 'No playlists were found'
            });
        }
        
    })
    .catch(err => {
        res.status(500).json({
            message: 'Some error occured!',
            errror: err
        });
    });
});

// Insert list of video
router.post('/',(req,res,next) =>{
    VideoModel.findById(req.body.videoId)
    .then(video =>{           
            if(!video){
                return res.status(404).json({
                    message: 'Video not found'
                });
            }
            const playlist  = new PlaylistModel({
                _id : mongoose.Types.ObjectId(),
                name : req.body.name,
                websiteURL : req.body.websiteURL,
                video: req.body.videoId
            });
            return playlist.save();
        })
    .then(result => {
        res.status(201).json({
            message: 'Playlist created successfully'               
        });
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({
            message: 'Some error occured!',
            error: err
        })
    });  
});

// Fetch all the videos for a playlist based on ID
router.get('/:PlaylistId',(req,res,next) =>{
    PlaylistModel.findById(req.params.PlaylistId)
    .populate('video','_id title thumbnailURL url duration')
    .exec()
    .then(playlist =>{
        if(!playlist){
            return res.status(404).json({
                message: 'Playlist not found'
            });
        }
        res.status(200).json({
            videosList: playlist.video            
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            message: 'Some error occured!',
            errror: err
        });
    });
});

// Delete the Playlist based on ID
router.delete('/:PlaylistId',(req,res,next) =>{
    PlaylistModel.findById(req.params.PlaylistId)
    .exec()
    .then(doc =>{   
        console.log(doc);  
        if(doc || doc != null){
            PlaylistModel.remove({_id : doc._id})
            .exec()
            .then(result =>{
                res.status(200).json({
                    message: 'Playlist Deleted'
                });
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({                    
                    message: 'Some error occured!',
                    error: err
                });
            });
        }else{     
            res.status(404).json({
                message: 'Not a valid playlist ID'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Some error occured!',
            error: err
        });
    });    
});

module.exports = router;