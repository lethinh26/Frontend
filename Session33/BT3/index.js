let list = [
  {product: "Rau sạch", category: "Đồ ăn"},
  {product: "Thịt lợn", category: "Đồ ăn"},
  {product: "Pepsi", category: "Đồ uống"},
  {product: "Nước lọc", category: "Đồ uống"},
  {product: "Cờ lê", category: "Dụng cụ"},
  {product: "Vít", category: "Dụng cụ"}
]

let cate = new Set(list.map(item => item.category));
let select = document.getElementById("list");
let count = 1;
let filter = document.getElementById("filter");
let p = document.querySelector("p");

cate.forEach((item) => {
  let option = document.createElement("option");
  option.innerHTML += `<option value="${count++}">${item}</option>`;
  select.appendChild(option);
})

let content = "";
list.forEach(item => {
  content += `<strong>Tên món ăn:</strong> ${item.product} <strong>Danh mục:</strong> ${item.category} <br>`;
})
p.innerHTML = content;

filter.addEventListener("click", function() {
  let value = select.value;
  let content = "";
  list.forEach(item => {
    if (item.category === value) {
      content += `<strong>Tên món ăn:</strong> ${item.product} <strong>Danh mục:</strong> ${item.category} <br>`;
    }
  })
  p.innerHTML = content;
});


