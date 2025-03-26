let odd = 0;
let even = 0;

for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Nhập số nguyên thứ " + (i + 1)));
  if (num % 2 !== 0) {
    odd++;
  }else {
    even++;
  }
}

alert(`Số chẵn: ${even}\nSố lẻ: ${odd}`);
