function findMin(arr) {
  if (arr.length === 0) {
    return "Mảng ko chứa phần tử";
  }
  let check = 0;
  for (let value of arr) {
    if (isNaN(value)) {
      check = 1;
      return "Giá trị ko hợp lệ";
    }
  }
  return `Số nhỏ nhất trong mảng là ${Math.min(...arr)}`;
}

let arr = [1,"a",3,4,5,6,7];

alert(findMin(arr));