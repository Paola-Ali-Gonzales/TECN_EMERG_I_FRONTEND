var inputTypeRegister = document.getElementById("registerType")
var rbComprador = document.getElementById("comprador")

$(document).ready(function () {
    $('.radio-group .radio').click(function () {
        $('.selected .fa').removeClass('fa-check');
        $('.radio').removeClass('selected');
        $(this).addClass('selected');

        if (rbComprador.classList.contains("selected")) {
            inputTypeRegister.setAttribute('value', 0)
        } else {
            inputTypeRegister.setAttribute('value', 1)
        } 
    });
});