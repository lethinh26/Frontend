let num = Number(prompt("Nhập số lượng số nguyên tố"));

if (!isNaN(num) && num > 0) {
  let count = 0, n = 2;
  let res = "";
  while (count !== num) {
    let check = 0;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        check = 1;
        break;
      }
    }
    if (check) {
      n++;
    } else {
      res += `${n} `;
      n++;
      count++;
    }
  }
  alert(res);
}