const Post = require('../databases/models/createAnnouncements');

module.exports = async (req, res) => {

    const post = await Post.findOneAndRemove({ eventcode : req.body.eventcode });
    res.send('event deactivated and deleted from database');
}