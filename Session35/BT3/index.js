const products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: 'Laptop Dell XPS 15',
    price: 35990000,
    image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0',
    description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 32990000,
    image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
    description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 28990000,
    image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
    description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
  },
  {
    id: 4,
    name: 'Tai nghe Sony WH-1000XM5',
    price: 7990000,
    image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
    description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 11990000,
    image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
    description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
  },
  {
    id: 6,
    name: 'Loa JBL Charge 5',
    price: 3990000,
    image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
    description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
  }];



localStorage.setItem("products", JSON.stringify(products));

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' ₫';
}

function renderData(value = products) {
  let html = "";
  html += value.reduce((temp, current) =>
    temp + `
    <div class="col-3 w-25">
      <img src="${current.image}" alt="" class="card-img-top img-fluid h-50 object-fit-cover">
      <div class="card-body">
        <h4 class="card-title">${current.name}</h4>
        <p class="card-text">${current.description}</p>
        <p class="card-text text-danger fw-bold">${formatPrice(current.price)}</p>
        <button class="btn btn-primary">Buy</button>
      </div>
    </div>
    `, "");

  document.querySelector("#card").innerHTML = html
}

function searchProducts() {
  let searchValue = document.querySelector("#search").value.toLowerCase().trim();
  let filterValue = products.filter(filter => filter.name.toLowerCase().includes(searchValue));
  renderData(filterValue);
}

renderData()


