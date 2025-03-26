let num = Number(prompt("Nhập số"));

if (!isNaN(num)) {
  let res = "";
  for (let i = 0; i < num; i++) {
    let phi = (1 + Math.sqrt(5)) / 2;
    res += `${Math.round((Math.pow(phi, i) - Math.pow(1 - phi, i)) / Math.sqrt(5))} `;
  }
  alert(res);
}
