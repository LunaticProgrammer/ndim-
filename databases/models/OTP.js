const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({

    text : {

        type : String,
        required : true
    },

    to : {

        type : String,
        required : true
    },

    year : {

        type : String,
        require : true
    },

    rollno : {

        type : String,
        require : true
    }
})

const otp = mongoose.model('OTP', otpSchema);

module.exports = otp;