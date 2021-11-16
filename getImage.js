const sql = require('./sql');

function getImage(req, res) {
    sql.executeSQL(`select * from SanPham  join ImageS on SanPham.id = ImageS.id where SanPham.id = ${req.params.id}`, (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result += `
            <div id="content-smallimg">
                <div class="smallimg-2">
                <img src ='../images/${row["Path"]}'/>
                </div>
            </div>`;
        });
        res.send(result)
        // var row = recordset.recordsets[0][0];
        // res.send(row);
    });
}
// function getTypeProduct(req, res) {
//     sql.executeSQL("SELECT TOP 4  * FROM SanPham ORDER BY NEWID()", (recordset) => {
//         var result = "";
//         recordset.recordsets[0].forEach(row => {
//             result +=
//                 `
//                 <div style='Display:inline-block;margin: 10px;'>
//                     <a href="/detail/${row["id"]}"><img style="width:300px" src='/images/${row["Image"]}'/></a>
//                     <div style="text-align:center;line-height: 30px;"><b>${row["Name"]}</b></div>
//                     <div style="text-align:center"><span style="color:black"> ${row["Gia"]}$</span> </div>
//                     <div style="text-align:center"><input type="button" value="thêm vào giỏ hàng" onclick="addToCard(${row['id']})"/></div>
//                  </div>
//             `;
//         });
//         res.send(result);
//     });
//   }

module.exports = {
    getImage: getImage,
    // getTypeProduct:getTypeProduct
}


