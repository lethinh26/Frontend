let choice = Number(prompt("Chọn tiền cần đổi: \n 1. VND -> USD \n 2. USD -> VND"));
let money = Number(prompt("Nhập số tiền cần đổi"));
if (choice === 1) {
  alert(`${money} VND = ${(money / 23000).toFixed(1)} USD`);
}else if (choice === 2) {
  alert(`${money} USD = ${(money * 23000).toFixed(1)} VND`);
}else {
  alert("Lựa chọn không hợp lệ")
}

