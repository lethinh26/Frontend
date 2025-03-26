let num = Number(prompt("Nhập số"));

let res = "";

if (!isNaN(num)) {
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      res += `${i} `
    }
  }
  alert(res);
}else {
  alert("BRUH");
}