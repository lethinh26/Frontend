let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông"
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh"
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông"
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh"
  }
];

let cart = [];

function showProduct() {
  let res = "";
  let categories = new Set(products.map((x) => x.category));
  categories.forEach(category => {
    res += `${category}\n`;
    let filterCategory = products.filter(product => product.category === category);
    filterCategory.forEach((product) => {
      if (product.category === category) {
        res += `  Name: ${product.name}, ID: ${product.id}\n, Price: ${product.price}, Quantity: ${product.quantity}\n`;
      }
    })
  })
  return res;
}

function buyProduct() {
  let id = Number(prompt("Nhập ID bạn muốn mua"));
  let pos = products.findIndex(product => product.id === id);

  if (pos === -1) {
    return "Không tìm thấy sản phẩm";
  }

  if (products[pos].quantity === 0) {
    return "Sản phẩm này đã hết hàng";
  }

  let amount = Number(prompt("Nhập số lượng bạn muốn mua"));

  if (products[pos].quantity < amount) {
    return "Số lượng vượt quá số lượng trong kho";
  }

  let cartPos = cart.findIndex(item => item.id === id);

  if (cartPos !== -1) {
    cart[cartPos].quantity += amount;
  } else {
    let produc = {
      id: products[pos].id,
      name: products[pos].name,
      price: products[pos].price,
      quantity: amount
    };
    cart.push(produc);
  }

  products[pos].quantity -= amount;

  return "Mua thành công";
}

function sortProduct() {
  let choice = Number(prompt("1. Tăng dần\n2.Giảm dần"));
  switch (choice) {
    case 1: {
      products.sort((a, b) => a.price - b.price);
      break;
    }
    case 2: {
      products.sort((a, b) => b.price - a.price);
      break;
    }
    default: {
      return "Lựa chọn ko hợp lệ";
    }
  }
  return "Sắp xếp thành công";
}

function totalCart() {
  let total = 0;
  cart.forEach((product) => {total += product.price * product.quantity;});
  return `Tổng số tiền trong giỏ hàng là ${total}`;
}

function showMenu() {
  return Number(prompt(
    `1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.`
  ))
}

function runMenu() {
  while (true) {
    let choice = showMenu();
    switch (choice) {
      case 1: {
        alert(showProduct());
        break;
      }
      case 2: {
        alert(buyProduct());
        break;
      }
      case 3: {
        alert(sortProduct());
        break;
      }
      case 4: {
        alert(totalCart());
        break;
      }
      case 5: {
        alert("Thoát");
        return;
      }
      default: {
        alert("Lựa chọn ko hợp lệ");
      }
    }
  }
}

runMenu();