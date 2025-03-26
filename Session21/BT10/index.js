let num = Number(prompt("Nhập số"));

let count = 0, dem = 2;
let res = "";

while (count < num) {
  let check = 1;
  for (let i = 2; i * i <= dem; i++) {
    if (dem % i === 0) {
      check = 0;
      break;
    }
  }
  if (check) {
    res += `${dem} `;
    count++;
  }
  dem++;
}

alert(res)
