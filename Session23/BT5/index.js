let n = Number(prompt("Nhập số lượng phần tử"));
if (n > 0) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Nhập giá trị thứ ${i}`));
  }

  let arr2 = arr.filter(value => !isNaN(value));
  let count = 0
  arr2.forEach(value => count += value);
  if (count === 0) {
    alert("Mảng ko có phần tử nào là số")
  }else {
    alert(count);
  }
}
else if (n === 0) {
  alert("Mảng ko có phần tử");
}
else {
  alert("Số lượng phần tử ko đc âm.");
}

