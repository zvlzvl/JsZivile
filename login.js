const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector("#login_password");
const errorMsg = document.querySelector('.errorMessage');
const button = document.querySelector('.submit-btn');

button.onclick = () => {
    let email = loginEmail.value;
    let psw1 = loginPassword.value;
    let userExists = localStorage.getItem(email);

    if (email === "" || psw1 === "") {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Please fill all fields.";
    } else if (userExists === null) {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Such user doesn't exist.";
    } else if (JSON.parse(userExists).password !== psw1) {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Passwords is not correct!";
    } else {
        localStorage.setItem("logged_user", email);
        window.location.href = "index.html";
    }
}

