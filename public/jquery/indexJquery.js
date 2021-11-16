$(document).ready(function () {
    $.get("http://localhost:3000/", function (data, status) {
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

function search(event) {
    if (event.keyCode === 13) {
        $.post(
            "http://localhost:3000/search",
            {
                search: $("#search").val(),
            },
            function (data, status) {
                $("#content").html(data);
            }
        );
    }
}

function menuClick(productType) {
    $.post(
        "http://localhost:3000/getProducByCatId",
        {
            catId: productType,
        },
        function (data, status) {
            $("#content").html(data);
        }
    );
}
function logout() {
    localStorage.removeItem("user");
    window.location.href = "./login";
}
function addToCard(productId){
    var arrProductId =  localStorage.getItem("shoppingcard");
     if(arrProductId == null || arrProductId == undefined)  {
       arrProductId = [productId];
     }
     else{
       arrProductId = JSON.parse(arrProductId);
       if(arrProductId.indexOf(productId) == -1){
         arrProductId.push(productId);
       }
     }
     arrProductId = JSON.stringify(arrProductId);
     localStorage.setItem("shoppingcard",arrProductId);
 }