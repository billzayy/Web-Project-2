const sql = require('mssql/msnodesqlv8');

function executeSQL(strSQl, cb) {
    var config = {
        user: "sa",
        password: "tuanhdangiu",
        server: "BILL\\BILLZAY",
        database: "Clothing_Web",
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
function executeSQLSync(strSql) {

    var config = {
        user: "sa",
        password: "tuanhdangiu",
        server: "BILL\\BILLZAY",
        database: "Clothing_Web",
        driver: "msnodesqlv8",
    };

    var connectSQL = new Promise((resolve, reject) => {
        sql.connect(config, (err, db) => {
            if (err) reject(err);
            var request = new sql.Request();
            request.query(strSql, (err, recordset) => {
                if (err) reject(err);
                resolve(recordset);
            })
        })
    })
    return connectSQL;
}

module.exports = {
    executeSQL: executeSQL,
    executeSQLSync: executeSQLSync
}