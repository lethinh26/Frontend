let btnIncrease = document.getElementById("btnIncrease");
let btnDecrease = document.getElementById("btnDecrease");
let text = document.getElementById("text");
let size = 16;

btnIncrease.addEventListener("click", function(e) {
  text.style.fontSize = `${size+=5}px`;
});

btnDecrease.addEventListener("click", function(e) {
  text.style.fontSize = `${size-=5}px`;
});
