const sql = require('./sql');

function login(user, password, cb) {
    sql.executeSQL(`select * from Login where [Name]='${user}' and password ='${password}'`, (recordset) => {
        cb(recordset.recordsets[0]);
    })
}


function signUp(user, password, email, cb) {
    var name = "";
    var arrayName = [];
    var num = 0;
    var p = new Promise((resolve, reject) => {
        sql.executeSQL(`Select * From Login`, (recordset,err) => {
            resolve(recordset.recordset)
        })
    })
    p.then(data => {
        data.forEach(arr => {
            name = arr.Name
            arrayName.push(name);
        })
        arrayName.forEach(arrData => {
            if (user == arrData) {
                num = 0
            }
            else {
                num += 1
            }
        })
        if (num == arrayName.length) {
            sql.executeSQL(`insert into Login(Name,Password,Email) values('${user}','${password}','${email}')`, (recordset) => {
                cb(recordset);
            }) 
        }
        else {
            cb(0)
        }
    })
}


module.exports = {
    login: login,
    signUp:signUp
}