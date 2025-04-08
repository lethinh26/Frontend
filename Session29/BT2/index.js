let products = [];

function isNumber(str) {
  return String(str).split("").every(char => char >= '0' && char <= '9' && !char.includes("-"));
}

function isAlpha(str) {
  return String(str).split("").every(char => (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'));
}

function checkInput(value, typeInput, typeAction, prompt) {
  let callback = `${prompt} ko hợp lệ, hãy nhập lại`;
  if (value === "" || value === " ") {}
  else {
    if (Number(value) === -1) return -1;
    else if (typeAction === "update" && Number(value) === 0) {
      return -2
    }

    if (typeAction === "add" && (prompt === "ID" || prompt === "phone") && products.findIndex(v => v[prompt.toLowerCase()] === value) !== -1) {
      callback = `${prompt} đã tồn tại, hãy nhập lại`;
    }else if (typeInput === "num") {
      if (isNumber(value)) {
        return true;
      }
    }else if (typeInput === "str") {
      if (isAlpha(value)) {
        return true;
      }
    }
  }

  alert(callback);
  return false;
}

function getInput(typeInput, typeAction, input, prompts) {
  let name;
  while (true) {
    name = prompt(prompts);
    if (typeInput === "num") {
      name = Number(name);
    }
    let res = checkInput(name, typeInput, typeAction, input);
    if (res  === true) return name;
    else if (res === -1) return -1;
    else if (res === -2) return -2;
  }
}

function addProduct() {
  let id = getInput("num", "add", "ID", "Nhập ID sản phẩm (nhập -1 để thoát)");
  if (id === -1) return "Đã hủy"

  let name = getInput("str", "add", "Tên", "Nhập tên sản phẩm (nhập -1 để thoát)");
  if (name === -1) return "Đã hủy"

  let price = getInput("num", "add", "Giá", "Nhập giá sản phẩm (nhập -1 để thoát)");
  if (price === -1) return "Đã hủy"

  let category = getInput("str", "add", "Danh mục", "Nhập danh mục sản phẩm (nhập -1 để thoát)");
  if (category === -1) return "Đã hủy"

  let quantity = getInput("num", "add", "Số lượng", "Nhập số lượng sản phẩm (nhập -1 để thoát)");
  if (quantity === -1) return "Đã hủy"

  products.push({id, name, price, category, quantity});
  return "Thêm thành công";
}

function showProduct() {
  if (products.length === 0) return "Ko có thông tin sản phẩm nào"
  return products.map(value => `ID: ${value.id} Tên SP: ${value.name} Giá: ${value.price} Danh mục: ${value.category} Số lượng: ${value.quantity}`).join("\n");
}

function findProduct() {
  let id = getInput("num", "find", "ID", "Nhập ID muốn tìm kiếm (nhập -1 để thoát)");
  if (id === -1) return

  let pos = products.findIndex(value => value.id === id)

  return ( pos !== undefined ? `ID: ${products[pos].id} Tên SP: ${products[pos].name} Giá: ${products[pos].price} Danh mục: ${products[pos].category} Số lượng: ${products[pos].quantity}` : "Ko tìm thấy thông tin sản phẩm");
}

function updateProduct() {
  let id = getInput("num", "update", "ID", "Nhập ID muốn cập nhật (nhập -1 để thoát)");
  if (id === -1) return "Đã hủy"

  let pos = products.findIndex(value => value.id === id);
  if (pos === -1) return "Ko tìm thấy ID";

  let name = getInput("str", "update", "Tên", "Nhập tên sản phẩm (nhập 0 để bỏ qua)");
  if (name === -1) return "Đã hủy"

  let price = getInput("num", "update", "Giá", "Nhập giá sản phẩm (nhập 0 để bỏ qua)");
  if (price === -1) return "Đã hủy"

  let category = getInput("str", "update", "Danh mục", "Nhập danh mục sản phẩm (nhập 0 để bỏ qua)");
  if (category === -1) return "Đã hủy"

  let quantity = getInput("num", "update", "Số lượng", "Nhập số lượng sản phẩm (nhập 0 để bỏ qua)");
  if (quantity === -1) return "Đã hủy"

  if (name !== -2) products[pos].name = name;
  if (price !== -2) products[pos].price = price;
  if (category !== -2) products[pos].category = category;
  if (quantity !== -2) products[pos].quantity = quantity;

  return "Cập nhật thành công";
}

function deleteProduct() {
  let id = getInput("num", "delete", "ID", "Nhập ID sản phẩm (nhập -1 để thoát)");
  if (id === -1) return

  let pos = products.findIndex(value => value.id === id);

  let check = confirm(
    `ID: ${products[pos].id} Tên SP: ${products[pos].name} Giá: ${products[pos].price} Danh mục: ${products[pos].category} Số lượng: ${products[pos].quantity}
Nhấn xác nhận để xóa`
  )

  if (check) {
    products.splice(pos, 1);
    return "Xóa thành công";
  }
  return "Đã hủy xóa";
}

function sortProducts() {
  products.sort((a, b) => a.price - b.price);
  return "Sắp xếp theo giá thành công";
}

function showMenu() {
  return Number(prompt(
    `1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.`
  ))
}

function runMenu() {
  while (true) {
    let choice = showMenu();
    switch (choice) {
      case 1: {
        alert(addProduct());
        break;
      }
      case 2: {
        alert(showProduct());
        break;
      }
      case 3: {
        alert(findProduct());
        break;
      }
      case 4: {
        alert(updateProduct());
        break;
      }
      case 5: {
        alert(deleteProduct());
        break;
      }
      case 6: {
        alert(sortProducts())
        break;
      }
      case 7: {
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