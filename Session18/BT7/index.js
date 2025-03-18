let a = Number(prompt("Nhập số a"))
let b = Number(prompt("Nhập số b"))
let operation = prompt("Nhập phép toán (+, -, *, /)")

switch (operation) {
  case "+":
    alert(`${a} + ${b} = ${a + b}`)
    break
  case "-":
    alert(`${a} - ${b} = ${a - b}`)
    break
  case "*":
    alert(`${a} * ${b} = ${a * b}`)
    break
  case "/":
    alert(`${a} / ${b} = ${a / b}`)
    break
  default:
    alert("Phép toán không hợp lệ")
}