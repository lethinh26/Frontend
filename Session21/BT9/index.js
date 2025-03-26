let num = Number(prompt("Nhập số"));

let check = 1;
for (let i = 0; i *i <= num; i++) {
  if (num % i === 0) {
    check = 0;
    break;
  }
}
if (check) {
  alert("Là số nguyên tố");
}else {
  alert("Ko phải số nguyên tố")
}