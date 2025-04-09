let btn = document.getElementById("submit");
let input = document.getElementById("input");
let list = document.getElementById("list");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let value = input.value.trim();
  if (value === "") {
    alert("Phải nhập nội dung");
    return;
  }

  let li = document.createElement("li");
  li.classList.add("list-group-item");

  li.innerHTML = `
    ${value}
    <button class="ms-2 btn btn-danger btn-sm float-end deleteBtn">Xóa</button> 
    <button class="btn btn-warning btn-sm float-end editBtn">Sửa</button>
  `;

  let deleteBtn = li.querySelector(".deleteBtn");
  let editBtn = li.querySelector(".editBtn");

  deleteBtn.addEventListener("click", function () {
    let check = confirm("Bạn có chắc chắn muốn xóa không?");
    if (check) {
      list.removeChild(li);
      alert("Xóa thành công");
    } else {
      alert("Đã hủy");
    }
  });

  editBtn.addEventListener("click", function () {
    let newValue = prompt("Nhập giá trị mới", value);
    if (newValue && newValue.trim() !== "") {
      li.innerHTML = `
        ${newValue}
        <button class="ms-2 btn btn-danger btn-sm float-end deleteBtn">Xóa</button> 
        <button class="btn btn-warning btn-sm float-end editBtn">Sửa</button>
      `;
      li.querySelector(".deleteBtn").addEventListener("click", () => deleteBtn.click());
      li.querySelector(".editBtn").addEventListener("click", () => editBtn.click());
    }
  });

  list.appendChild(li);
  input.value = "";
});
