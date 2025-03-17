let min = prompt("Nhập số bé nhất: ");
let max = prompt("Nhập số lớn nhất: ");

let random = Math.random() * (Number(max) - Number(min)) + Number(min);

alert(random);
