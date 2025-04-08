let books = [];
let cart = [];

function isNumber(str) {
  return String(str).split("").every(char => char >= '0' && char <= '9');
}

function isAlpha(str) {
  return String(str).split("").every(char => (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' || char === ' '));
}

function checkInput(value, typeInput, typeAction, prompt) {
  let callback = `${prompt} ko hợp lệ, hãy nhập lại`;
  if (String(value) === "" || String(value) === " ") {}
  else {
    if (Number(value) === -1) return -1;
    else if (typeAction === "update" && Number(value) === 0) {
      return -2;
    }

    if (typeAction === "add" && prompt === "ID" && books.findIndex(v => v.id === Number(value)) !== -1) {
      callback = `${prompt} đã tồn tại, hãy nhập lại`;
    }
    if (typeInput === "num") {
      if (isNumber(value) && value >= 0) {
        return true;
      }
    } else if (typeInput === "str") {
      if (isAlpha(value)) {
        return true;
      }
    }
  }

  alert(callback);
  return false;
}

function getInput(typeInput, typeAction, input, prompts) {
  let value;
  while (true) {
    value = prompt(prompts);
    debugger;
    if (typeInput === "num" && value !== "" && value !== " ") {
      value = Number(value);
    }
    debugger;
    let res = checkInput(value, typeInput, typeAction, input);
    if (res === true) return;
    else if (res === -1) return -1;
    else if (res === -2) return -2;
  }
}

function addBook() {
  let id = getInput("num", "add", "ID", "Nhập ID sách (nhập -1 để thoát)");
  if (id === -1) return "Đã hủy";

  let name = getInput("str", "add", "Tên", "Nhập tên sách (nhập -1 để thoát)");
  if (name === -1) return "Đã hủy";

  let price = getInput("num", "add", "Giá", "Nhập giá sách (nhập -1 để thoát)");
  if (price === -1) return "Đã hủy";

  let quantity = getInput("num", "add", "Số lượng", "Nhập số lượng sách (nhập -1 để thoát)");
  if (quantity === -1) return "Đã hủy";

  let category = getInput("str", "add", "Thể loại", "Nhập thể loại sách (nhập -1 để thoát)");
  if (category === -1) return "Đã hủy";

  books.push({id, name, price, quantity, category});
  return "Thêm thành công";
}

function showBook() {
  if (books.length === 0) return "Ko có sách nào trong kho";

  let categories = new Set(books.map(book => book.category));
  if (categories.size === 0) return "Ko có thể loại nào";

  let menu = "";
  let index = 1;
  let indexCate = {};

  categories.forEach(cat => {
    menu += `${index}. ${cat}\n`;
    indexCate[index] = cat;
    index++;
  });

  menu += `${index}. Thoát`;

  let choice = Number(prompt(`Chọn thể loại sách:\n${menu}`));
  if (isNaN(choice) || choice < 1 || choice > index) return "Lựa chọn ko hợp lệ";
  if (choice === index) return "Đã thoát";

  let cate = indexCate[choice];
  let book = books.filter(book => book.category === cate);

  if (book.length === 0) return `Ko có sách nào thuộc thể loại "${cate}"`;

  let res = `Danh sách sách thuộc thể loại "${cate}":\n`;
  book.forEach((value, i) => {
    res += `  ${i + 1}. Tên: ${value.name}, ID: ${value.id}, Giá: ${value.price}, SL: ${value.quantity}\n`;
  });

  return res;
}


function searchBook() {
  if (books.length === 0) return "Ko có sách nào trong kho";

  let searchType = Number(prompt("Tìm kiếm theo:\n1. ID\n2. Tên sách\n3. Thoát"));

  if (searchType === 3) return "Đã hủy";

  if (searchType === 1) {
    let id = getInput("num", "search", "ID", "Nhập ID sách cần tìm (nhập -1 để thoát)");
    if (id === -1) return "Đã hủy";

    let foundBook = books.find(book => book.id === id);
    if (foundBook) {
      return `Thông tin sách:\nID: ${foundBook.id} - Tên: ${foundBook.name} - Giá: ${foundBook.price} - Số lượng: ${foundBook.quantity} - Thể loại: ${foundBook.category}`;
    } else {
      return "Ko tìm thấy sách với ID này";
    }
  } else if (searchType === 2) {
    let name = getInput("str", "search", "Tên", "Nhập tên sách cần tìm (nhập -1 để thoát)");
    if (name === -1) return "Đã hủy";

    let foundBooks = books.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));
    if (foundBooks.length > 0) {
      return foundBooks.map(book => `ID: ${book.id} - Tên: ${book.name} - Giá: ${book.price} - Số lượng: ${book.quantity} - Thể loại: ${book.category}`).join("\n");
    } else {
      return "Ko tìm thâấy sách";
    }
  } else {
    return "Lựa chọn ko hợp lệ";
  }
}

