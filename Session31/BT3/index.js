let body = document.querySelector("body");
let green = document.getElementById("green");
let red = document.getElementById("red");
let purple = document.getElementById("purple");

green.addEventListener("click", function () {
  body.style.background = "green";
})

red.addEventListener("click", function () {
  body.style.background = "red";
})

purple.addEventListener("click", function () {
  body.style.background = "purple";
})
