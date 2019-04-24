const paymentCtrl = require('./paymentController')

module.exports = [
    {
     method: 'GET',
     config: {
        tags: ['api','payment details'],
        description: 'get payment List for Surepay',
        auth: false
    },
     path: '/paymentDataList',
     handler: paymentCtrl.paymentDataList
    },
    {
     method: 'POST',
     config: {
        tags: ['api','payment details'],
        description: 'create payment List  for Surepay',
        auth: false
    },
     path: '/createPayment', 
     handler: paymentCtrl.createPayment},
    {
     method: 'GET', 
     config: {
        tags: ['api','payment details'],
        description: 'get single payment List using Id & pin for Surepay',
        auth: false
    },
     path: '/paymentRecord/{id}', 
     handler: paymentCtrl.paymentRecord
    },
    {
     method: 'PUT', 
     config: {
        tags: ['api','payment details'],
        description: 'Update single payment List using Id & pin for Surepay',
        auth: false
    },
     path: '/paymentRecordUpdate/{id}', 
     handler: paymentCtrl. paymentRecordUpdate
    },
{
    method: 'DELETE', 
    config: {
        tags: ['api','payment details'],
        description: 'Delete single payment List using Id and pin for Surepay',
        auth: false
    },
    path: '/paymentRecordDelete/{id}', 
    handler: paymentCtrl. paymentRecordDelete
}

];
