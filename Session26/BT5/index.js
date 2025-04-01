function findMax(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }

  let max = Math.max(...arr);
  let pos = arr.indexOf(max);
  return `Max = ${max}\npos = ${pos}`;
}

let arr = [10, 9, 5, 11, 24, 5];
alert(findMax(arr))