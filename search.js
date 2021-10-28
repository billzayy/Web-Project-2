const sql = require('./sql');

function search(search, res){
    
    sql.executeSQL(`select * from SanPham where Name like '%${search}%' `, (recordset) => {
        var result = "";
        if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
              res.send("Khong tim thay san pham");
        }
        else {
            recordset.recordsets[0].forEach(row => {
            result += `
            <div style='Display: inline-block ;width:400px;float:left; '>
                    <a href="/detail/${row['id']}"><img style="width:300px" src='/images/${row['Image']}'/></a>
                    <div style="text-align:center;line-height: 30px;"><b>${row['Name']}</b></div>
                    <div style="text-align:center"><span style="color:red"> ${row['Gia']}$</span> </div>
                 </div>
                `;
        });
        res.send(result);
        }
    });
 }
 module.exports = {
    search: search
    }