const sql = require('./sql');
 
function login(user, password, cb) {
    sql.executeSQL(`select * from Login where [Name]='${user}' and password ='${password}'`, (recordset) => {
        cb(recordset.recordsets[0]);
    })
}
 
function signUp(user,password, email,cb) {
    sql.executeSQL(`Insert into Login(Name,Password,Email) values ('${user}','${password}','${email}')`, (recordset) => {
        console.log(recordset);
        cb(recordset.rowsAffected[0]);
    })
}

module.exports = {
    login: login,
    signUp:signUp
}