process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const studentData = require('../databases/models/studentData');
const nodemailer = require('nodemailer');
const otp = require('../databases/models/OTP');
const Post = require('../databases/models/createAnnouncements');

module.exports = async (req, res) => {
const transporter = nodemailer.createTransport({
    host: 'mail.ndimdelhi.org',
    port : 587,
    secure : false,
    auth: {
      
       user : 'Test2@ndimdelhi.org',
       pass : 'd,JmDPG0]&St'
    }
  });

 
    
  
  
  var studentmail = await studentData.find({RollNo : req.body.rollno, Year : req.body.year});
  
  const mailOptions =  {

    from : 'Ndim Delhi <Test2@ndimdelhi.org>',
    to : studentmail[0].StudentEmail,
    subject : ' Ndim Student Verification ',
    text : `${ Math.floor(1000 + Math.random() * 9000) }`
  };

  await otp.create({

    to: mailOptions.to,
    text : mailOptions.text,
    rollno : req.body.rollno,
    year : req.body.year
  })
  
  await transporter.sendMail(mailOptions, (error , res) => {

    if(error){
        console.log(error);
    }else {

        console.log('otp sent')
    }
  })

  
  const data = req.body;
  await res.render('otpv',{

    data
  });
}