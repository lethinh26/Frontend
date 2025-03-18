let maths = Number(prompt("Nhập điểm toán"))
let liteature = Number(prompt("Nhập điểm văn"))
let english = Number(prompt("Nhập điểm anh"))

let ave = (maths + liteature + english) / 3

if (ave >= 8.0) {
  alert("Giỏi")
}else if (ave >= 6.5) {
  alert("Khá")
}else if (ave >= 5.0) {
  alert("Trung bình")
} else {
  alert("Yếu")
}