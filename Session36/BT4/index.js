let color = localStorage.getItem("color");


function changeDataColor() {
  if (color === "dark-mode") {
    color = "light-mode"
    changeColor(false);
  }else {
    color = "dark-mode"
    changeColor(true);
  }

  localStorage.setItem("color", color);
}

function changeColor(type) {
  document.body.classList.toggle("dark-mode", type);
  document.querySelectorAll(".product-info").forEach((item) => item.classList.toggle("dark-mode", type));
}

changeColor(false);