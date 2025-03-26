let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));

let res = 1;

if (!isNaN(a) && !isNaN(b)) {
  for (let i = b; i !== 0; (i < 0)? i++ : i--) {
    if (b < 0) {
      res *= 1/a;
    }else {
      res *= a;
    }
  }
  alert(res.toFixed(2));
}else {
  alert("Ko hợp lệ");
}
