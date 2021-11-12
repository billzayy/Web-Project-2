const sql = require('./sql');
 
function getShoppingCard(req, res) {
   var arrProductId = req.body.arrProductId;
    sql.executeSQL(`select * from SanPham where id in ${arrProductId}`, (recordset) => {
        var result = "";
        if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
              res.send("Vui long chon san pham");
        }
        else {
            recordset.recordsets[0].forEach(row => {
            result += `
            <div style='Display:inline-block;margin: 10px;'>
            <a href="/detail/${row["id"]}"><img style="width:300px" src='/images/${row["Image"]}'/></a>
            <div style="text-align:center;line-height: 30px;"><b>${row["Name"]}</b></div>
            <div style="text-align:center"><span style="color:black"> ${row["Gia"]}$</span> </div>
            <div style="text-align:center"><input type="button" value="Xoa" onclick="addToCard(${row['id']})"/></div>
         </div>
                `;
        });
        res.send(result);
        }
    });
}
 
module.exports = {
getShoppingCard: getShoppingCard
}