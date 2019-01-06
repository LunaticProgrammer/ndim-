const student =  require('../databases/models/studentData');
var fs = require('fs');
var gutil = require('gulp-util');
const path = require('path');
const mongoose = require("mongoose");
var csv = require("csvtojson");
module.exports = (req, res) => {

  const  {image}  = req.files

  image.mv(path.resolve(__dirname , '..', 'public/data', image.name), function(err) {
    if (err)
      return res.send(err);
 
    res.send('File uploaded!');
  });

     
  
  csv()
  .fromFile(`./public/data/${image.name}`)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
    mongoose.connection.db.listCollections({name: 'students'})
    .next(function(err, collinfo) {
        if (collinfo) {
          mongoose.connection.db.dropCollection('students', function(err, result) {

            jsonArrayObj.forEach(element => {
       
              student.create(element)
             });
          });

        }else{
          jsonArrayObj.forEach(element => {
       
            student.create(element)
           });
        }
    });
    
     
  })


}
