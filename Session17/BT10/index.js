let num = Number(prompt("Nhập số:"));

let check = (num % Math.sqrt(num)) == 0;

if (check) {
    alert(`${num} là số chính phương`);
} else {
  alert(`${num} không phải là số chính phương`);
}