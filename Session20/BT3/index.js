let num = Number(prompt("Nhập số"));

if (num > 0 && !isNaN(num)) {
  let num1 = 0;
  let numCopy = num;
  while (numCopy !== 0) {
    num1 = num1 * 10 + numCopy % 10;
    numCopy = Math.floor(numCopy / 10);
  }
  if (num1 === num) {
    alert(`${num1} là số đối xứng`);
  }else {
    alert("Ko phải số đối xứng")
  }
} else {
  alert("Dữ liệu nhập vào ko hợp lệ")
}