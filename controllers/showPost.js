const Post = require('../databases/models/createAnnouncements');

module.exports = async (req, res) => {

    const post = await Post.find({},(error,data)=>{

        if(!error){
            console.log('done');
        }else{
            console.log('Some error occured');
        }
    });

    res.render("Afue",{
        post
    });
};