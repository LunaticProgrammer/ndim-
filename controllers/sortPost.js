const Post = require('../databases/models/createAnnouncements');

module.exports = async (req, res) => {

    const post = await Post.find( { category : req.body.category } );

    res.render('Afues', {

        post

    })
}