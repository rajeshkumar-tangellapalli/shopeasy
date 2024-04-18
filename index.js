let loginForm = document.getElementById("loginForm");
let loginButton = document.getElementById("loginButton");

function login() {
    let userName = document.getElementById("email").value;
    let passWord = document.getElementById("pword").value;

    if ((userName === "rajeshkumar") && (passWord === "123456")) {
        loginForm.setAttribute("action", "index.html");
    }else {
        loginForm.setAttribute("action", "error.index");
    }
}

loginButton.onclick = login;