const Post = require('../databases/models/createAnnouncements');

module.exports = async (req, res) => {

    const post = await Post.find({ eventcode : req.body.eventcode });
    res.render('afues3',{

        post
        
    });
}