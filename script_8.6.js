
var korisnik = document.getElementById("username");
var vnes = document.getElementById("password");
var dugme = document.getElementById("kopce");
var spec = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}/g;
dugme.onclick = function addEvent() {
if (korisnik.value == "" && vnes.value == "") {
document.getElementById("span").innerHTML = "Please enter username and password";
document.getElementById("span").style.color = "red";
}else if (!vnes.value.match(spec)){
        document.getElementById("span").innerHTML = "The password must contain at least six characters :one capital character , one small character, one special and one numeric character!"
           document.getElementById("span").style.color = "blue"; 
}else if (vnes.value.match(spec)){
        document.getElementById("span").innerHTML = "Password is valid!"
           document.getElementById("span").style.color = "green"; 
}
}
                
