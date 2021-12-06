const sql = require('./sql')

function getBillDetail(req, res) {
    sql.executeSQL(`select * From ChiTietHoaDon`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function addBillDetail(req, res) {
    sql.executeSQL(`Insert into ChiTietHoaDon(id_HD, SoLuong, Gia) values (${req.params.id_HD},${req.params.SoLuong},${req.params.Price})`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function updateBillDetail(req, res) {
    sql.executeSQL(`Update ChiTietHoaDon set id_HD = ${req.params.id_HD} , SoLuong = '${req.params.SoLuong}', Gia = '${req.params.Price}' where id = ${req.params.id_CTHD}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function deleteBillDetail(req, res) {
    sql.executeSQL(`Delete from ChiTietHoaDon where id = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

module.exports = {
    getBillDetail: getBillDetail,
    addBillDetail: addBillDetail,
    updateBillDetail: updateBillDetail,
    deleteBillDetail: deleteBillDetail,
}