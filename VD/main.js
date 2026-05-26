let btmclickme = document.getElementById("btmclickme");
let mesage = document.getElementById("message");

btmclickme.addEventListener("click", hamgido);

function hamgido() {
    mesage.textContent = "gia tri duoc thay doi";
    mesage.style.color = "red";
    mesage.style.backgroundColor = "yellow";
}
let usernameinput = document.getElementById("username");