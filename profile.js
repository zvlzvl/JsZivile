const userEmail = localStorage.getItem("logged_user");
let userData = JSON.parse(localStorage.getItem(userEmail));
const inputPasswordOld = document.querySelector('#old_password');
const inputNewPassword = document.querySelector('#new_password_1');
const inputNewPasswordRepeat = document.querySelector('#new_password_2');
const errorMsgPsw = document.querySelector('.errorMessagePsw');
const errorMsgImg = document.querySelector('.errorMessageImg');
const inputImage = document.querySelector('#user_img');
const imageDiv = document.querySelector('.user_image');
const buttonPassword = document.querySelector('.psw');
const buttonImage = document.querySelector('.img');

document.querySelector("h1").innerText = userEmail;
imageDiv.src = userData.image;

buttonPassword.onclick = () => {
    let pswOld = inputPasswordOld.value;
    let psw1 = inputNewPassword.value;
    let psw2 = inputNewPasswordRepeat.value;

    if (psw1 === "" || psw2 === "" || pswOld === "") {
        errorMsgPsw.style.color = "red";
        errorMsgPsw.innerText = "Please fill all fields.";
    } else if (userData.password !== pswOld) {
        errorMsgPsw.style.color = "red";
        errorMsgPsw.innerText = "Wrong old password!";
    } else if (psw1 !== psw2) {
        errorMsgPsw.style.color = "red";
        errorMsgPsw.innerText = "Passwords do not match!";
    } else if (psw1.length < 4 || psw1.length > 20) {
        errorMsgPsw.style.color = "red";
        errorMsgPsw.innerText = "Password length should be between 4 and 20 characters!";
    } else {
        userData.password = psw1;
        localStorage.setItem(userEmail, JSON.stringify(userData));
        errorMsgPsw.style.color = "green";
        errorMsgPsw.innerText = "Password was changed successfully!";
        clearInputs();
    }
}

buttonImage.onclick = () => {
    let newImageUrl = inputImage.value;
    if (newImageUrl === "") {
        errorMsgImg.style.color = "red";
        errorMsgImg.innerText = "Please add image url.";
    } else if (!isValidImageUrl(newImageUrl)) {
        errorMsgImg.style.color = "red";
        errorMsgImg.innerText = "Image url is not valid!";
    } else {
        userData.image = newImageUrl;
        localStorage.setItem(userEmail, JSON.stringify(userData));
        imageDiv.src = userData.image;
        errorMsgImg.style.color = "green";
        errorMsgImg.innerText = "Image was changed successfully!";
        clearInputs();
    }
}

//chat GPT function check url
function isValidImageUrl(url) {
    try {
        const validUrl = new URL(url);
        return /\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$/i.test(validUrl.pathname);
    } catch (error) {
        return false;
    }
}

function clearInputs() {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        input.value = '';
    })
}