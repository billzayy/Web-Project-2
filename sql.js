const sql = require('mssql/msnodesqlv8');

function executeSQL(strSQl, cb) {
    var config = {
      user: "sa",
      password: "0938032907", 
      server: "LAPTOP-G4SPSED2\\XUANANH",
      database: "wedBanHang",
      driver: "msnodesqlv8",
    };

    sql.connect(config, function (err, db) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query(strSQl, function (err, recordset) {
            if (err) console.log(err)
            cb(recordset);
        });

    });
}

module.exports = {
    executeSQL: executeSQL
}