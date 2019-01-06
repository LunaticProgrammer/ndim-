const Post  = require('../databases/models/createAnnouncements');
const path = require('path');

module.exports = (req, res) => {

      Post.create({
        ...req.body
      });
      console.log(req.body);

      res.redirect('/');
    };
