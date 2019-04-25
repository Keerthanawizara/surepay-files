const countySchema = require('./countySchema');


const countyDetail = async(req) => {
    let docs = await countySchema.create(req)
    if(docs){
      return docs
    }else{
      return err
    }
  } 

  const countyDataList = async(req)=> {
    let docs = await countySchema.findOne(req)
    if(docs) {
      return docs;
   }else {
       return err;
   }
  }


  const countyRecordUpdate = async(params, req) => {
   const update_data=req
    console.log("mm",update_data)
    let docs = await countySchema.updateOne({update_data},{multi:true})
    console.log("cc",docs)
    if(docs) {
      return docs;
   }else {
       return err;
   }
  }
  module.exports={
      countyDetail,
      countyDataList,
      countyRecordUpdate
  }