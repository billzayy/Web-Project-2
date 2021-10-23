const sql = require('mssql/msnodesqlv8');

function executeSQL(strSQl,cb) {
    // config for your database
    var config = {
       user: 'sa',
       password: '0938032907',
       server: 'LAPTOP-G4SPSED2\\XUANANH',
       database: 'wedBanHang',
       driver: "msnodesqlv8"
   };
   // connect to your database
   sql.connect(config, function (err, db) {
       //console.log(db);
       if (err) console.log(err);
       // create Request object
       var request = new sql.Request();
       // query to the database and get the records
       request.query(strSQl, function (err, recordset) {
           if (err) console.log(err)
           cb(recordset);
       });
       
   });
}
module.exports = {
    executeSQL: executeSQL
    }