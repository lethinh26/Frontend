let btn = document.getElementById("submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = document.getElementById("input").value;
  let ol = document.getElementById("list");
  let li = document.createElement("li");
  li.innerText = value;
  ol.appendChild(li);

})
