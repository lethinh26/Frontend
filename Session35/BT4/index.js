let employee = JSON.parse(localStorage.getItem('employee')) || [];
let name = document.querySelector("#username")
let job = document.querySelector("#job")

let page = document.getElementById("page");
let currentPage = 1;
let valueInPage = 3;


function saveLocal(obj) {
  employee.push(obj)
  localStorage.setItem('employee', JSON.stringify(employee));
}

function renderData(array = employee) {
  let start = (currentPage - 1) * valueInPage;
  let end = start + valueInPage;
  let paginatedItems = array.slice(start, end);

  let html = paginatedItems.reduce((temp, employee, index) => temp + `
    <tr>
      <td>${start+index+1}</td>
      <td>${employee.username}</td>
      <td>${employee.job}</td>
    </tr>
  `, "");

  document.querySelector("#tableBody").innerHTML = html;
  renderPagination(array);
}

function addEmployee() {
  saveLocal({username: name.value.trim(), job: job.value.trim()});
  renderData();
}

function renderPagination(array = employee) {
  let totalPages = Math.ceil(array.length / valueInPage);
  let pagination = document.getElementById("page");
  let html = `<nav><ul class="pagination justify-content-center">`;

  html += `
    <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <button class="page-link" onclick="choosePage(${currentPage - 1})">Previous</button>
    </li>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <button class="page-link" onclick="choosePage(${i})">${i}</button>
      </li>
    `;
  }

  html += `
    <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
      <button class="page-link" onclick="choosePage(${currentPage + 1})">Next</button>
    </li>
  `;

  html += `</ul></nav>`;
  pagination.innerHTML = html;
}


function choosePage(pageNumber) {
  let totalPages = Math.ceil(employee.length / valueInPage);
  if (pageNumber < 1 || pageNumber > totalPages) return;
  currentPage = pageNumber;
  renderData();
}

renderData();

