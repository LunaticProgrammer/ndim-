const bcrypt = require('bcrypt')
const User = require('../databases/models/User')

module.exports = (req, res) => {
  const { username, password } = req.body;
  // try to find the user
  User.findOne({ username }, (error, user) => {
    if (user) {
          if(user.password === password){
            req.session.userId = user._id;
            res.redirect('/');
          }else {

            res.redirect('/login');
          }
        }else{
          res.redirect('/login')
        }
      })
    }
