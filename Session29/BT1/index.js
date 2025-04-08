let contacts = [];

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

    if (typeAction === "add" && (prompt === "ID" || prompt === "phone") && contacts.findIndex(v => v[prompt.toLowerCase()] === value) !== -1) {
      callback = `${prompt} đã tồn tại, hãy nhập lại`;
    }else if (typeInput === "num") {
      if (isNumber(value)) {
        return true;
      }
    }else if (typeInput === "str") {
      if (isAlpha(value)) {
        return true;
      }

    }else if (typeInput === "email") {
      if (value.includes("@")) {
        return true;
      }

    }else if (typeInput === "phone") {
      if ((value.length === 10 || value.length === 9) && isNumber(value)) {
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

function addContact() {
  let id = getInput("num", "add", "ID", "Nhập ID liên hệ (nhập -1 để thoát)");
  if (id === -1) return "Đã hủy"

  let name = getInput("str", "add", "Tên", "Nhập tên liên hệ (nhập -1 để thoát)");
  if (name === -1) return "Đã hủy"

  let email = getInput("email", "add", "Email", "Nhập Email liên hệ (nhập -1 để thoát)");
  if (email === -1) return "Đã hủy"

  let phone = getInput("phone", "add", "SĐT", "Nhập SĐT liên hệ (nhập -1 để thoát)");
  if (phone === -1) return "Đã hủy"

  contacts.push({id, name, email, phone});
  return "Thêm thành công";
}

function showContact() {
  if (contacts.length === 0) return "Ko có thông tin liên hệ nào"
  return contacts.map(value => `ID: ${value.id} Tên: ${value.name} Email: ${value.email} SĐT: ${value.phone}`).join("\n");
}

function findContact() {
  let phone = getInput("phone", "find", "SĐT", "Nhập SĐT muốn tìm kiếm (nhập -1 để thoát)");
  if (phone === -1) return

  let pos = contacts.findIndex(value => value.phone === phone)

  return ( pos !== undefined ? `ID: ${contacts[pos].id} Tên: ${contacts[pos].name} Email: ${contacts[pos].email} SĐT: ${contacts[pos].phone}` : "Ko tìm thấy thông tin liên hệ");
}

function updateContact() {
  let id = getInput("num", "update", "ID", "Nhập ID muốn cập nhật (nhập -1 để thoát)");
  if (id === -1) return "Đã hủy"

  let pos = contacts.findIndex(value => value.id === id);
  if (pos === -1) return "Ko tìm thấy ID";

  let name = getInput("str", "update", "Tên", "Nhập tên liên hệ mới (nhập 0 để bỏ qua)");
  if (name === -1) return "Đã hủy"

  let email = getInput("email", "update", "Email", "Nhập Email liên hệ mới (nhập 0 để bỏ qua)");
  if (email === -1) return "Đã hủy"

  let phone = getInput("phone", "update", "SĐT", "Nhập SĐT liên hệ mới (nhập 0 để bỏ qua)");
  if (phone === -1) return "Đã hủy"

  if (name !== -2) contacts[pos].name = name;
  if (phone !== -2) contacts[pos].phone = phone;
  if (email !== -2) contacts[pos].email = email;

  return "Cập nhật thành công";
}

function deleteContact() {
  let id = getInput("num", "delete", "ID", "Nhập ID liên hệ (nhập -1 để thoát)");
  if (id === -1) return

  let pos = contacts.findIndex(value => value.id === id);

  let check = confirm(
    `ID: ${contacts[pos].id} Tên: ${contacts[pos].name} Email: ${contacts[pos].email} SĐT: ${contacts[pos].phone}
Nhấn xác nhận để xóa`
  )

  if (check) {
    contacts.splice(pos, 1);
    return "Xóa thành công";
  }
  return "Đã hủy xóa";
}

function showMenu() {
  return Number(prompt(
    `1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.`
  ))
}

function runMenu() {
  while (true) {
    let choice = showMenu();
    switch (choice) {
      case 1: {
        alert(addContact());
        break;
      }
      case 2: {
        alert(showContact());
        break;
      }
      case 3: {
        alert(findContact());
        break;
      }
      case 4: {
        alert(updateContact());
        break;
      }
      case 5: {
        alert(deleteContact());
        break;
      }
      case 6: {
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