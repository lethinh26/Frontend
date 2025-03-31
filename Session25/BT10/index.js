let products= [ ["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]]
let cart = [];

function showProducts() {
  return products.map(product => `Sản phẩm: ${product[0]}, Số lượng: ${product[1]}, Giá: ${product[2]}`).join("\n");
}

function buyProduct(productName) {
  let proIndex = products.findIndex(product => product[0].toLowerCase() === productName.toLowerCase());
  if (proIndex === -1) {
    return "Ko tìm thấy sản phẩm";
  }

  let product = products[proIndex];
  let show = `Sản phẩm: ${product[0]}, Số lượng: ${product[1]}, Giá: ${product[2]}`;
  let quantity = Number(prompt(`${show}\n>> Nhập số lượng bạn muốn mua:`));

  if (isNaN(quantity) || quantity <= 0) {
    return "Số lượng nhập vào ko hợp lệ";
  }

  if (quantity > product[1]) {
    return `Ko đủ số lượng. Chỉ có ${product[1]} sản phẩm.`;
  }

  products[proIndex][1] -= quantity;

  let cartIndex = cart.findIndex(cartItem => cartItem[0].toLowerCase() === productName.toLowerCase());
  if (cartIndex !== -1) {
    cart[cartIndex][1] += quantity;
  } else {
    cart.push([product[0], quantity, product[2]]);
  }
  return `Đã thêm ${quantity} ${product[0]} vào giỏ hàng`;
}

function printInvoice() {
  if (cart.length === 0) {
    return "Giỏ hàng trống";
  }

  let totalPrice = 0;
  let invoice = "HÓA ĐƠN MUA HÀNG\n";
  invoice += "---------------------------------\n";
  cart.forEach((item, index) => {
    let productName = item[0];
    let quantity = item[1];
    let price = item[2];
    let total = quantity * price;
    totalPrice += total;
    invoice += `${index + 1}. Sản phẩm: ${productName}\nSố lượng: ${quantity}\nGiá: ${price} = ${total} VND\n`;
  });
  invoice += "---------------------------------\n";
  invoice += `Tổng tiền: ${totalPrice} VND\n`;

  return invoice;
}


let choice = 0;
while (choice !== 4) {
  choice = Number(prompt(
    `1. Xem danh sách sản phẩm có sẵn trong cửa hàng.
2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.
3. Tính tổng tiền và hiển thị hóa đơn.
4. Thoát

>> Nhập lựa chọn của bạn:`
  ));

  switch (choice) {
    case 1: {
      alert(showProducts());
      break;
    }
    case 2: {
      let product = prompt("Nhập sản phẩm bạn muốn mua")
      alert(buyProduct(product, cart));
      break;
    }
    case 3: {
      alert(printInvoice());
      break;
    }
    case 4: {
      alert("Thoát");
      break;
    }
    default: {
      alert("Lựa chọn ko hợp lệ");
    }
  }
}



