let n = Number(prompt("Nhập số lượng phần tử"));
if (n > 0) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Nhập giá trị thứ ${i}`));
  }

  let check = true;

  if (arr.length >= 2) {
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i-1] + arr[i-2]) {
        check = false;
        break;
      }
    }
  }
  if (check) {
    alert("Là dãy số fibonacci");
  } else {
    alert("Ko là dãy số fibonacci");
  }
}
else if (n === 0) {
  alert("Mảng ko có phần tử");
}
else {
  alert("Số lượng phần tử ko đc nhỏ hơn 0");
}

