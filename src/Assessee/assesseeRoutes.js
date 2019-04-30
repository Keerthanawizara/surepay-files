const assesseeCtrl= require('./assesseeController');

module.exports =
    [
 {
     method: 'GET',
     config: {
        tags: ['api','Assessee details'],
        description: 'get assessee List for Surepay',
        auth: false
    },
     path: '/assesseeDataList',
     handler: assesseeCtrl.assesseeDataList
    },
     {
     method: 'POST', 
     config: {
        tags: ['api','Assessee details'],
        description: 'create assessee List for Surepay',
        auth: false
    },
     path: '/assesseeDetail', 
     handler: assesseeCtrl.assesseeDetail
    },
     {
      method: 'GET', 
      config: {
        tags: ['api','Assessee details'],
        description: 'get single assessee List using Id for Surepay',
        auth: false
    },
      path: '/assesseeRecord/{id}', 
      handler: assesseeCtrl.assesseeRecord
    },
     {
     method: 'PUT', 
     config: {
        tags: ['api','Assessee details'],
        description: 'Update assessee List using Id for Surepay',
        auth: false
    },
     path: '/assesseeRecordUpdate/{id}',
     handler: assesseeCtrl. assesseeRecordUpdate 
    },
     {
     method: 'DELETE',
     config: {
        tags: ['api','Assessee details'],
        description: 'Delete assessee List using Id for Surepay',
        auth: false
    },
     path: '/assesseeRecordDelete/{id}', 
     handler: assesseeCtrl. assesseeRecordDelete
    }

];

