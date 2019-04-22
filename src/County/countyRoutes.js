const CountyCtrl = require('./countyController')


module.exports = [

   { 
    method: 'POST', 
    config: {
      tags: ['api','county details'],
      description: 'create County List for Surepay',
      auth: false
  },
    path: '/countyDetail', 
    handler: CountyCtrl.countyDetail},
   {
    method: 'POST',
    config: {
      tags: ['api','county details'],
      description: 'get payment using single record for Surepay',
      auth: false
  },
    path: '/countyDataList', 
    handler: CountyCtrl.countyDataList
   },
   {
   method: 'POST', 
   config: {
      tags: ['api','county details'],
      description: 'Update county List using Id for Surepay',
      auth: false
  },
   path: '/countyRecordUpdate/{id}', 
   handler: CountyCtrl. countyRecordUpdate
},
]