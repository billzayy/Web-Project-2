const sql = require('./sql')

function getProduct(req,res) {
    sql.executeSQL(`select * From SanPham`, (recordset) => {
        res.send(recordset.recordsets[0]);
    }) 
}

function addProduct(req, res) {
    sql.executeSQL(`Insert into SanPham(Name,Gia,Image) values ('${req.params.Name}',${req.params.Gia},'${req.params.Img}')`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function updateProduct(req,res) {
    sql.executeSQL(`Update SanPham set Name = '${req.params.Name}' , Gia = ${req.params.Gia}, Image = '${req.params.Img}' where id = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    }) 
}

function deleteProduct(req, res) {
    sql.executeSQL(`Delete from SanPham where id = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

module.exports = {
    getProduct: getProduct,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}