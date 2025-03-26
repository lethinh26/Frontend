let num = Number(prompt("Nhập dãy số"));

if (!isNaN(num)) {
  let array = num.toString().split('');
  let max = Number(array[0]);
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = Number(array[i]);
    }
  }
  alert(`${max} là số lớn nhất trong dãy`);
}else {
  alert("Dãy ko hợp lệ");
}