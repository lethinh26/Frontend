let num = Number(prompt("Nhập số"));

if (!isNaN(num)) {
  let check = 0;
  if (num <= 1) {
    check = 1;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      check = 1;
      break;
    }
  }

  if (check) {
    alert(`${num} ko phải là số nguyên tố`);
  }else {
    alert(`${num} là số nguyên tố`);
  }
}