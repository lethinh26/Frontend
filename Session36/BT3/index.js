let bgColor = localStorage.getItem("bgColor");

function setbgGreen() {
  bgColor = "green";
  saveLocal();
  setColor();
}

function setbgBlue() {
  bgColor = "blue";
  saveLocal();
  setColor();
}

function setbgYellow() {
  bgColor = "yellow";
  saveLocal();
  setColor();
}

function setbgRed() {
  bgColor = "red";
  saveLocal();
  setColor();
}

function setColor() {
  document.body.style.backgroundColor = bgColor;
}
setColor();

function saveLocal() {
  localStorage.setItem("bgColor", bgColor);
}