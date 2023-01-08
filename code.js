window.onload = function () {
    var button = document.getElementById("submit");
    button.onclick = clicked;
}

function clicked() {
    var div = document.getElementById("meetingCard");
    var secondDiv = document.getElementById("thxCard");
    var select = document.getElementById("select");
    var radio = document.getElementsByName("radio");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            div.setAttribute("class", "hide");
            secondDiv.removeAttribute("class", "hide");
            select.innerHTML = "You selected " + radio[i].value + " out of 5";
        }
    }
}