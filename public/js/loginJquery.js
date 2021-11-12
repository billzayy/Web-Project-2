$(document).ready(function () {

    $('.create-account').click(function(){
        $('form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });

    $('.Log-In').click(function(){
        $('form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });
})