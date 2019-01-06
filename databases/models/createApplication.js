const studentData = require('./studentData');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const applicationSchema = new mongoose.Schema({
  rollno: {

        type : String,
        required : true
  },
  year: {

        required : true,
        type : String
  },

  studentdetails : {

    required : true,
    type : String
  },

  image: {
    type: String,
    required : false
  },

  eventcode : String,

 studentName : {

  type: String,
  required : true
 },
 
 batch : {

  type : String,
  required : true
 }
  
});



const application = mongoose.model('Applications', applicationSchema);

module.exports = application