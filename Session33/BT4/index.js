const products = [
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

let current = 0;

function createCard(product) {
  const col = document.createElement("div");
  col.classList.add("card", "col-3", "p-0");
  col.innerHTML = `
    <img src="${product.image}" alt="" class="card-img-top img-fluid h-50 object-fit-cover">
    <div class="card-body">
      <h4 class="card-title">${product.name}</h4>
      <p class="card-text">${product.description}</p>
      <p class="card-text">${product.price}</p>
      <button class="btn btn-primary">Buy</button>
    </div>`;
  return col;
}

function fillRow(row, numCol, current) {
  products.slice(current, current + numCol).forEach(product => {
    row.appendChild(createCard(product));
  });
  return row;
}

function createNewRow(current) {
  const container = document.getElementById("container");
  const row = document.createElement("div");
  row.className = "row justify-content-between w-100 mb-5";
  container.appendChild(fillRow(row, 3, current));
}

createNewRow(current);
current += 3;
createNewRow(current);