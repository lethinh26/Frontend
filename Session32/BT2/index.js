let count = 0;
let btn = document.getElementById("btn");
let p = document.querySelector("#box p");

btn.addEventListener("click", function () {
  count++;
  p.innerText = "Số lần bấm: " + count;
});