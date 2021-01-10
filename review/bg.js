const body = document.querySelector("body");

function showBG() {
  const imageNum = Math.floor(Math.random() * 6) + 1;
  const image = new Image();
  image.src = `../images/${imageNum}.jpg`;
  body.prepend(image);
  image.classList.add("bgImage");
}

function init() {
  showBG();
}

init();