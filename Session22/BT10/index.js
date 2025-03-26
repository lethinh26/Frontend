let array = [];
let current = array.length;

while (true) {
  let choice =  Number(prompt(
    `\t Menu
  1. Nhập vào mảng
  2. Hiển thị mảng
  3. Thêm vào mảng
  4. Sửa phần tử
  5. Xóa phần tử
  6. Thoát
  
  Nhập lựa chọn của bạn:`
  ))


  switch (choice) {
    case 1: {
      array[length] = prompt("Nhập vào mảng");
      alert("Nhập thành công");
      break;
    }
    case 2: {
      alert(array);
      break;
    }
    case 3: {
      array[length] = prompt("Thêm vào mảng");
      alert("Thêm thành công");
      break;
    }
    case 4: {
      let pos = prompt("Nhập vị trí muốn sửa");
      array[pos] = prompt("Nhập giá trị mới");
      alert("Sửa thành công");
      break;
    }
    case 5: {
      let pos = prompt("Nhập vị trí muốn xóa");
      array.slice(pos, pos);
    }

  }
}

