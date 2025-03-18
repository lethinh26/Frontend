let yearExperienced = Number(prompt("Nhập số năm kinh nghiệm"))

if (yearExperienced < 1) {
  alert("Mới vào nghề")
}else if (yearExperienced >= 1 && yearExperienced <= 3) {
  alert("Nhân viên có kinh nghiệm")
}else if (yearExperienced >= 4 && yearExperienced <= 6) {
  alert("Chuyên viên")
}else if (yearExperienced > 6) {
  alert("Quản lý")
}