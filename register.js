const inputEmail = document.querySelector('#email');
const inputPasswordOne = document.querySelector('#passwordOne');
const inputPasswordTwo = document.querySelector('#passwordTwo');
const errorMsg = document.querySelector('.errorMessage');

const button = document.querySelector('.submit-btn');

button.onclick = () => {
    let email = inputEmail.value;
    let psw1 = inputPasswordOne.value;
    let psw2 = inputPasswordTwo.value;

    if (email === "" || psw1 === "" || psw2 === "") {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Please fill all fields.";
    } else if (!isValidEmail(email)) {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Email address is not valid.";
    } else if (psw1 !== psw2) {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Passwords do not match!";
    } else if (psw1.length < 4 || psw1.length > 20) {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "Password length should be between 4 and 20 characters!";
    } else if (localStorage.getItem(email) !== null) {
        errorMsg.style.color = "red";
        errorMsg.innerHTML = "This user already exists! Please login.";
    } else {
        localStorage.setItem(email, JSON.stringify({
            "password": psw1,
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }));
        errorMsg.style.color = "green";
        errorMsg.innerHTML = "Registration successful! Please login.";
    }
}

// chatGPT function is valid Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}