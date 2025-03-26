let a = Number(prompt("Nhập a"));
let b = Number(prompt("Nhập b"));
let c = Number(prompt("Nhập c"));

delta = b * b - 4 * a * c;

if (delta < 0) {
  alert("Phương trình vô nghiệm");
}else if (delta === 0) {
  let x = -b / 2*a;
  alert(`Phương trình nghiệm kép: x1 = x2 = ${x.toFixed(2)}`);
}else {
  x1 = (-b + Math.sqrt(delta) / (2 * a));
  x2 = (-b - Math.sqrt(delta) / (2 * a));
  alert(`Phương trình có 2 nghiệm phân biệt x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
}