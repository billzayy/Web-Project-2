$(document).ready(function () {
    $.get("/getblogs", function (data, status) {
        $("#content").html(data);
    });

    var user = localStorage.getItem("user");
    if (user === null || user === undefined) {
        $("#user").html("Guest");
    } else {
        var objUser = JSON.parse(user);
        $("#user").html(objUser[0].Name);
    }
});

