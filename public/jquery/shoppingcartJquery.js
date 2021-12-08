$(document).ready(function () {
    getShoppingCard();
    var user = localStorage.getItem("user");
    if (user === null || user === undefined) {
        $("#user").html("Guest");
    } else {
        var objUser = JSON.parse(user);
        $("#user").html(objUser[0].Name);
    }
    
});
// hàm xuất sản phẩm
function getShoppingCard() {
    if (localStorage.getItem("shoppingcard") == undefined || localStorage.getItem("shoppingcard") == "[]") {
        $('#content').html("Vui long chon san pham");
    }
    else {
        $.post("/getShoppingCard", {
            arrProductId: localStorage.getItem("shoppingcard").replace('[', '(').replace(']', ')')
        }, function (data, status) {
            $('#content').html(data);
            // gọi hàm tổng tiền
            TongTien();
        });
    }
}
// hàm mua sản phẩm
function buyProducts() {
    if (localStorage.getItem("shoppingcard") == undefined || localStorage.getItem("shoppingcard") == "[]") {
        var choice = confirm("Bạn chưa có sản phẩm giỏ hàng?")
    }
    else {
    var arrSP = [];

    $(".product").toArray().forEach(item => {
        arrSP.push({
            id: $(item).attr("productId"),
            SoLuong: $(item).find("#sl_input").val(),
            Gia: $(item).attr("price"),
        })
    });
    $.post("/buyProduct", {
        id_KH: JSON.parse(localStorage.getItem('user'))[0].id_Login,
        TongTien: JSON.parse(localStorage.getItem('Tongtien')), // Lấy giá trị từ biến tổng tiền trong localStrorage
        arrSP: arrSP,
    }, function (data, status) {
        alert("đăt hang thanh cong");
        localStorage.removeItem("shoppingcard");
        window.location.reload('/shoppingcard');
        // Xóa biến Tổng Tiền trong localStorage
        localStorage.removeItem("Tongtien");
    });
}
}
// hàm tổng tiền
function TongTien() {
    var arrSP = [];
    tongTien = 0
    $(".product").toArray().forEach(item => {
        arrSP.push({
            id: $(item).attr("productId"),
            SoLuong: $(item).find("#sl_input").val(),
            Gia: $(item).attr("price"),
        })
        tongTien += $(item).attr("price") * $(item).find("#sl_input").val()
    });
    $('#thanhToan').html(tongTien + "$");
    // Tạo tổng tiền trong localStorage
    localStorage.setItem('Tongtien', tongTien)
    
}
// xóa tất cả
function delAll() {
    if (localStorage.getItem("shoppingcard") == undefined || localStorage.getItem("shoppingcard") == "[]") {
        var choice = confirm("Bạn chưa có sản phẩm giỏ hàng ?")
    }
    else {
    var choice = confirm("Bạn có muốn xóa hết giỏ hàng?")
    if (choice == true) {
        localStorage.removeItem("shoppingcard")
        window.location.href = '/index'
    }
    }

}
// xóa từng sản phẩm
function onDeleteProduct(ProductId) {
    var arrSP = JSON.parse(localStorage.getItem("shoppingcard"));
    var arrSP2 = [];
    arrSP.forEach((item) => {
        if (item != ProductId) {
            arrSP2.push(item);
        }
    });
    localStorage.setItem("shoppingcard", JSON.stringify(arrSP2));
    getShoppingCard();
}
// xuất thông tin người mua
$(document).ready(function () {
    let a = JSON.parse(localStorage.getItem('user'))[0].id
    $.get(`getInfo/${a}`, function(data, status){
          $('#content_info').html(data);
        });
    getShoppingCard();
    
});