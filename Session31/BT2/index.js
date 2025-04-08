let body = document.querySelector("body");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (body.style.background === "white") {
    body.style.background = "black";
    body.style.color = "white";
    btn.innerText = "Toggle light mode"
  }
  else {
    body.style.background = "white";
    body.style.color = "black";
    btn.innerText = "Toggle dark mode"
  }
})