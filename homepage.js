const sql = require('./sql');
 
function homepage(req, res) {
    sql.executeSQL("select top 1 TenKH , DiaChi, SDT, NgayBan from Login KH INNER JOIN HoaDon HD ON KH.id_Login = HD.id_KH", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach(row => {
            result += `
            <div class= "DIACHI">
                    <div >Khách hàng: <b>${row['TenKH']}</b></div>
                    <div >Địa chỉ: <b>${row['DiaChi']}</b></div>
                    <div >Điện Thoại :<b>${row['SDT']}</b></div>
                    <div>Ngày Bán:  <b>${row['NgayBan']}</b></div>
                    </div>
                `;
        });
        res.send(result);
    });
}
 
module.exports = {
   homepage: homepage
}