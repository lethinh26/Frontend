let progress = 0;
let bar = document.getElementById("bar");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let barOpacity = 0.1;

function updateBar() {
  bar.style.width = progress + "%";
  bar.innerText = progress + "%";

  bar.style.opacity = barOpacity;
}

increaseBtn.addEventListener("click", function () {
  if (progress < 100) {
    progress += 10;
    barOpacity < 1 ? (barOpacity += 0.1) : (barOpacity = 1);
    updateBar();
  }
});

decreaseBtn.addEventListener("click", function () {
  if (progress > 0) {
    progress -= 10;
    barOpacity > 0.1 ? (barOpacity -= 0.1) : (barOpacity = 0.1);
    updateBar();
  }
});


