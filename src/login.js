const loginScreen = document.querySelector(".login");
const loginForm = document.querySelector(".loginForm");
const loginUserInput = document.querySelector(".loginUserInput");
const userInfoName = document.querySelector(".userInfoName");

const HIDDEN_CLASS = "hidden";
const USER_KEY = "user";

function getUserName(event) {
    event.preventDefault();
    loginScreen.classList.add("hidden");
    const userName = loginUserInput.value;
    userInfoName.innerText = `${userName}`
    localStorage.setItem(USER_KEY, userName);
}
loginForm.addEventListener("submit", getUserName);
const savedUserName = localStorage.getItem(USER_KEY);

if (savedUserName !== null) {
    loginScreen.classList.add("hidden");
    const userName = localStorage.getItem(USER_KEY);
    userInfoName.innerText = `${userName}`
} 