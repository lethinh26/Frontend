let n = Number(prompt("Nhập số lượng phần tử"));
if (n > 0) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Nhập giá trị thứ ${i}`));
  }

  let count = 0;
  for (let value of arr) {
    if (Number.isInteger(value) && value < 0) {
      count++;
    }
  }
  alert(count)
}
else if (n === 0) {
  alert("Mảng ko có phẩn từ");
}
else {
  alert("Số lượng phần tử ko hợp lệ.");
}

