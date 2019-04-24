const propertySchema = require('./propertySchema');


const propertyDetail = async(req) => {
    let docs = await propertySchema.create(req)
    if(docs){
      return docs
    }else{
      return err
    }
  } 

  const propertyDataList =async()=>{
    let docs = await propertySchema.paginate({},{offset:0, limit:10})
      if(docs) {
        return docs;
     }else {
         return err;
     }
    } 
  
    const propertyRecord = async(req)=> {
        let docs = await propertySchema.findOne(req)
        if(docs) {
          return docs;
       }else {
           return err;
       }
      }


      const propertyRecordUpdate = async(req) => {
        let docs = await propertySchema.updateOne({ $set:req.payload })
        if(docs) {
          return docs;
       }else {
         //console.log(err)
           return err;
       }
      }

    
    const propertyRecordDelete = async(req) =>{
        let docs = await propertySchema.deleteOne(req)
        if(docs) {
          return docs;
       }else {
           return err;
       }
      }
      
      
    

 module.exports ={
     propertyDetail,
     propertyDataList,
     propertyRecord,
     propertyRecordUpdate,
     propertyRecordDelete
 } 