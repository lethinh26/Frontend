
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


addBtn.addEventListener('click', addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Vui lòng nhập công việc!');
    return;
  }
  const li = document.createElement('li');
  li.classList.add('task-item');
  const span = document.createElement('span');
  span.textContent = taskText;
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('task-buttons');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Sửa';
  editBtn.classList.add('edit-btn');
  editBtn.addEventListener('click', () => editTask(span));
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Xóa';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => deleteTask(li));
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(btnContainer);
  taskList.appendChild(li);

  taskInput.value = '';
}
function deleteTask(taskItem) {
  if (confirm('Bạn có chắc muốn xóa công việc này không?')) {
    taskItem.remove();
  }
}

function editTask(spanElement) {
  const currentText = spanElement.textContent;
  const newText = prompt('Chỉnh sửa công việc:', currentText);
  if (newText !== null) {
    if (newText.trim() === '') {
      alert('Nội dung công việc không thể để trống!');
    } else {
      spanElement.textContent = newText.trim();
    }
  }
}
