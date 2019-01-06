const Post1 = require('../databases/models/createApplication');
const fs  = require('fs');
const json2csv = require('json2csv').parse;

module.exports = async (req, res) => {

    var post1 = await Post1.find({eventcode : req.body.eventcode});

    const fields = ['rollno', 'year', 'eventcode','studentdetails', 'image','studentName','batch'];
    const opts = { fields };
    
     
      const csv = await json2csv(post1, opts);
     await fs.writeFile('./public/data/file.csv', csv, function(err) {
        var file =  './public/data/file.csv';
         res.download(file); // Set disposition and send it.
      });
      
     
}