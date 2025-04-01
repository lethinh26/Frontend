function squareEven(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }

  return arr.filter(item => item % 2 ===0).map(item => item ** 2);
}

let arr = [2, 5, 10];
alert(squareEven(arr));
