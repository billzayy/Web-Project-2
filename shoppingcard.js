const sql = require('./sql');

function getShoppingCard(arrProductId, cb) {
    sql.executeSQL(`select * from SanPham where id in ${arrProductId}`, (recordset) => {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            cb('Vui long chon san pham')
        }
        else {
            var result = "";
            recordset.recordsets[0].forEach(row => {
                result +=
                `
                    <div class="product" productId="${row['id']}" price="${row["Gia"]}">
                        <div class="menu_img">
                            <a href="/detail/${row['id']}"><img src="/images/${row["Image"]}" alt="anh1"></a>
                        </div>
                        <div class="menu_inf">
                            <div class="product_name">${row["Name"]}</div>
                            <div class="product_price">${row["Gia"]} $</div>
                            <div class="soluong">Số Lượng: <input id ="sl_input" type="number" min="1" onblur = "TongTien()"max="50" value = "1"></div>
                            <div class="delete"><button id="del" onclick="onDeleteProduct(${row['id']})">Xóa</button></div>
                        </div>
                    </div>
                `
            });
            cb(result);
        }
    })
}
async function buyProduct(id_KH, HD_TongTien, arrSP) {
    await sql.executeSQLSync(`insert into HoaDon(id_KH, NgayBan,TongTien) values(${id_KH},getdate(),'${HD_TongTien}')`);
    var data = await sql.executeSQLSync(`select @@IDENTITY as Id_HD`);
    arrSP.forEach(async objSP => {
        await sql.executeSQLSync(`insert into ChiTietHoaDon(id_HD,id, SoLuong, Gia) values('${data.recordsets[0][0]["id_HD"]}',${objSP.id},'${parseInt(objSP.SoLuong)}','${parseInt(objSP.Gia)}') `);
    });
    // await sql.executeSQLSync(`insert into HoaDon(TongTien) values ('${HD_TongTien}') where id_KH = ${id_KH}`)
}


function info(req, res) {
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
    getShoppingCard: getShoppingCard,
    buyProduct: buyProduct,
    info: info
}
