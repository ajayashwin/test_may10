
var passwordinputsElement = document.getElementById("passwordinputEl");
var barconatiner = document.getElementById("barconatinerEl");
var bar1Element = document.getElementById("barEl");


passwordinputsElement.addEventListener("keydown", function() {
    barconatiner.classList.add("d-none");
    if (passwordinputsElement.value.length >= 4 && passwordinputsElement.value.isUpperCase()===true && passwordinputsElement.value.isLowerCase()===true) {
        bar1Element.style.backgroundColor = "red";
    }

});