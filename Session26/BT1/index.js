function checkNum(arr) {
  if (arr.includes(NaN)) {
    return "Dữ liệu ko hợp lệ";
  }
  let res = arr.filter(x => x > 10)
  if (res.length === 0) {
    return "Mảng ko có phần tử nào";
  }
  return `[${res.join(", ")}]`
}

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Number(prompt(`Nhập phần tử th ${i}`)));
}

alert(checkNum(arr));