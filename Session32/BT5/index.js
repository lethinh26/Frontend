let btn = document.getElementById("submit");
let input = document.getElementById("input");
let list = document.getElementById("list");

btn.addEventListener("click", function(e) {
  let value = input.value;
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `${value} <button class="btn btn-danger btn-sm float-end">X</button>`;
  li.querySelector("button").addEventListener("click", function() {
    list.removeChild(li);
  });
  list.appendChild(li);
});
