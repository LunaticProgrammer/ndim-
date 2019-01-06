const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  
    RollNo : {

        type: String,
        required : false
        
    },

    ERPRollNo : {

        type: String,
        required : false
        
    },

    StudentFirstName : {

        type: String,
        required : false

    },

    Section : {

        required : false,
        type : String
    },

    StudentMobileNo : {

        required : false,
        type : String
    },

    DOB : {

        type: String,
        required : false
    },

    StudentEmail : {

        type : String,
        required : false
    },

    StudentGender : {

        type : String,
        required : false
    },
    
    Year : {

        type : String,
        required : true
    }




});



const student = mongoose.model('Student', studentSchema);

module.exports = student;