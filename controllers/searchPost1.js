const Post = require('../databases/models/createAnnouncements');
const Post1 = require('../databases/models/createApplication');

module.exports = async (req, res) => {

    const post = await Post.find({ eventcode : req.body.eventcode });
    const post1 = await Post1.find({eventcode : req.body.eventcode});

    res.render('SAL',{

        post,
        post1
        
    });
}