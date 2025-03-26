let str = prompt("Nhập chuỗi");
let search = prompt("Nhập từ tìm kiếm");

let check = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) === search) {
    check = 1;
    break;
  }
}

if (check) {
  alert("Tồn tại từ khóa tìm kiếm");
}else {
  alert("Ko tồn tại từ khóa tìm kiếm");
}