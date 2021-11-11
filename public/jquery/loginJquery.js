$(document).ready(function () {
    $('#a1').click(function login() {
        $.post(
            "/getlogin",
            {
                user: $("#user").val(),
                password: $("#password").val(),
            },
            function (data, status) {
                if (data.length === 0) {
                    alert("login fail");
                }
                else if (data[0].Author === "Admin"){
                    window.location.href = "./admin";
                    localStorage.setItem("user", JSON.stringify(data));
                }
                else {
                    window.location.href = "./index";
                    localStorage.setItem("user", JSON.stringify(data));
                }
            }
        );
    })

    $("#a2").click(function signUp() {
        var userName = $("#signup_username").val(); 
        var password = $("#signup_password").val();
        var email = $("#signup_email").val();

        $.get(`/getsignUp/${userName}/${password}/${email}`, (data, status) => {
            // alert(JSON.stringify(data));
            if (data === "1") {
                alert("Sign up Successful");
            } else {
                window.location.href = "./index";
                localStorage.setItem("signup_username", JSON.stringify(data));
                alert("Sign Up Successful");
            }
        });
    });
})