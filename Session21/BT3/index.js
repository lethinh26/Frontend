let pass = "thinhdepzai";

let check = 1

while (check) {
  let str = prompt("Nhập mật khẩu");
  if (pass === str) {
    check = 0;
    break;
  }
  alert("Sai mật khẩu. Hãy nhập lại");
}
alert("Đăng nhập thành công");
