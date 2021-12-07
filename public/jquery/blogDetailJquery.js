$(document).ready(function () {
    var arr = window.location.href.split("/");
    console.log(arr)
    $.get("/getblog/" + arr[arr.length - 1], function (data, status) {
        console.log(data)
        console.log("??????")
        $("#content_blogDetail").html(data);
    });
});
