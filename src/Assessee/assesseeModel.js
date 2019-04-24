const assesseeSchema = require('./assesseeSchema');

const assesseeDetail = async(req) => {
    let docs = await assesseeSchema.create(req)
    if(docs){
      return docs
    }else{
      return err
    }
  } 


  const assesseeDataList =async()=>{
    let docs = await assesseeSchema.paginate({},{offset:0, limit:10})
      if(docs) {
        return docs;
     }else {
         return err;
     }
    } 

 const assesseeRecord = async(req)=> {
        let docs = await assesseeSchema.findOne(req)
        if(docs) {
          return docs;
       }else {
           return err;
       }
      }

      const assesseeRecordUpdate = async(req) => {
        const update_data=({name:req.payload.name, emailId:req.payload.emailId, phone:req.payload.phone, propertyId:req.payload.propertyId})
        let docs = await assesseeSchema.updateOne({$set:update_data},{multi:true})
        if(docs) {
          return docs;
       }else {
         //console.log(err)
           return err;
       }
    }

      const assesseeRecordDelete = async(req) =>{
        let docs = await assesseeSchema.deleteOne(req)
        if(docs) {
          return docs;
       }else {
           return err;
       }
      }
    
  module.exports ={
      assesseeDetail,
      assesseeDataList,
      assesseeRecord,
      assesseeRecordUpdate,
      assesseeRecordDelete
  }