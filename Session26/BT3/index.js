function checkEmail(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }

  let res = [];
  arr.forEach(x => {
    if (x.includes("@") && !x.includes(" ")) {
      res.push(x);
    }
  })

  return `[${res.map(x => `"${x}"`).join(', ')}]`;
}

let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
alert(checkEmail(arr));