//--------------------------------San Pham Feature------------------------
function onDelete(id) {
    $('#Id').val(id)
    let idBox = $('#Id').val()

    $.get(`/deleteProductAdmin/${idBox}`, (data, status) => {
        getData(1);
    })
}
function onAddNew() {
    let Name = $('#txtname').val()
    let Gia = $('#txtGia').val()
    let Img = $('#txtIMG').val()
    let arrIMG = Img.split('\\')
    $.get(`/addProductAdmin/${Name}/${Gia}/${arrIMG[2]}`, (data, status) => {
        getData(1)
        $('#txtname').val("")
        $('#txtGia').val("")
        $('#txtIMG').val("")
        $('#Id').val("")
    })
}

function onEdit(id, Name, Gia, IMG) {
    $('#txtname').val(Name)
    $('#txtGia').val(Gia)
    $('#Id').val(id)
}

function onSave() {
    let id = $('#Id').val();
    let Name = $('#txtname').val();
    let Gia = $('#txtGia').val();
    let Img = $('#txtIMG').val();
    let arrIMG = Img.split('\\');

    $.get(`/updateProductAdmin/${id}/${Name}/${Gia}/${arrIMG[2]}`, (data, status) => {
        getData(1);
        $('#txtname').val("");
        $('#txtGia').val("");
        $('#txtIMG').val("");
        $('#Id').val("");
    })
}
//----------------------------------Bills Feature-------------------------------

function onBillDelete(id) {
    $('#IdBill').val(id)
    let idBox2 = $('#IdBill').val()
    $.get(`/deleteBillAdmin/${idBox2}`, (data, status) => {
        getData(2)
    })
}

function onBillAdd() {
    let Bill= $('#Billid_KHBox').val();
    let BillDate = $('#BillDateBox').val();
    let BillPrice = $('#BillPriceBox').val();
    $.get(`/addBillAdmin/${Bill}/${BillDate}/${BillPrice}`, (data, status) => {
        getData(2)
        $('#Billid_KHBox').val("");
        $('#BillDateBox').val("");
        $('#BillPriceBox').val("");
    })
}

function onBillEdit(id, id_KH, Date, Price) {
    $('#IdBill').val(id)
    $('#Billid_KHBox').val(id_KH);
    $('#BillDateBox').val(Date);
    $('#BillPriceBox').val(Price);
}


function onBillSave() {
    let idBox2 = $('#IdBill').val()
    let Bill = $('#Billid_KHBox').val();
    let BillDate = $('#BillDateBox').val();
    let BillPrice = $('#BillPriceBox').val();
    $.get(`/updateBillAdmin/${idBox2}/${Bill}/${BillDate}/${BillPrice}`, (data, status) => {
        getData(2)
        $('#IdBill').val("")
        $('#Billid_KHBox').val("");
        $('#BillDateBox').val("");
        $('#BillPriceBox').val("");
    })
}
//----------------------------------Detail Feature-------------------------------
function BackBill() {
    getData(2)
}

function onBillDetailDelete(id) {
    $('#IdBillDetail').val(id)
    let idBox4 = $('#IdBillDetail').val()
    $.get(`/deleteBillDetailAdmin/${idBox4}`, (data, status) => {
        getData(4)
    })
}

function onBillDetailEdit(id, id_HD, Date, Price) {
    $('#IdBillDetail').val(id)
    $('#BillDetail_id').val(id_HD);
    $('#BillDetail_SoLuong').val(Date);
    $('#BillDetail_Price').val(Price);
}

function onBillDetailAdd() {
    let Bill = $('#BillDetail_id').val();
    let BillSoLuong = $('#BillDetail_SoLuong').val();
    let BillPrice = $('#BillDetail_Price').val();
    $.get(`/addBillDetailAdmin/${Bill}/${BillSoLuong}/${BillPrice}`, (data, status) => {
        getData(4)
        $('#BillDetail_id').val("");
        $('#BillDetail_SoLuong').val("");
        $('#BillDetail_Price').val("")
    })
}

