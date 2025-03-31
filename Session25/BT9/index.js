function checkUser(users, inputUser) {
  if (users.includes(inputUser)) {
    return "Email đã tồn tại";
  }
  if (inputUser.includes("@") && (inputUser.includes(".com") || inputUser.includes(".vn"))) {
    users.push(inputUser);
    return "Đăng kí thành công";
  }
  return "Email ko hợp lệ"
}

let users = [];

while (true) {
  let inputUser = prompt("Nhập Email");
  alert(checkUser(users, inputUser));
}



