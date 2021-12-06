
$(document).ready(function () {
    var arr = window.location.href.split("/");
    $.get("http://localhost:3000/getDetailData/" + arr[arr.length - 1], function (data, status) {
     
        $("#content").html(data);
       
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