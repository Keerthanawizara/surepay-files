const assesseeCollection = require('./assesseeModel');
const mongoose = require('mongoose');
const Joi = require('joi');

//server side data validation

const schema = Joi.object().keys({
   name :Joi.string().min(3).max(30).required(),
   emailId :Joi.string().email({ minDomainAtoms: 3 }).required(),
   phone  :Joi.string(),
   propertyId: Joi.string()
})

//create assessee api 
const assesseeDetail = async(req,h) => {
    var data = req.payload
    Joi.validate(data, schema,(err)=>{
       return err
    })
   let docs = await assesseeCollection.assesseeDetail(data)
  if(docs){
      return docs
  }else{
      return err
  }   
}



//  //assessee Data list Api

const assesseeDataList = async(req,h) => {
  let docs =  await assesseeCollection.assesseeDataList(req)  
       if(docs){
           return docs
       }else{
           return err
  
       }     
      }
    
      const assesseeRecord = async(req,h) => {
      const params = {_id: mongoose.Types.ObjectId(req.params.id)}; 
      let docs = await assesseeCollection.assesseeRecord(params)
       if(docs){
          return docs
      }else{
          return err
      } 
  }      


// //assessee record update api using id

const assesseeRecordUpdate = async(req,h) => {
    var data = req.payload
    const params = {_id: mongoose.Types.ObjectId(req.params.id)};
        let docs = await assesseeCollection.assesseeRecordUpdate(params,data)
        if(docs){
           return docs
       }else{
           return err
       } 
 }
// // // delete assessee details api using id

const assesseeRecordDelete = async(req,h) => {
    const params = {_id: mongoose.Types.ObjectId(req.params.id)}; 
    let docs = await assesseeCollection.assesseeRecordDelete(params)
    if(docs){
       return docs
   }else{
       return err
   } 
}      





module.exports ={
    assesseeDetail,
   assesseeDataList,
    assesseeRecord,
    assesseeRecordUpdate,
    assesseeRecordDelete
}