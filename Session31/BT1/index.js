let showBtn = document.getElementById("btnShow");
let hideBtn = document.getElementById("btnHide");
let text = document.getElementById("text");

showBtn.addEventListener("click", function () {
  text.style.display = "block";
})

hideBtn.addEventListener("click", function () {
  text.style.display = "none";
})