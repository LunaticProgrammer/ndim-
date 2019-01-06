const Post  = require('../databases/models/createApplication');
const path = require('path');

module.exports = (req, res) => {
    const  {image}  = req.files
    if(!image){

        Post.create({
            ...req.body
        });
    }else{
   image.mv(path.resolve(__dirname,'..','public/posts', image.name),(error) => {

    Post.create({
        ...req.body,
        image : `../public/posts/${image.name}`
    });
   });
    }
   res.redirect('/go');
}