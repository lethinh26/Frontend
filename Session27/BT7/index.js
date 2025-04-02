function check(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  let num = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== num) {
      return "FALSE";
    }
  }
  return "TRUE";
}

let arr = [[2, 4, 6, 8]];
alert(check(arr));
