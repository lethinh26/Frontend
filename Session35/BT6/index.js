let category = JSON.parse(localStorage.getItem('category')) || [];

function renderData() {
  let table = document.getElementById('categoryTable');
  let filter = document.getElementById('status').value;
  table.innerHTML = '';
  category.filter(cat => (filter === 'all' || cat.status === filter)).forEach(cat => {
      let row = document.createElement('tr');
      row.innerHTML = `
          <td>${cat.code}</td>
          <td>${cat.name}</td>
          <td><span class="status-tag ${cat.status === 'active' ? 'active' : 'inactive'}">
            ${cat.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
          </span></td>
          <td class="actions">
            <span onclick="deleteCategory('${cat.code}')">X</span>
            <span onclick="editCategory('${cat.code}')">edit</span>
          </td>
        `;
      table.appendChild(row);
    });
}

function deleteCategory(code) {
  if (confirm('Bạn có chắc muốn xóa danh mục này')) {
    category = category.filter(cat => cat.code !== code);
    renderData();
  }
}
function editCategory(code) {
  let cat = category.find(c => c.code === code);
  let newName = prompt('Sửa tên danh mục:', cat.name);
  if (newName) {
    cat.name = newName;
    renderData();
  }
}
function addCategory() {
  let code = prompt('Nhập mã danh mục:');
  if (!code) return;
  let name = prompt('Nhập tên danh mục:');
  if (!name) return;
  let status = confirm('Ấn ok là đang hoạt động') ? 'active' : 'inactive';
  category.push({ code, name, status });
  renderData();
  saveLocal(category)
}

function saveLocal(obj) {
  employee.push(obj)
  localStorage.setItem('employee', JSON.stringify(employee));
}

renderData();