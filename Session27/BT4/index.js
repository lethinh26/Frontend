let arr = [];

function inputNumber() {
  let amount = Number(prompt("Nhập số lượng bạn muốn thêm"));

  if (isNaN(amount) || amount <= 0) {
    alert("Số lượng ko hợp lệ");
    return;
  }

  for (let i = 0; i < amount; i++) {
    let num = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    if (isNaN(num)) {
      alert("Giá trị ko hợp lệ");
      return;
    }
    arr.push(num);
  }
  return "Nhập thành công";
}

function calAverage(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

function findMaxEven(arr) {
  let evenNumbers = arr.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) {
    return "Ko có số chẵn";
  }
  return Math.max(...evenNumbers);
}

function findMinOdd(arr) {
  let oddNumbers = arr.filter(num => num % 2 !== 0);
  if (oddNumbers.length === 0) {
    return "Ko có số lẻ";
  }
  return Math.min(...oddNumbers);
}

function showMenu() {
  let choice;
  do {
    choice = Number(prompt(`1. Nhập danh sách số nguyên
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
>> Nhập lựa chọn của bạn`
    ));

    switch (choice) {
      case 1:
        inputNumber();
        break;
      case 2:
        if (arr.length === 0) {
          alert("Mảng rỗng");
        } else {
          let average = calAverage(arr);
          alert(average);
        }
        break;
      case 3:
        if (arr.length === 0) {
          alert("Mảng rỗng");
        } else {
          let maxEven = findMaxEven(arr);
          alert(maxEven);
        }
        break;
      case '4':
        if (arr.length === 0) {
          alert("Mảng rỗng");
        } else {
          let minOdd = findMinOdd(arr);
          alert(minOdd);
        }
        break;
      case 5:
        alert("Thoát");
        break;
      default:
        alert("Lựa chọn ko hợp lệ");
    }
  } while (choice !== '5');
}

showMenu();
