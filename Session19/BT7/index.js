let num1 = Number(prompt("Nhập số thứ 1"));
let num2 = Number(prompt("Nhập số thứ 2"));
let num3 = Number(prompt("Nhập số thứ 3"));

let res = (num1 >= num2 && num1 >= num3) ? num1 : (num2 >= num1 && num2 >= num3) ? num2 : num3;

alert(`Số lớn nhất trong 3 số là ${res}`)