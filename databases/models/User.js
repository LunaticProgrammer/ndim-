const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
 
    username: {

        type : String,
        unique : true,
        required : [true, 'Please Provide your username!']
    },

    password: {

        required : [true,'Please Provide your Password! '],
        type : String
  }


});

userSchema.pre('save',function(next){
    
    const user = this

    bcrypt.hash(user.password , 10 , function(error, encrypted){

        user.password = encrypted

        next()
    })
});

const User = mongoose.model('User', userSchema);

module.exports = User;