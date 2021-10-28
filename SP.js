const sql = require('./sql');

function getImage(req,res){
    sql.executeSQL( `select * from SanPham  join ImageS on SanPham.id = ImageS.id where SanPham.id = ${req.params.id}`, (recordset) => {
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
        //     res.send(row);
    });
}

module.exports = {
    getImage: getImage
}


