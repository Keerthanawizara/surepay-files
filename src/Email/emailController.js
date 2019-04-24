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
       let docs = await emailCollection.sendEmail()
       transporter.sendMail(mailOptions,(err))
       if(docs){
           return docs
       }else{
           return err
       }   
    }
module.exports = sendEmail