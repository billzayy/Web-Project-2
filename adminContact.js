const sql = require('./sql');

function getContact(req,res) {
    sql.executeSQL(`select * From Contact`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

function deleteContact(req, res) {
    sql.executeSQL(`delete from Contact where ID_contact = ${req.params.id}`, (recordset) => {
        res.send(recordset.recordsets[0])
    })
}

module.exports = {
    getContact: getContact,
    deleteContact: deleteContact
}