const Emailctrl = require('./emailController')

module.exports = [
{
    method: 'POST',
    config: {
        tags: ['api','Email details'],
        description: 'Email List for Surepay',
        auth: false
    },
     path: '/sendEmail', 
     handler: Emailctrl
 }
];