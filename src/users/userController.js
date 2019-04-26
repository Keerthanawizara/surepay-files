const userCollection = require('./userModel')
const userAuthentication = require('../common/authenticator')
const Joi = require('joi');



//server side data validation initialize

const schema = Joi.object().keys({
    username: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,10}$/) 
 }).with('username', 'password');


//create user API
const createUser = async(req,h) => {
    var data = req.payload
    Joi.validate(data, schema,(err)=>{
       return err
    })
   let docs = await userCollection.createUser(data)
  if(docs){
      return docs
  }else{
      return err
  }   
}
       
//GetUserList
const getUserList = async(req,h) => {
    let docs =  await userCollection.getUserList(req)
       if(docs){
           return docs
       }else{
           return err
  
       }     
      }


const userAuthController = async (request) => {
    const userCredentials = request.payload
        if (userCredentials && (userCredentials.username && userCredentials.password)) {
            const userData = await userCollection.userAuthController(userCredentials).then(doc=>doc).catch(err=>err)
            if (userData[0]._id) {
                const userAuth = new userAuthentication(userData[0]._id)
                return {
                    status: 'success',
                    token: userAuth.getToken()
                }
            }
        } else {
            return {
                status: 'failure',
                result: 'Cannot identify username or password.'
            }
        }
    
}

module.exports = {
    createUser,
    userAuthController,
    getUserList
}