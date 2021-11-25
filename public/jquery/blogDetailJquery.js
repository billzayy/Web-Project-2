$(document).ready(function () {
    
    var arr = window.location.href.split("/");
    console.log(arr)
    $.get("http://localhost:3000/getblog/" + arr[arr.length - 1], function (data, status) {
        console.log(data)
        console.log("??????")
        $("#content").html(data);
        
    });
});
