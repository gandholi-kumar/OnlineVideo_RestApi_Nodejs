
// Shuffled video list
ShuffleVideos = function(req){
    for(var j, x,i = req.length; 
        i; 
        j = parseInt(Math.random() * i), 
        x = req[--i],
        req[i] = req[j], 
        req[j] = x);
    return req;
}


// Implementation 
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
            title: playlist.name,
            websiteURL: playlist.websiteURL,
            videosList: ShuffleVideos(playlist.video)         
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
