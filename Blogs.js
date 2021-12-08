const sql = require('./sql');

function blogs(req,res){
    sql.executeSQL("select * from Blogs", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result += `
                <div style='Display:inline-block ;width:350px;float:left;margin-top:20px; margin-right:15px'>
                    <a href='./blogs/${row['id_blogs']}'><img style="width:320px" src='./images/${row['Imag']}'/></a>
                    <div style="text-align:left;line-height: 30px;" ><b>${row['NoiDung'].slice(0, 300)}...</b></div>
                </div>
                `;
        });
        res.send(result);
    });
}
module.exports = {
    blogs: blogs,
}