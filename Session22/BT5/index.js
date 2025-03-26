let array = [];

for (let i = 0; i < 5; i++) {
  let num = Number(prompt(`Nhập số thứ ${i}`));
  if (isNaN(num)) {
    alert("Số vừa nhập vào ko hợp lệ, Hãy nhập lại");
    i--;
    continue;
  }
  array[i] = num;
}

let even = 0, odd = 0;
for (let value of array) {
  if (value % 2 === 0) {
    even += Number(value);
  }else {
    odd += Number(value);
  }
}
alert(`Tổng các số chẵn: ${even}\nTổng các số lẻ: ${odd}`);