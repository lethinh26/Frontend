let name = prompt("Nhập tên")
let pass = prompt("Nhập mật khẩu")

if (name === "ADMIN") {
  if (pass === "TheMaster") {
    alert("Welcome!")
  } else if (pass === null || pass === "") {
    alert("Canceled")
  }
}else if (name === null || name === "") {
  alert("Canceled")
}else {
  alert("I don't know you")
}