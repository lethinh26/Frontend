function splitArr(arr, n) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  let res = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return res;
}

let arr = [[1, 2, 3, 4, 5, 6, 7, 8], 3];
console.log(splitArr(arr[0], arr[1]));




