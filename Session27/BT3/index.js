function calCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calCirclePer(radius) {
  return 2 * Math.PI * radius;
}

function calRectangleArea(length, width) {
  return length * width;
}

function calRectanglePer(length, width) {
  return 2 * (length + width);
}

function showMenu() {
  let choice;
  do {
    choice = Number(prompt(`1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật
5. Thoát
>> Nhập lựa chọn của bạn`
    ));

    switch (choice) {
      case 1: {
        let radius = Number(prompt('Nhập bán kính hình tròn'));
        alert(calCircleArea(radius));
        break;
      }
      case 2: {
        let radius = Number(prompt('Nhập bán kính hình tròn'));
        alert(calCirclePer(radius));
        break;
      }
      case 3: {
        let length = Number(prompt('Nhập chiều dài hình chữ nhật'));
        let width = Number(prompt('Nhập chiều rộng hình chữ nhật'));
        alert(calRectangleArea(length, width));
        break;
      }
      case 4: {
        length = Number(prompt('Nhập chiều dài hình chữ nhật'));
        width = Number(prompt('Nhập chiều rộng hình chữ nhật'));
        alert(calRectanglePer(length, width));
        break;
      }
      case 5: {
        alert('Thoát chương trình!');
        break;
      }
      default: {
        alert('Lựa chọn ko hợp lệ');
      }
    }
  } while (choice !== '5');
}

showMenu();
