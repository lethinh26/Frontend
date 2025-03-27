let n = Number(prompt("Nhập số lượng phần tử"));
if (n > 0) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Nhập giá trị thứ ${i}`));
  }

  let arr2 = arr.filter(value => !isNaN(value));
  alert(arr2)
}
else if (n === 0) {
  alert("Ko có ký tự số");
}
else {
  alert("Số lượng phần tử ko hợp lệ.");
}

