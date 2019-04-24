const emailSchema = require('./emailSchema');


const sendEmail = async(req) => {
    let docs = await emailSchema.create(req)
    if(docs){
      return docs
    }else{
      return err
    }
  } 

  module.exports ={
      sendEmail
  }