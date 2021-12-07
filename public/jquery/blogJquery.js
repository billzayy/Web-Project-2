$(document).ready(function () {
    $.get("/getblogs", function (data, status) {
        $("#content").html(data);
    });
});

