const User  = require('../databases/models/User');

module.exports = (req , res, next) =>{

 if(!req.session.userId){

 return   res.redirect('/login');
 }


 next();
}