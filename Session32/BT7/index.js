let img = document.querySelectorAll('img');
let fullImg = document.getElementById('fullImg');
let imgFull = fullImg.querySelector('img');

img.forEach((item) => {
  item.addEventListener("click", () => {
    imgFull.src = item.src;
    fullImg.style.display = "flex";
  });
});

debugger;
fullImg.addEventListener('click', () => {
  fullImg.style.display = "none";
  imgFull.src = "";
});


