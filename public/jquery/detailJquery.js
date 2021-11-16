
$(document).ready(function () {
    var arr = window.location.href.split("/");
    $.get("http://localhost:3000/getDetailData/" + arr[arr.length - 1], function (data, status) {
     
        $("#name").html(data.Name);
        $("#Gia").html(data.Gia + "$");
        $("#img").attr("src", "../images/" + data.Image);
        $("#mota").html(data.Mota);
    });

    var user = localStorage.getItem("user");
    if (user === null || user === undefined) {
        $("#user").html("");
    } else {
        var objUser = JSON.parse(user);
        $("#user").html("Xin chao:" + objUser[0].Name);
    }

    $.get("http://localhost:3000/getImage/" + arr[arr.length - 1], (data, status) => {
        $("#smalling").html(data);
    });
});
