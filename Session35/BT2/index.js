let bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];

function deleteBookmark(index) {
  if (confirm("Xác nhận xóa")) {
    bookmark.splice(index, 1);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    renderData();
  }
}

function renderData() {
  let html = bookmark.reduce((temp, pro, index) => temp + `
    <div class="p-5 rounded rounded-3 position-relative col-3" style="background-color: #3a2f50; color: white; width: 24%">
      <a href="${pro.url}" style="text-decoration: none; color: white;">
        ${pro.name}
      </a>
      <button class="position-absolute text-bg-secondary bg-transparent border-0" onclick="deleteBookmark(${index})" style="left: 90%; top: 5%">X</button>
    </div>`,
    "");

  document.querySelector("#listModal").innerHTML = html;
}

function addBookmark() {
  let name = document.querySelector("#name").value;
  let url = document.querySelector("#url").value;

  bookmark.push({name, url});
  localStorage.setItem("bookmark", JSON.stringify(bookmark));
  renderData();
}
renderData()