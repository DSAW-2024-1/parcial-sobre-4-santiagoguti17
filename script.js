var emailInput = document.getElementById("email");
function saveEmail() {
    localStorage.setItem("emailGuardado", emailInput.value);
}
var bottonGoIndex = document.getElementById("botton-sub")
function goIndex(){
        window.location.href = "index-succ.html";
    

      
}