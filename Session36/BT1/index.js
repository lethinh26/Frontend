let name = localStorage.getItem("name");
let inputName = document.querySelector("#name");
let labelName = document.querySelector("#labelName");

let boxNew = document.querySelector("#boxNew");
let boxName = document.querySelector("#boxName");



function saveLocal() {
  name = inputName.value.trim()
  localStorage.setItem("name", name);
}

function checkName() {
  if (!name) {
    saveLocal();
    checkExist()
  }
}

function rename() {
  name = prompt("Nhập tên mới");
  localStorage.setItem("name", name);
  alert("Đổi tên thành công");
  checkExist();
}

function checkExist() {
  boxName.classList.remove("d-none", "d-block");
  boxNew.classList.remove("d-none", "d-block");
  if (name) {
    labelName.innerText = `Xin chào ${name}`
    boxNew.classList.add("d-none");
    boxName.classList.add("d-block");
  }else {
    boxNew.classList.add("d-block");
    boxName.classList.add("d-none");
  }
}
checkExist();


