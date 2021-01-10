const form = document.querySelector(".js-form");
const getName = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

function showGreeting(name) {
  form.classList.remove("show");
  greeting.innerText = `Hello ${name}`
  greeting.classList.add("show");
}

function saveName(name) {
  localStorage.setItem("currentUser", name);
  showGreeting(name);
}

function handleSubmit(event) {
  event.preventDefault();
  const userName = getName.value;
  saveName(userName);
}

function askForName() {
  form.classList.add("show");
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const user = localStorage.getItem("currentUser");
  if (user === null) {
    askForName();
  } else {
    showGreeting(user);
  }
}

function init() {
  loadName();
}

init();