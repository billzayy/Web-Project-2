const sql = require('./sql');

function getProfile(req, res) {
    sql.executeSQL(`select * From Login where id_Login = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function updateProfile(req,res) {
    sql.executeSQL(`Update Login set 
        Name = '${req.params.Name}' , Password = '${req.params.Password}',
        Email = '${req.params.Email}', TenKH = '${req.params.TenKH}', DiaChi = '${req.params.DiaChi}',SDT = '${req.params.SDT}'
        where id_Login = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}


module.exports = {
    getProfile: getProfile,
    updateProfile: updateProfile,
}