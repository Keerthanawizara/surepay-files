const userCollection = require('./userModel')
const userAuthentication = require('../common/authenticator')
const Joi = require('joi');



//server side data validation initialize

const schema = Joi.object().keys({
    username: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,10}$/) 
 }).with('username', 'password');


//create user API
const createUser = (req,h) => {
     var data = req.payload
        return new Promise((resolve, reject) => {
            userCollection.create(req.payload,
            Joi.validate(data, schema, (err,docs)=> {
                if (err) reject(err);
                else resolve(docs);
            }));
        });
}
//GetUserList
const GetUserList = (request,h) => {
    return new Promise((resolve,reject) => {
        userCollection.paginate({},{offset:0, limit:15},(err,docs) => {
            if (err) {
           reject(err)
           //console.log(err)
             }else{
               resolve(docs)
             }
        })
    })
}

const userAuthController = async (request) => {
    const userCredentials = request.payload
        if (userCredentials && (userCredentials.username && userCredentials.password)) {
            const userData = await userCollection.find({...userCredentials}).then(doc => doc).catch(e => e)
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
    GetUserList
}