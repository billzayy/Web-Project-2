const sql = require('./sql')

function getBill(req, res) {
    sql.executeSQL(`select id_HD, id_KH, NgayBan, TongTien From HoaDon`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function addBill(req, res) {
    sql.executeSQL(`Insert into HoaDon(id_KH, NgayBan, TongTien) values (${req.params.id_KH},'${req.params.Date}','${req.params.Price}')`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function updateBill(req, res) {
    sql.executeSQL(`Update HoaDon set id_KH = ${req.params.id_KH} , NgayBan = '${req.params.Date}', TongTien = '${req.params.Price}' where id_HD = ${req.params.id_HD}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function deleteBill(req, res) {
    sql.executeSQL(`Delete from HoaDon where id_HD = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

module.exports = {
    getBill: getBill,
    addBill: addBill,
    updateBill: updateBill,
    deleteBill: deleteBill
}