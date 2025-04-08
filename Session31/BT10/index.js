let tableBody = document.getElementById("tableBody");
let btn = document.getElementById("btn");
let page = document.getElementById("page");
let itemsPerPage = 3;
let currentPage = 0;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.getElementById("username").value;
  let job = document.getElementById("job").value;

  let tr = document.createElement("tr");
  tr.innerHTML =
    `<td>${tableBody.children.length + 1}</td>` +
    `<td>${name}</td>` +
    `<td>${job}</td>`;
  tableBody.appendChild(tr);

  let length = tableBody.children.length;
  let pageCount = Math.ceil(length / itemsPerPage);
  page.innerHTML = "";

  for (let i = 0; i < length; i++) {
    tableBody.children[i].style.display = (Math.floor(i / itemsPerPage) === currentPage) ? "" : "none";
  }

  let pageList = document.createElement("ul");
  pageList.className = "pagination";

  let prev = document.createElement("li");
  prev.className = "page-item" + (currentPage === 0 ? " disabled" : "");
  prev.innerHTML = `<a class="page-link" href="#">Previous</a>`;
  prev.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 0) {
      currentPage--;
      for (let i = 0; i < length; i++) {
        tableBody.children[i].style.display = (Math.floor(i / itemsPerPage) === currentPage) ? "" : "none";
      }
      btn.click();
    }
  });
  pageList.appendChild(prev);

  for (let i = 0; i < pageCount; i++) {
    let li = document.createElement("li");
    li.className = "page-item" + (i === currentPage ? " active" : "");
    li.innerHTML = `<a class="page-link" href="#">${i + 1}</a>`;
    li.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = i;
      for (let j = 0; j < length; j++) {
        tableBody.children[j].style.display = (Math.floor(j / itemsPerPage) === currentPage) ? "" : "none";
      }
      btn.click();
    });
    pageList.appendChild(li);
  }

  let next = document.createElement("li");
  next.className = "page-item" + (currentPage === pageCount - 1 ? " disabled" : "");
  next.innerHTML = `<a class="page-link" href="#">Next</a>`;
  next.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < pageCount - 1) {
      currentPage++;
      for (let i = 0; i < length; i++) {
        tableBody.children[i].style.display = (Math.floor(i / itemsPerPage) === currentPage) ? "" : "none";
      }
      btn.click();
    }
  });
  pageList.appendChild(next);

  page.appendChild(pageList);
});
