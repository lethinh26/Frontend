function sumValue(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 + num2;
  }
  return "Dữ liệu ko hợp lệ";
}

alert(sumValue(3, 4.5));
