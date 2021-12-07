const sql = require('./sql');
 
function blogs(req,res){
    sql.executeSQL("select * from Blogs", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result += `
                   <img  src='/images/${row['Imagess']}'/>
                  
                `;
        });
        res.send(result);
    });
}
 
module.exports = {
    blogs: blogs
}