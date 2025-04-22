let pendingTasks = document.querySelector("#pendingTasks");
let inprogressTasks = document.querySelector("#inProgressTasks");
let doneTasks = document.querySelector("#doneTasks");

let task = JSON.parse(localStorage.getItem("task")) || [];

renderAll();

function addTask() {
  let taskName = document.querySelector("#taskName").value.trim();
  if (!taskName) return;

  task.push({taskName, status: 1});
  saveLocal();
  renderAll();

  document.querySelector("#taskName").value = "";
}

function forwardTask(index) {
  if (task[index].status < 3) {
    task[index].status++;
    saveLocal();
    renderAll();
  }
}

function renderAll() {
  pendingTasks.innerHTML = "";
  inprogressTasks.innerHTML = "";
  doneTasks.innerHTML = "";

  task.forEach((t, index) => {
    let taskHtml = `
      <div class="task">
        <p>${t.taskName}</p>
        ${t.status < 3 ? `<button onclick="forwardTask(${index})">Chuyển tiếp</button>` : ""}
      </div>
    `;

    if (t.status === 1) pendingTasks.innerHTML += taskHtml;
    else if (t.status === 2) inprogressTasks.innerHTML += taskHtml;
    else if (t.status === 3) doneTasks.innerHTML += taskHtml;
  });
}

function saveLocal() {
  localStorage.setItem("task", JSON.stringify(task))
}
