let numbers = [1,2,3,5,1,2,3,4,6,7,8,9,3,5,3,6,7,3];

let num = Number(prompt("Nhập số"));

if (!isNaN(num)) {
  let count = 0;

  for (let value of numbers) {
    if (value === num) {
      count++;
    }
  }
  if (count !== 0) {
    alert(`Số ${num} xuất hiện ${count} lần trong mảng`);
  }else {
    alert(`Số ${num} ko tồn tại trong mảng`);
  }
} else {
  alert("Số nhập vào ko hợp lệ");
}

