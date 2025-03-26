let num = Number(prompt("Nhập số"));

if (num > 0 && !isNaN(num)) {
  let res = 0
  for (let i = 0; i <= num; i++) {
    res += i;
  }

  alert(res)
} else {
  alert("dữ liệu nhập vào ko hợp lệ")
}