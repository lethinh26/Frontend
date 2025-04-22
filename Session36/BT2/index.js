const defaultFoods = [
  {
    id: 1,
    name: "Bún bò Huế",
    image: "https://i.ytimg.com/vi/CSI9ildGX9s/maxresdefault.jpg",
    likes: 0,
  },
  {
    id: 2,
    name: "Phở bò Hà Nội",
    image: "https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg",
    likes: 0,
  },
  {
    id: 3,
    name: "Cơm tấm Sài Gòn",
    image: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
    likes: 0,
  },
];
let foods = document.querySelector(".container");

function renderData() {
  let html = `<h2>Món nào bạn thích nhất</h2>`;
  html += defaultFoods.reduce((temp, food) => temp + `
    <div class="rounded-3 rounded shadow p-3 my-3 bg-light" style="width: 30%;">
    <div class="row">
      <div class="col-6"><img src="${food.image}" alt="" class="rounded rounded-3 h-100 w-100"></div>
      <div class="col-6 text-start">
        <p class="fs-4 m-0 fw-bold"> ${food.name}</p>
        <p class="my-1 m-0">❤️ ${food.likes} lượt thích</p>
        <button class="btn btn-success mt-1" onclick="likeFood('${food.id}')">+1 Thích</button>
      </div>
    </div>
  </div>`, "")
  foods.innerHTML = html;
}

function likeFood(id) {
  defaultFoods[id-1].likes++;
  renderData()
}

renderData()