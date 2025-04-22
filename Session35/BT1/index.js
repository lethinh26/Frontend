let btn = document.getElementById("submit");
let input = document.getElementById("input");
let list = document.getElementById("list");

let savedList = JSON.parse(localStorage.getItem("todoList")) || [];
savedList.forEach((item) => {
  addItemToList(item);
});
function saveLocal() {
  let items = [];
  list.querySelectorAll("li").forEach((li) => {
    let text = li.childNodes[0].textContent.trim();
    items.push(text);
  });
  localStorage.setItem("todoList", JSON.stringify(items));
}

function addItemToList(value) {
  let li = document.createElement("li");
  li.classList.add("list-group-item");

  li.innerHTML = `
    ${value}
    <button class="ms-2 btn btn-danger btn-sm float-end deleteBtn">Xóa</button> 
    <button class="btn btn-warning btn-sm float-end editBtn">Sửa</button>
  `;

  li.querySelector(".deleteBtn").addEventListener("click", function () {
    let check = confirm("Bạn có chắc chắn muốn xóa không?");
    if (check) {
      list.removeChild(li);
      saveLocal();
      alert("Xóa thành công");
    } else {
      alert("Đã hủy");
    }
  });

  li.querySelector(".editBtn").addEventListener("click", function () {
    let newValue = prompt("Nhập giá trị mới", value);
    if (newValue && newValue.trim() !== "") {
      li.innerHTML = `
        ${newValue}
        <button class="ms-2 btn btn-danger btn-sm float-end deleteBtn">Xóa</button> 
        <button class="btn btn-warning btn-sm float-end editBtn">Sửa</button>
      `;
      li.querySelector(".deleteBtn").addEventListener("click", () => li.remove() || saveLocal());
      li.querySelector(".editBtn").addEventListener("click", () => {
        let updatedValue = prompt("Nhập giá trị mới", newValue);
        if (updatedValue && updatedValue.trim() !== "") {
          li.innerHTML = `
            ${updatedValue}
            <button class="ms-2 btn btn-danger btn-sm float-end deleteBtn">Xóa</button> 
            <button class="btn btn-warning btn-sm float-end editBtn">Sửa</button>
          `;
          saveLocal();
        }
      });
      saveLocal();
    }
  });

  list.appendChild(li);
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let value = input.value.trim();
  if (value === "") {
    alert("Phải nhập nội dung");
    return;
  }

  addItemToList(value);
  saveLocal();
  input.value = "";
});
