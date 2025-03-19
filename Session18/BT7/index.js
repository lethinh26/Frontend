let a = Number(prompt("Nhập số a"))
let b = Number(prompt("Nhập số b"))
let operation = prompt("Nhập phép toán (+, -, *, /)")

if (isNaN(a) || isNaN(b)) {
  alert("Phải là số");
}else {
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
}



