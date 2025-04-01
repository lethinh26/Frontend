function countNum(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }

  let even = 0, odd = 0;
  arr.forEach(item => {
    if (item % 2 === 0) {
      even += item;
    }else {
      odd += item;
    }
  })
  return `Even: ${even}, Odd: ${odd}`;
}

let arr = [2, 5, 10];
alert(countNum(arr));
