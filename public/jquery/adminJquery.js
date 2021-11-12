$(document).ready(() => {
    $("#SanPhamId").click(() => {
        $('.admin-content-right-bg').remove();
        $.get(`/getProductAdmin`, (data, status) => {
            // data.forEach(item => {
            //     console.log(item)
            //     $("#ProductId").html(item.id)
            //     $("#ProductImage").attr("src","./images/"+item.Image)
            //     $("#ProductName").html(item.Name)
            //     $("#ProductPrice").html(item.Gia)
            // })
            // console.log(data)
            var spHTML = "<table border='1' style='width: 100%;' ><tr><td>Id</td><td>Image</td> <td>Name</td><td>Price</td><td>Chức Năng</td></tr>content</table>";
            var tmp = "";
            data.forEach((item) => {
                tmp += "<tr><td>" + item.id + "</td><td><img width='100' src='/images/" + item.Image + "'/></td><td>" + item.Name + "</td><td>" + item.Gia +"0$" + "</td><td><input type='button' value='Edit' onclick=onEdit('" + item.id + "','" + item.Name + "','" + item.Gia + "') /><input type='button' value='Delete'  onclick='onDelete(" + item.id + ")'/></td></tr>";
            });
            // console.log(tmp);
            spHTML = spHTML.replace('content', tmp);
            $('#content').html(spHTML);
        })
    });

    var user = localStorage.getItem("admin");
    if (user === null || user === undefined) {
        $("#admin_Name").html("Guest");
    } else {
        var objUser = JSON.parse(user);
        $("#admin_Name").html(objUser[0].Name);
    }

    $("#Log_Out").click(() => {
        localStorage.removeItem("admin");
    })
})