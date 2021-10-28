const sql = require('./sql');
 
function blogs(req,res){
    sql.executeSQL("select * from Blogs", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result += `
                <div style='Display:inline-block ;width:350px;float:left    ; '>
                    <a href=""><img style="width:320px" src='/images/${row['Imag']}'/></a>
                    <div style="text-align:center;line-height: 30px;"><b>${row['Noidung']}</b></div>
                 </div>
                `;
        });
        res.send(result);
    });
}
 
module.exports = {
    blogs: blogs
}