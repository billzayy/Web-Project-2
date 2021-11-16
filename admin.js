const sql = require('./sql')

function getProduct(req,res) {
    sql.executeSQL(`select * From SanPham`, (recordset) => {
        res.send(recordset.recordsets[0])
    }) 
}

module.exports = {
    getProduct: getProduct
}