function onBillDetailSave() {
    let idBox2 = $('#IdBillDetail').val()
    let Bill = $('#BillDetail_id').val();
    let BillSoLuong = $('#BillDetail_SoLuong').val();
    let BillPrice = $('#BillDetail_Price').val();
    $.get(`/updateBillDetailAdmin/${Bill}/${idBox2}/${BillSoLuong}/${BillPrice}`, (data, status) => {
        getData(4)
        $('#IdBillDetail').val("")
        $('#BillDetail_id').val("");
        $('#BillDetail_SoLuong').val("");
        $('#BillDetail_Price').val("");
    })
}
//----------------------------------Client Feature-------------------------------
function onClientDelete(id) {
    $('#IdClient').val(id)
    let idBox3 = $('#IdClient').val()
    $.get(`/deleteClientAdmin/${idBox3}`, (data, status) => {
        getData(3)
    })
}
function onClientAdd() {
    let client = $('#clientNameBox').val();
    let clientPassword = $('#clientPasswordBox').val();
    let clientEmail = $('#clientEmailBox').val();
    let clientAuthor = $('#clientAuthorBox').val();
    let clientTenKH = $('#clientTenKHBox').val();
    let clientDiaChi = $('#clientDiaChiBox').val();
    let clientSDT = $('#clientSDTBox').val();
    $.get(`/addClientAdmin/${client}/${clientPassword}/${clientEmail}/${clientAuthor}/${clientTenKH}/${clientDiaChi}/${clientSDT}`, (data, status) => {
        getData(3)
        $('#clientNameBox').val("");
        $('#clientPasswordBox').val("");
        $('#clientEmailBox').val("");
        $('#clientAuthorBox').val("");
        $('#clientTenKHBox').val("");
        $('#clientDiaChiBox').val("");
        $('#clientSDTBox').val("");
    })
}
function onClientEdit(id, Name, Password, Email, Author, TenKH, DiaChi, SDT) {
    $('#clientNameBox').val(Name);
    $('#clientPasswordBox').val(Password);
    $('#clientEmailBox').val(Email);
    $('#clientAuthorBox').val(Author);
    $('#clientTenKHBox').val(TenKH);
    $('#clientDiaChiBox').val(DiaChi);
    $('#clientSDTBox').val(SDT);
    $('#IdClient').val(id);
}
function onClientSave() {
    let idBox3 = $('#IdClient').val()
    let client = $('#clientNameBox').val();
    let clientPassword = $('#clientPasswordBox').val();
    let clientEmail = $('#clientEmailBox').val();
    let clientAuthor = $('#clientAuthorBox').val();
    let clientTenKH = $('#clientTenKHBox').val();
    let clientDiaChi = $('#clientDiaChiBox').val();
    let clientSDT = $('#clientSDTBox').val();
    $.get(`/updateClientAdmin/${idBox3}/${client}/${clientPassword}/${clientEmail}/${clientAuthor}/${clientTenKH}/${clientDiaChi}/${clientSDT}`, (data, status) => {
        getData(3)
        $('#IdClient').val("")
        $('#clientNameBox').val("");
        $('#clientPasswordBox').val("");
        $('#clientEmailBox').val("");
        $('#clientAuthorBox').val("");
        $('#clientTenKHBox').val("");
        $('#clientDiaChiBox').val("");
        $('#clientSDTBox').val("");
    })
}

function onDeleteContact(id) {
    $('#IdContact').val(id)
    let idBox3 = $('#IdContact').val()
    $.get(`/deleteContactAdmin/${idBox3}`, (data, status) => {
        getData(5)
    })
}

