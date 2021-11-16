$(document).ready(function () {
    $.get("getTypeProduct/", function (data, status) {
        $("#content").html(data);
    });
});
