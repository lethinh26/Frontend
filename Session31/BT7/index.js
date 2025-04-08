let todoList = [
  {
    id: 1,
    task: "a",
    completed: false,
  },
  {
    id: 2,
    task: "b",
    completed: false,
  },
  {
    id: 3,
    task: "c",
    completed: false,
  },
  {
    id: 4,
    task: "d",
    completed: true,
  }
]

let body = document.querySelector('body');
todoList.forEach(todo => {
  let ul = document.createElement('ul');
  ul.innerHTML = `<li ${todo.completed? 'class="checked"': ""}>${todo.task}<span class="close">X</span>`;
  body.appendChild(ul);
})

let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
  let inputValue = document.getElementById("myInput").value;
  let ul = document.createElement('ul');
  ul.innerHTML = `<li>${inputValue}<span class="close">X</span>`;
  body.appendChild(ul);
})

document.body.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('close')) {
    e.target.parentElement.remove();
  }
})

document.body.addEventListener('dblclick', (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
    } else {
      e.target.classList.add("checked");
    }
  }
});