function getData(datatype) {
    $('.admin-content-right-bg').remove();
    if (datatype == 0) {  // Thu nhỏ khúc này lại cho dễ nhìn
        window.location.reload('/admin.html')
    }
    if (datatype == 1) { // Thu nhỏ này lại bằng mũi tên bên trái
        $.get(`/getProductAdmin`, (data, status) => { 
            var spHTML =
                `
                <div id="edit_Box">
                    <table>
                        <tr>
                            <td id = "titleEdit">Name : </td>
                            <td><input type="text" name="NameBox" id="txtname"></td>

                            <td id = "titleEdit">Gia: </td>
                            <td><input type="text" name="PriceBox" id="txtGia"></td>

                            <td id = "titleEdit">Image: </td>
                            <td><input type="file" name="ImageBox" id="txtIMG"></td>

                            <td><input type="button" value="Save" onclick="onSave()"></td>
                            <td>
                                <input type="button" value="Add New" onclick = "onAddNew()">
                            </td>
                        </tr>
                    </table>
                </div>
                <input type="hidden" id="Id">
                <table border='1' style='width: 100%; border: 1px solid blue;' id = "Content_Box">
                    <tr style = 'font-weight : bold'>
                        <td>Id</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Chức Năng</td>
                    </tr>
                    content
                </table>`;
            var tmp = "";
            data.forEach((item) => {
                tmp +=
                    `<tr>
                    <td>${item.id}</td>
                    <td>
                        <img width='100' src='/images/${item.Image}'>
                    </td>
                    <td> ${item.Name}</td>
                    <td> ${item.Gia}$</td>
                    <td>
                        <input type='button' value='Edit' onclick="onEdit('${item.id}','${item.Name}','${item.Gia}')">
                        <input type='button' value='Delete' onclick= "onDelete('${item.id}')">
                    </td>
                </tr>`;
            });
            // console.log(tmp);
            spHTML = spHTML.replace('content', tmp);
            $('#content').html(spHTML);
        })
    };

    if (datatype == 2) { // Thu nhỏ khúc này lại cho dễ nhìn
        $.get(`/getBillAdmin`, (data, status) => { 
            var spHTML =
                `
                <div id="edit_BillBox">
            
                            <div id = "title_BillId_KH">Id Khach Hang : </div>
                            <div id = "txtBox"><input type="text" name="id_KHBox" id="Billid_KHBox"></div>

                            <div id = "title_BillDate">Ngay ban: </div>
                            <div id = "txtBox"><input type="text" name="DateBox" id="BillDateBox"></div>

                            <div id = "title_BillPrice">Tong tien: </div>
                            <div id = "txtBox"><input type="text" name="PriceBox" id="BillPriceBox"></div>

                      
                            <div id = "btn_BillBox">
                                <input type="button" value="Save" onclick="onBillSave()">
                                <input type="button" value="Add New" onclick = "onBillAdd()">
                                <input type='button' value='Chi tiết hóa đơn' onclick= "getData(4)">
                            </div>
                   
                        </div>
            <input type="hidden" id="IdBill">
                <table border='1' style='width: 100%; border: 1px solid blue;' id = "Content_Box">
                    <tr style = 'font-weight : bold'>
                        <td>Id_HoaDon</td>
                        <td>Id_KhachHang</td>
                        <td>Ngày Bán</td>
                        <td>Tổng tiền</td>
                        <td>Chức năng</td>
                    </tr>
                    content
                </table>`;
            var tmp = "";
            data.forEach((item) => {
                tmp +=
                    `<tr>
                    <td>${item.id_HD}</td>
                    <td>${item.id_KH}</td>
                    <td> ${item.NgayBan}</td>
                    <td> ${item.TongTien}$</td>
                    <td>
                        <input type='button' value='Edit' onclick="onBillEdit(${item.id_HD},${item.id_KH},'${item.NgayBan}','${item.TongTien}')">
                        <input type='button' value='Delete' onclick= "onBillDelete('${item.id_HD}')">
                    </td>
                </tr>`;
            });
            // console.log(tmp);
            spHTML = spHTML.replace('content', tmp);
            $('#content').html(spHTML);
            console.log(data)
        })
    }

    if (datatype == 3) { // Thu nhỏ khúc này lại cho dễ nhìn
        $.get(`/getClientAdmin`, (data, status) => { // Thu nhỏ khúc này lại cho dễ nhìn
            var spHTML =
                `<div id="edit_ClientBox">
                        <div id = "edit_ClientBox_1">
                            <div id = "title_clientName">Name : </div>
                            <div><input type="text" name="NameBox" id="clientNameBox"></div>

                            <div id = "title_clientPassword">Password: </div>
                            <div><input type="text" name="PasswordBox" id="clientPasswordBox"></div>
                        </div>

                        <div id = "edit_ClientBox_2">
                            <div id = "title_clientEmail">Email: </div>
                            <div><input type="text" name="EmailBox" id="clientEmailBox"></div>

                            <div id = "title_clientAuthor">Author: </div>
                            <div><input type="text" name="AuthorBox" id="clientAuthorBox"></div>
                        </div>

                        <div id = "edit_ClientBox_3">
                            <div id = "title_clientTenKH">TenKH: </div>
                            <div><input type="text" name="TenKHBox" id="clientTenKHBox"></div>

                            <div id = "title_clientDiaChi">DiaChi: </div>
                            <div><input type="text" name="DiaChiBox" id="clientDiaChiBox"></div>
                        </div>

                        <div id = "edit_ClientBox_4">
                            <div id = "clientSDT">SDT: </div>
                            <div><input type="text" name="SDTBox" id="clientSDTBox"></div>
                            <div id = "btn_Box">
                                <input type="button" value="Save" onclick="onClientSave()">
                                <input type="button" value="Add New" onclick = "onClientAdd()">
                            </div>
                        </div>
                        </div>
            <input type="hidden" id="IdClient">
                <table border='1' style='width: 100%; border: 1px solid blue;' id = "Content_Box">
                    <tr style = 'font-weight : bold'>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Password</td>
                        <td>Email</td>
                        <td>Author</td>
                        <td>TenKH</td>
                        <td>DiaChi</td>
                        <td>SoDienThoai</td>
                        <td>Chức Năng</td>
                    </tr>
                    content
                </table>`;
            var tmp = "";
            data.forEach((item) => {
                tmp +=
                    `<tr>
                    <td> ${item.id_Login}</td>
                    <td> ${item.Name}</td>
                    <td> ${item.Password}</td>
                    <td> ${item.Email}</td>
                    <td> ${item.Author}</td>
                    <td> ${item.TenKH}</td>
                    <td> ${item.DiaChi}</td>
                    <td> ${item.SDT}</td>
                    <td>
                        <input type='button' value='Edit' onclick="onClientEdit('${item.id_Login}','${item.Name}','${item.Password}','${item.Email}','${item.Author}','${item.TenKH}','${item.DiaChi}','${item.SDT}')">
                        <input type='button' value='Delete' onclick= "onClientDelete('${item.id_Login}')">
                    </td>
                </tr>`;
            });
            // console.log(tmp);
            spHTML = spHTML.replace('content', tmp);
            $('#content').html(spHTML);
        })
    }

    if (datatype == 4) {
        $.get(`/getBillDetailAdmin`, (data, status) => {
            var spHTML =
                `
                <div id = "back_BTN"><input type="button" value = "Back" id="backBTN" onclick = "BackBill()"></div>
                <div id="edit_BillDetailBox" style = "margin: 10px;">
                        <div id = "title_BillDetailId_KH">Id Hóa đơn : </div>
                        <div id = "txtBox"><input type="text" name="id_KHBox" id="BillDetail_id"></div>

                        <div id = "title_BillDetailDate">Số lượng: </div>
                        <div id = "txtBox"><input type="text" name="DateBox" id="BillDetail_SoLuong"></div>

                        <div id = "title_BillDetailPrice">Giá: </div>
                        <div id = "txtBox"><input type="text" name="PriceBox" id="BillDetail_Price"></div>

                        <input type="button" value="Save" onclick="onBillDetailSave()">
                        <input type="button" value="Add New" onclick = "onBillDetailAdd()">
                </div>
            <input type="hidden" id="IdBillDetail">
                <table border='1' style='width: 100%; border: 1px solid blue;' id = "Content_Box">
                    <tr style = 'font-weight : bold'>
                        <td>Id Hoá Đơn</td>
                        <td>Id Sản Phẩm</td>
                        <td>Số lượng</td>
                        <td>Giá</td>
                        <td>Chức năng</td>
                    </tr>
                    content
                </table>`;
            var tmp = "";
            data.forEach((item) => {
                tmp +=
                    `<tr>
                    <td>${item.id_HD}</td>
                    <td>${item.id}</td>
                    <td>${item.SoLuong}</td>
                    <td>${item.Gia}$</td>
                    <td>
                        <input type='button' value='Edit' onclick="onBillDetailEdit(${item.id},${item.id_HD},'${item.SoLuong}','${item.Gia}')">
                        <input type='button' value='Delete' onclick= "onBillDetailDelete('${item.id}')">
                    </td>
                </tr>`;
            });
            // console.log(tmp);
            spHTML = spHTML.replace('content', tmp);
            $('#content').html(spHTML);
        })
    }
    if (datatype == 5) {
        $.get(`/getContactAdmin`, (data, status) => {
            var spHTML =
                `
            <input type="hidden" id="IdContact">
                <table border='1' style='width: 100%; border: 1px solid blue;' id = "Content_Box">
                    <tr style = 'font-weight : bold'>
                        <td>Họ</td>
                        <td>Tên</td>
                        <td>Email</td>
                        <td>SDT</td>
                        <td>Lời nhắn</td>
                        <td>Chức năng</td>
                    </tr>
                    content
                </table>`;
            var tmp = "";
            data.forEach((item) => {
                tmp +=
                    `<tr>
                    <td>${item.Ho}</td>
                    <td>${item.Ten}</td>
                    <td>${item.Email}</td>
                    <td>${item.SDT}</td>
                    <td>${item.Loi_nhan}</td>
                    <td>
                        <input type='button' value='Delete' onclick= "onDeleteContact('${item.ID_contact}')">
                    </td>
                </tr>`;
            });
            // console.log(tmp);
            spHTML = spHTML.replace('content', tmp);
            $('#content').html(spHTML);
            console.log(data)
        })
    }
};

$(document).ready(() => {
    var user = localStorage.getItem("admin");
    if (user === null || user === undefined) {
        $("#admin_Name").html("Guest");
    } else {
        var objUser = JSON.parse(user);
        $("#admin_Name").html(objUser[0].Name);
    }
})

$("#Log_Out").click(() => {
    localStorage.removeItem("admin");
})