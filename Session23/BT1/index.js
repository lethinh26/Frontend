let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = prompt(`Nhập phần tử thứ ${i}`)
}

let res = array.filter(num => num > 10);
res = res.length > 0 ? res : "Không có số nào lớn hơn 10";

alert(res.join(" "));