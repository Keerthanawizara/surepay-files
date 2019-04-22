const hapi = require('hapi')
const AuthBearer = require('hapi-auth-bearer-token')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const DataBase = require('./src/dbConfig')
const userAuthentication = require('./src/common/authenticator')
const userroutes = require('./src/users/userRoutes')
const propertyroutes = require('./src/property/propertyRoutes')
const paymentroutes = require('./src/payment/paymentRoutes')
const countyroutes = require('./src/County/countyRoutes')
const assesseeroutes = require('./src/Assessee/assesseeRoutes')
const mailroutes = require('./src/Email/emailRoutes')

const initializeDatabase = new DataBase()
initializeDatabase.connection()

const server = hapi.server({
    port: 9000,
    host: 'localhost'
})

const init = async () => {
    await server.register(AuthBearer)
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Surepay API Documentation'
                },
                grouping: 'tags'
            }
        }
    ])
    server.auth.strategy('simple', 'bearer-access-token', {
        allowMultipleHeaders: true,
        validate: async (request, token, h) => {
            const userAuth = new userAuthentication
            const isValid = await userAuth.verifyToken(token);
            const credentials = { token };
            const artifacts = { test: 'info' };
 
            return { isValid, credentials, artifacts };
        }
    })
    server.auth.default('simple')
    await server.start()
    console.log( `Server running at ${server.info.uri}`)
    
}

server.route({
    method: 'GET',
    path:'/',
    config: {
        auth: false
    },
    handler: (request, h) => {
        return `Welcome to Surepay API`
    }
})

server.route(propertyroutes)
server.route(paymentroutes)
server.route(userroutes)
server.route(mailroutes)
server.route(countyroutes)
server.route(assesseeroutes )


process.on('unhandledRejection',(err) => {
    console.log(err)
    process.exit(1)
})

init()



