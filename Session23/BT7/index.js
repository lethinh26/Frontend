let n = Number(prompt("Nhập số lượng phần tử"));
if (n > 0) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Nhập giá trị thứ ${i}`));
  }

  let max = 0, max2 = 0;
  arr.forEach((value) => {
    if (value > max) {
      max2 = max;
      max = value;
    }else if (value < max && value > max2) {
      max2 = value;
    }
  })

  alert(max2);
}

else if (n === 0) {
  alert("Mảng ko có phần tử");
}
else {
  alert("Số lượng phần tử ko đc nhỏ hơn 0.");
}

