function convertDate(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }

  return arr.map(date => {
    let [year, month, day] = date.split("-"); 
    return `${day}/${month}/${year}`;
  });
}

let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
alert(convertDate(arr));
