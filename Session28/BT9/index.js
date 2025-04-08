let books = [];

function checkNumber(number, prompt) {
  if (isNaN(number) || number === "" || number === " ") {
    return `${prompt} ko hợp lệ`;
  }
  return true;
}

function checkString(str, prompt) {
  if (str !== "" && str !== " ") {
    return true;
  }
  return `${prompt} ko hợp lệ`;
}

function addBook() {
  let id = Number(prompt("Nhập mã sách"));
  let checkNum = checkNumber(id, "Mã sách");
  if (checkNum !== true) return checkNum;
  if (books.findIndex(value => value.id === id) !== -1) {
    return "Mã sách đã tồn tại"
  }

  let title = prompt("Nhập tiêu đề sách");
  let checkStr = checkString(title, "Tiêu đề sách");
  if (checkStr !== true) return checkStr;

  let author = prompt("Nhập tác giả");
  checkStr = checkString(author, "Tác giả");
  if (checkStr !== true) return checkStr;

  let year = Number(prompt("Nhập năm xuất bản"));
  checkNum = checkNumber(year, "Năm xuất bản");
  if (checkNum !== true) return checkNum;

  let price = Number(prompt("Nhập giá sách"));
  checkNum = checkNumber(price, "Giá sách");
  if (checkNum !== true) return checkNum;

  let statusBook = prompt("Nhập trạng thái sách: (true/false)");
  if (statusBook === "true") statusBook = true;
  if (statusBook === "false") statusBook = false;

  if (statusBook !== true && statusBook !== false) return "Trạng thái sách ko hợp lệ";

  books.push({id, title, author, year, price, statusBook});

  return "Thêm thành công";
}

function listBooks() {
  return  books.map(item => `ID: ${item.id}, Title: ${item.title}, author: ${item.author}, year: ${item.year}, statusBook: ${item.statusBook? "Còn sách" : "Ko còn sách"}`).join("\n");
}

function findBook() {
  let title = prompt("Nhập tiêu đề sách");
  let checkStr = checkString(title, "Tiêu đề sách");
  if (checkStr !== true) return checkStr;

  let res = books.filter(book => book.title === title);
  if (res.length === 0) return "Ko tìm thấy sách";
  return res.map(item => `ID: ${item.id}, Title: ${item.title}, author: ${item.author}, year: ${item.year}, statusBook: ${item.statusBook? "Còn sách" : "Ko còn sách"}`).join("\n");

}

function updateStatus() {
  let id = Number(prompt("Nhập mã sách"));
  let checkNum = checkNumber(id, "Mã sách");
  if (checkNum !== true) return checkNum;

  let res = books.findIndex(item => item.id === id);

  if (res === -1) return "Ko tìm thấy mã sách";
  let checkConfirm = confirm(
    `Trạng thái hiện tại của ${books[res].title}: ${books[res].statusBook? "Còn sách" : "Ko còn sách"}
Nhấn xác nhận để chuyển trạng thái sách`
  )
  if (checkConfirm) {
    if (books[res].statusBook === true) books[res].statusBook = false;
    else books[res].statusBook = true;
    return "Cập nhật thành công";
  }
  return "Hủy"
}

function showMenu() {
  return  Number(prompt(
    `1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.
>> Nhập lựa chọn của bạn`
  ));
}

function deleteBook() {
  let id = Number(prompt("Nhập mã sách"));
  let checkNum = checkNumber(id, "Mã sách");
  if (checkNum !== true) return checkNum;

  let index = books.findIndex(book => book.id === id);
  if (index === -1) return "Ko tìm thấy mã sách";

  let checkConfirm = confirm(
    `ID: ${books[index].id}, Title: ${books[index].title}, author: ${books[index].author}, year: ${books[index].year}
Nhấn xác nhận để xóa`
  )
  if (checkConfirm) {
    books.splice(index, 1);
    return "Xóa sách thành công";
  }
  return "Hủy xóa"
}

function sortBooksByPrice() {
  books.sort((a, b) => a.price - b.price);
  return "Sách đã được sắp xếp theo giá tăng dần";
}

function runMenu() {
  let running = true;
  while (running) {
    let choice = showMenu();
    let result;
    switch (choice) {
      case 1:
        result = addBook();
        break;
      case 2:
        result = listBooks();
        break;
      case 3:
        result = findBook();
        break;
      case 4:
        result = updateStatus();
        break;
      case 5:
        result = deleteBook();
        break;
      case 6:
        result = sortBooksByPrice();
        break;
      case 7:
        running = false;
        result = "Thoát chương trình";
        break;
      default:
        result = "Lựa chọn không hợp lệ";
    }
    alert(result);
  }
}

runMenu();
