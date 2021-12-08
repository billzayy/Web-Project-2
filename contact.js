const sql = require('./sql')
function addcontact(req, res) {
    sql.executeSQL(`Insert into Contact(Ho,Ten,Email,SDT,Loi_nhan) values('${req.params.Ho}','${req.params.Ten}','${req.params.Email}','${req.params.SDT}','${req.params.Loi_nhan}')`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}
module.exports = {
   
    addcontact: addcontact,
    
}