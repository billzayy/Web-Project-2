$(document).ready(function () {
    $.get("getblogs/", function (data, status) {
        $("#conten").html(data);
    });
});
