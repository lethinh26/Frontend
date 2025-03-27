let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = prompt(`Nhập phần tử thứ ${i}`);
}

if (array.length === 0) {
  alert("Ko có số lớn nhất");
}else {
  let max = array[0];
  let pos = 0;
  for (let i in array) {
    if (array[i] > max) {
      max = array[i];
      pos = i;
    }
  }
  alert(
    `Số lớn nhất: ${max}\nVị trí: ${pos}`
  )
}