function buyBook() {
  if (books.length === 0) return "Ko có sách nào trong kho";

  let id = getInput("num", "buy", "ID", "Nhập ID sách muốn mua (nhập -1 để thoát)");
  if (id === -1) return "Đã hủy mua sách";

  let bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex === -1) return "Ko tìm thấy sách với ID này";

  let book = books[bookIndex];
  if (book.quantity === 0) return "Sách này đã hết hàng";

  let amount = getInput("quantity", "buy", "Số lượng", `Nhập số lượng muốn mua (tối đa ${book.quantity}, nhập -1 để thoát)`);
  if (amount === -1) return "Đã hủy mua sách";

  if (amount > book.quantity) {
    return `Số lượng ko đủ, chỉ còn ${book.quantity} cuốn`;
  }

  let cartIndex = cart.findIndex(item => item.id === id);

  if (cartIndex !== -1) {
    cart[cartIndex].quantity += amount;
    cart[cartIndex].total = cart[cartIndex].quantity * cart[cartIndex].price;
  } else {
    cart.push({
      id: book.id,
      name: book.name,
      price: book.price,
      quantity: amount,
      total: book.price * amount
    });
  }

  books[bookIndex].quantity -= amount;

  return `Mua thành công`;
}

function sortBook() {
  if (books.length === 0) return "Ko có sách nào trong kho";

  let sortType = Number(prompt("Sắp xếp theo giá:\n1. Tăng dần\n2. Giảm dần\n3. Thoát"));

  if (sortType === 3) return "Đã hủy sắp xếp";

  if (sortType === 1) {
    books.sort((a, b) => a.price - b.price);
    return "Sắp xếp thành công"
  } else if (sortType === 2) {
    book.sort((a, b) => b.price - a.price);
    return "Sắp xếp thành công"
  } else {
    return "Lựa chọn ko hợp lệ";
  }
}

function showCart() {
  if (cart.length === 0) return "Giỏ hàng trống";

  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  let totalPrice = cart.reduce((sum, item) => sum + item.total, 0);

  return "Giỏ hàng của bạn:\n" +
    cart.map(item => `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, Số lượng: ${item.quantity}, Số tiền: ${item.total}`).join("\n") +
    `\n\nTổng số lượng: ${totalQuantity} cuốn\nTổng tiền: ${totalPrice}`;
}

function showTotalBook() {
  if (books.length === 0) return "Ko có sách nào trong kho";

  let totalBook = books.reduce((sum, book) => sum + book.quantity, 0);
  let cate = books.length;

  return `Tổng số danh mục: ${cate}\nTổng số sách: ${totalBook}`;
}

function showMenu() {
  return Number(prompt(
`1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id
4. Mua sách
5. Sắp xếp sách theo giá
6. Xem giỏ hàng và tính tổng tiền
7. Hiển thị tổng số lượng sách trong kho
8. Thoát chương trình`
  ));
}

function runMenu() {
  books.push(
    {id: 1, name: "Đắc Nhân Tâm", price: 65000, quantity: 10, category: "Kỹ năng sống"},
    {id: 2, name: "Nhà Giả Kim", price: 55000, quantity: 15, category: "Tiểu thuyết"},
    {id: 3, name: "Tôi Tài Giỏi, Bạn Cũng Thế", price: 70000, quantity: 8, category: "Kỹ năng sống"},
    {id: 4, name: "Đừng Bao Giờ Đi Ăn Một Mình", price: 85000, quantity: 5, category: "Kinh doanh"},
    {id: 5, name: "Tư Duy Phản Biện", price: 60000, quantity: 12, category: "Kỹ năng sống"},
    {id: 6, name: "Cuộc Sống Ko Giới Hạn", price: 75000, quantity: 7, category: "Kỹ năng sống"},
    {id: 7, name: "Người Giàu Có Nhất Thành Babylon", price: 90000, quantity: 6, category: "Kinh doanh"}
  );

  while (true) {
    let choice = showMenu();
    switch (choice) {
      case 1: {
        alert(showBook());
        break;
      }
      case 2: {
        alert(addBook());
        break;
      }
      case 3: {
        alert(searchBook());
        break;
      }
      case 4: {
        alert(buyBook());
        break;
      }
      case 5: {
        alert(sortBook());
        break;
      }
      case 6: {
        alert(showCart());
        break;
      }
      case 7: {
        alert(showTotalBook());
        break;
      }
      case 8: {
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