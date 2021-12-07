const sql = require('./sql')

function getClient(req, res) {
    sql.executeSQL(`select * From Login`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function addClient(req, res) {
    sql.executeSQL(`Insert into Login(Name,Password,Email,Author,TenKH,DiaChi,SDT) values (
    '${req.params.Name}','${req.params.Password}','${req.params.Email}','${req.params.Author}',
    '${req.params.TenKH}','${req.params.DiaChi}','${req.params.SDT}')`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function updateClient(req, res) {
    sql.executeSQL(`Update Login set 
    Name = '${req.params.Name}' , Password = '${req.params.Password}',
    Email = '${req.params.Email}', Author = '${req.params.Author}',
    TenKH = '${req.params.TenKH}', DiaChi = '${req.params.DiaChi}',SDT = '${req.params.SDT}'
     where id = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function deleteClient(req, res) {
    sql.executeSQL(`Delete from Login where id = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

module.exports = {
    getClient: getClient,
    addClient: addClient,
    updateClient: updateClient,
    deleteClient: deleteClient
}