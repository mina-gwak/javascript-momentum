const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getDate() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 9 ? `0${hours}` : hours}:${minutes < 9 ? `0${minutes}` : minutes}:${seconds < 9 ? `0${seconds}` : seconds}`;
}

function init() {
  getDate();
  setInterval(getDate, 1000);
}

init();