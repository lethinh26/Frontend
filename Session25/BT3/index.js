function findEven(arr) {
  for (let i of arr) {
    if (isNaN(i)) {
      return "dữ liệu ko hợp lệ";
    }
  }

  let res = arr.filter((value) => value % 2 === 0);
  if (res.length === 0) {
    return "mảng ko chứa số chẵn";
  }
  return res;
}

let arr = [1,3,5,7];
alert(findEven(arr));
