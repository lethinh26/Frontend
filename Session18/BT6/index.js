let year = Number(prompt("Nhập năm"))

if (isNaN(year)) {
  alert("Phải là số");
}else {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    alert(`${year} là năm nhuận`)
  }else {
    alert(`${year} không phải là năm nhuận`)
  }
}
