var nodemailer = require('nodemailer');
const emailCollection = require('./emailModel');
//require('dotenv').config();

//Email api

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         user:"keerthirajme@gmail.com",
         pass: "rajendran5"
    }
});

    const  sendEmail = async(req,h) => {
       var mailOptions= req.payload
       transporter.sendMail(mailOptions,(info,err)=>{
        if(info){
          return info
       //  console.log(info)
        }else{
          return err
          //console.log(err)
        }
      })
       let docs = await emailCollection.sendEmail(mailOptions);
       if(docs){
         return docs
       }
    }
module.exports = sendEmail