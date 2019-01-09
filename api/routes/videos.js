const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const VideoModel = require('../Models/video.model');


// Fetch all records
router.get('/',(req,res,next) =>{
VideoModel.find()
.select('_id title thumbnailURL videoUrl duration')
.exec()
.then(doc => {
    const response ={
        count: doc.length,
        videos: doc
    }
    if(doc.length>0){
        res.status(200).json(response);
    }
    else{
        res.status(404).json({
            message: 'No videos were found'
        });
    }    
    })
.catch( err => {
    console.log(err);
    res.status(500).json({
        message: 'Some error occured!',
        error: err
    });
});
});

// Insert a new record
router.post('/',(req,res,next) =>{
    const video = new VideoModel();
    video._id =new mongoose.Types.ObjectId();
    video.title = req.body.title ;
    video.thumbnailURL = req.body.thumbnailURL;
    video.videoUrl = req.body.videoUrl;
    video.duration = req.body.duration;
    video
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Successfully inserted a video.',
                CreatedVideo: {
                    _id: result._id,
                    title: result.title,
                    thumbnailURL: result.thumbnailURL,
                    url: result.videoUrl,
                    duration: result.duration
                }
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Some error occured!',
                error:err
            });
        });
    
    });

// Get record by ID
router.get('/:VideoId',(req,res,next) =>{
    const id = req.params.VideoId;
    VideoModel.findById(id)
    .select('_id title thumbnailURL url duration')
    .exec()
    .then(doc => {
        if(doc){
            res.status(200).json({
                video: doc
            });
        }else{
            res.status(404).json({
                message:'Not a valid Video ID'
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

// Delete record by ID
router.delete('/:VideoId', (req, res, next) => {
    const id = req.params.VideoId;    
    VideoModel.findById(id)
    .exec()
    .then(doc => {
        if(doc){
            VideoModel.remove({ _id:doc._id })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Video deleted successfully'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: 'Some error occured!',
                    error: err
                });
            });
        }else{
            res.status(404).json({
                message:'Not a valid Video ID'
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

// Patch record by ID
router.patch('/:VideoId',(req,res,next)=>{
    const id = req.params.VideoId;
    const updateVideo = {};
    for(const item of req.body){
        updateVideo[item.propName] = item.value;
    }
    VideoModel.findById(id)
    .exec()
    .then(doc => {
        if(doc){
            VideoModel.updateOne({_id: id},{$set:updateVideo})
            .exec()
            .then(result =>{
                res.status(200).json({
                    message: 'Video details Updated'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: 'Some error occured!',
                    error: err
                });
            });
        }else{
            res.status(404).json({
                message:'Not a valid Video ID'
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

/*
Patch the date is sent in below mentioned structured
[
    {
        "propName": "(Parameter Name)",
        "value": "(Newly changed value)"
    }
]
 */




module.exports = router;