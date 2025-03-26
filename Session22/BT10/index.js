let array = [];

while (true) {
  let choice = Number(prompt(
    `Menu
  1. Nhập vào mảng
  2. Hiển thị mảng
  3. Thêm vào mảng
  4. Sửa phần tử
  5. Xóa phần tử
  6. Thoát
  
  Nhập lựa chọn của bạn:`
  ));

  if (choice === 6) {
    alert("Thoát chương trình");
    break;
  }

  switch (choice) {
    case 1: {
      let value = prompt("Nhập phần tử vào mảng");
      array.push(value);
      alert("Thêm thành công");
      break;
    }
    case 2: {
      if (array.length === 0) {
        alert("Mảng rỗng");
      } else {
        alert(array);
      }
      break;
    }
    case 3: {
      let value = prompt("Nhập phần tử cần thêm");
      let pos = Number(prompt("Nhập vị trí cần thêm"));

      if (pos >= 0 && pos <= array.length) {
        array.splice(pos, 0, value);
        alert("Thêm thành công");
      } else {
        alert("Vị trí không hợp lệ");
      }
      break;
    }
    case 4: {
      if (array.length === 0) {
        alert("Mảng rỗng");
        break;
      }
      let pos = Number(prompt("Nhập vị trí muốn sửa"));

      if (pos >= 0 && pos < array.length) {
        array[pos] = prompt("Nhập giá trị mới");
        alert("Sửa thành công");
      } else {
        alert("Vị trí không hợp lệ");
      }
      break;
    }
    case 5: {
      if (array.length === 0) {
        alert("Mảng rỗng");
        break;
      }
      let pos = Number(prompt("Nhập vị trí cần xóa"));

      if (pos >= 0 && pos < array.length) {
        array.splice(pos, 1);
        alert("Xóa thành công");
      } else {
        alert("Vị trí không hợp lệ");
      }
      break;
    }
    default:
      alert("Lựa chọn không hợp lệ");
  }
}
