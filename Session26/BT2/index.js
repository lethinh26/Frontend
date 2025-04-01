function checkStr(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }
  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }
  let res = arr.filter(x => x.length > 5)

  return `[${res.map(x => `"${x}"`).join(', ')}]`;
}

let arr = ["hello"];
alert(checkStr(arr))