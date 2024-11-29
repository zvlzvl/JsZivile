// top
let loggedUser = localStorage.getItem("logged_user");
if (loggedUser === null) {
    window.location.href = "login.html";
}
const topDiv = document.querySelector(".top");
topDiv.innerText = `logged in as ${loggedUser}`;
// top end

// toolbar
const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.onclick = () => {
    localStorage.removeItem("logged_user");
    window.location.href = "login.html";
}
// toolbar end