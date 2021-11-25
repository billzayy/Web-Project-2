$(document).ready(function () {
    $.get("http://localhost:3000/all", function (data, status) {
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
