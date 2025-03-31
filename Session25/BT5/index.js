function countPosInt(arr) {
  let res = arr.filter(value => {
    return value > 0 && Number.isInteger(value)
  })
  if (res.length === 0) {
    return "Ko có số nguyên dương nào trong mảng";
  }
  return res;
}

let arr = [1.3, -3, -6];
alert(countPosInt(arr))