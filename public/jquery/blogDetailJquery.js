$(document).ready(function () {
    var arr = window.location.href.split("/");
    $.get("/getblog/" + arr[arr.length - 1], function (data, status) {
        $("#content_blogDetail").html(data);
    });

    var user = localStorage.getItem("user");
    if (user === null || user === undefined) {
        $("#user").html("Guest");
    } else {
        var objUser = JSON.parse(user);
        $("#user").html(objUser[0].Name);
    }
});
