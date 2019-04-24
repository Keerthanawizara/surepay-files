const propertyCollection = require('./propertyModel');
const mongoose = require('mongoose');
const Joi = require('joi');


//server side Data validation initialize

const schema = Joi.object().keys({
    county: Joi.string(),
    pin: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
    state:Joi.string(),
    zip: Joi.string(),
    township:Joi.string(),
    class_code: Joi.string(),
    assessed_value: Joi.string(),
    market_value: Joi.string(),
    taxes_per_year: Joi.string(),
    PREEQEXM: Joi.string(),
    home_owners: Joi.string(),
    senior_exemption: Joi.string(),
    senior_freeze: Joi.string(),
    total_acres:  Joi.string(),
    legal_description: Joi.string(),
    google_map_view:  Joi.string() 
 })


//create API initialize

const propertyDetail = async(req,h) => {
  var data = req.payload
  Joi.validate(data, schema,(err)=>{
     return err
  })
 let docs = await propertyCollection.propertyDetail(data)
 if(docs){
    return docs
}else{
    return err
 }   
}


// // property table List Page

const propertyDataList = async(req,h) => {
  let docs =  await propertyCollection.propertyDataList(req)
     if(docs){
         return docs
     }else{
         return err

     }     
    }

    const propertyRecord = async(req,h) => {
      const query = req.query;
    const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin}; 
    let docs = await propertyCollection.propertyRecord(params)
     if(docs){
        return docs
    }else{
        return err
    } 
}      
    
// //     //update property details
const propertyRecordUpdate = async(req,h) => {
  const query = req.query;
  const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin};
  let docs = await propertyCollection.propertyRecordUpdate(params)
  if(docs){
     return docs
 }else{
     return err
 }   
}



// // // delete property details

 const propertyRecordDelete = async(req,h) => {
  const query = req.query;
  const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin}; 
  let docs = await propertyCollection.propertyRecordDelete(params)
  if(docs){
     return docs
 }else{
     return err
   } 
}      
module.exports = {
    propertyDataList,
     propertyDetail,
     propertyRecord,
     propertyRecordUpdate,
     propertyRecordDelete



}