let body = document.querySelector("body");
let btnModal = document.getElementById("btnModal");
let btnClose = document.getElementById("btnClose");
let modal = document.getElementById("modal");

btnModal.onclick = () => {
  modal.style.display = "block";
  body.style.backgroundColor = "#808080";
}

btnClose.onclick = () => {
  modal.style.display = "none";
  body.style.backgroundColor = "white";
}

