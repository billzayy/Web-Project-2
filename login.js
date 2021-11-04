const sql = require('./sql');
 
function login(user, password, cb) {
    sql.executeSQL(`select * from Login where [Name]='${user}' and password ='${password}'`, (recordset) => {
        cb(recordset.recordsets[0]);
    })
}


module.exports = {
    login: login
}