let num = Number(prompt("Nhập số"));

if (num > 0 && !isNaN(num)) {
  if (num < 5) {
    alert(`Không có số nào chia hết cho 5 từ 1 đến ${num}`);
  }else {
    let text = `Số chia hết cho 5 từ 1 đến ${num} là: `;
    for (let i = 5; i <= num; i += 5) {
      if (i + 5 > num) {
        text += i;
      }else {
        text += i + ", ";
      }
    }
    alert(text)
  }
} else {
  alert("Dữ liệu nhập vào ko hợp lệ")
}