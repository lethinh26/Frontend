let num = Number(prompt("Nhập dãy số"));
let array = [];

if (!isNaN(num)) {
  while (num >= 1) {
    array.push(num%10);
    num = Math.floor(num / 10);
  }
  document.writeln(String(array.join("")));
}else {
  alert("Dãy ko hợp lệ");
}