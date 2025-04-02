function showChoiceMenu() {
  return Number(prompt(
    `1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
>> Nhập lựa chọn của bạn`
  ));
}

function inputNumber(message) {
  let num = Number(prompt(message));
  if (isNaN(num)) {
    alert("Giá trị ko hợp lệ");
    return null;
  }
  return num;
}

function calculate(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        alert("Không thể chia cho 0!");
        return null;
      }
      return num1 / num2;
    default:
      return null;
  }
}

let choice = null;

do {
  choice = showChoiceMenu();
  switch (choice) {
    case 1: {
      let num1 = inputNumber("Nhập số thứ 1");
      if (num1 === null) break;
      let num2 = inputNumber("Nhập số thứ 2");
      if (num2 === null) break;
      alert(calculate("+", num1, num2));
      break;
    }
    case 2: {
      let num1 = inputNumber("Nhập số thứ 1");
      if (num1 === null) break;
      let num2 = inputNumber("Nhập số thứ 2");
      if (num2 === null) break;
      alert(calculate("-", num1, num2));
      break;
    }
    case 3: {
      let num1 = inputNumber("Nhập số thứ 1");
      if (num1 === null) break;
      let num2 = inputNumber("Nhập số thứ 2");
      if (num2 === null) break;
      alert(calculate("*", num1, num2));
      break;
    }
    case 4: {
      let num1 = inputNumber("Nhập số thứ 1");
      if (num1 === null) break;
      let num2 = inputNumber("Nhập số thứ 2");
      if (num2 === null) break;
      alert(calculate("/", num1, num2));
      break;
    }
    case 5: {
      alert("Thoát");
      break;
    }
    default: {
      alert("Lựa chọn không hợp lệ");
      break;
    }
  }
} while (choice !== 5);
