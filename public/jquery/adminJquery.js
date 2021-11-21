function onDelete(id) {
    $('#Id').val(id)
    let idBox = $('#Id').val()

    $.get(`/deleteAdmin/${idBox}`, (data, status) => {
        getData(1);
    })
}
function onAddNew() {
    let Name = $('#txtname').val()
    let Gia = $('#txtGia').val()
    let Img = $('#txtIMG').val()
    let arrIMG = Img.split('\\')
    $.get(`/addAdmin/${Name}/${Gia}/${arrIMG[2]}`, (data, status) => {
        getData(1)
        $('#txtname').val("")
        $('#txtGia').val("")
        $('#txtIMG').val("")
        $('#Id').val("")
    })
}
function onEdit(id, Name, Gia,IMG) {
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

    $.get(`/updateAdmin/${id}/${Name}/${Gia}/${arrIMG[2]}`, (data, status) => {
        getData(1);
        $('#txtname').val("");
        $('#txtGia').val("");
        $('#txtIMG').val("");
        $('#Id').val("");
    })
}

function getData(datatype) {
    $('.admin-content-right-bg').remove();
    $.get(`/getProductAdmin`, (data, status) => {
        var spHTML =
            `<table border='1' style='width: 100%; border: 1px solid blue;' id = "Content_Box">
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
