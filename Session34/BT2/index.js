let courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    id: 1,
    content: 'a', 
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'a',
  },
  {
    id: 2,
    content: 'b',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'b',
  },
];

const renderData = () => {
  let html = ""
  let tbody = document.getElementById("tbody");
  courses.forEach((course, index) => {
    html += `<tr>
                <td>${index + 1}</td>
                <td>${course.content}</td>
                <td>${course.dueDate}</td>
                <td>${course.status}</td>
                <td>${course.assignedTo}</td>
                <td>
                  <button class="btn btn-sm btn-secondary" onclick="editTask(${index + 1})">Sửa</button>
                  <button class="btn btn-sm btn-danger" onclick="deleteTask(${index + 1})">Xóa</button>
                </td>
              </tr>`
  })
  tbody.innerHTML = html;
}

const saveLocal = () => {
  localStorage.setItem("courses", JSON.stringify(courses));
};

const addTask = (event) => {
  event.preventDefault(); 

  const content = document.getElementById("content").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const assignedTo = document.getElementById("assignedTo").value.trim();

  if (!content || !dueDate || status === "Choose status" || !assignedTo) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  courses.push({content, dueDate, status, assignedTo });
  saveLocal(); 
  renderData();
  document.querySelector("form").reset(); // Reset form
};

const deleteTask = (index) => {
  if (confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
    courses.splice(index-1, 1); 
    saveLocal(); 
    renderData();
  }
};

const editTask = (index) => {
  const course = courses[index];

  document.getElementById("content").value = course.content;
  document.getElementById("dueDate").value = course.dueDate;
  document.getElementById("status").value = course.status;
  document.getElementById("assignedTo").value = course.assignedTo;

  const submitButton = document.getElementById("submit");
  submitButton.textContent = "Update";
  submitButton.onclick = (event) => updateTask(event, index);
};

const updateTask = (event, index) => {
  event.preventDefault(); 

  const content = document.getElementById("content").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const assignedTo = document.getElementById("assignedTo").value.trim();

  if (!content || !dueDate || status === "Choose status" || !assignedTo) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  courses[index] = { content, dueDate, status, assignedTo };
  saveLocal();
  renderData(); 
  document.querySelector("form").reset(); 

  const submitButton = document.getElementById("submit");
  submitButton.textContent = "Submit";
  submitButton.onclick = addTask;
};

document.querySelector("form").addEventListener("submit", addTask);

renderData();
    