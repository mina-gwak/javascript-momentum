const clock = document.querySelector(".js-clock");
const clockTitle = clock.querySelector("h1");

function getDate() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clockTitle.innerText = `${hour <= 9 ? `0${hour}` : hour}:${minute <= 9 ? `0${minute}` : minute}:${second <= 9 ? `0${second}` : second}`;
}

function init() {
  getDate();
  setInterval(getDate, 1000);
}

init();