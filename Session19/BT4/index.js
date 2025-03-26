let num = Number(prompt("Nhập số"));

if (num % 3 === 0 && num % 5 === 0) {
  alert(`${num} chia hết cho 3 và 5`);
}else {
  alert(`${num} không chia hết cho 3 và 5`);
}