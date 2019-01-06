const Post = require('../databases/models/createAnnouncements');

module.exports = async (req, res) => {

    const post = await Post.find({ _id : req.body._id });
    
    res.render('otpv',{ 

        post
    });
}