let arr = [];
let choice;

do {
  choice = Number(prompt(
    `1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình

>>Nhập lựa chọn của bạn:`
  ))
  switch (choice) {
    case 1:
      let amount = Number(prompt("Nhập số lượng phần tử bạn muốn nhập vào mảng"));
      for (let i = 0; i < amount; i++) {
        while (true) {
          let num = Number(prompt(`Nhập phần tử thứ ${i}`))
          if (!Number.isInteger(num) || isNaN(num)) {
            alert("Phần tử nhập vào phải là số và là số nguyên");
          }else {
            break;
          }
        }
      }
      alert("Nhập thành công");
      break;
    case 2:
      alert(arr);
      break;
    case 3: {
      let even;
      let odd;
      arr.forEach((item) => {
        if (item % 2 === 0) {
          even += `${item}, `;
        }else {
          odd += `${item}, `;
        }
      })
      alert(`Các phần tử là số chẵn: ${even}\nCác phần tử là số lẻ: ${odd}`);
      break;
    }
    case 4: {
      let sum = 0;
      arr.forEach((item) => {
        sum += Number(item);
      })
      let average = Math.round(sum/arr.length);
      alert(`Trung bình cộng các phẩn tử trong mảng là ${average}`);
      break;
    }
    case 5: {
      let pos = Number(prompt(`Nhập vị trí bạn muốn xóa (Mảng: ${arr})`));
      if (pos >= 0 && pos < arr.length) {
        arr.splice(pos, 1);
        alert("Xóa thành công");
        break;
      }
      alert("Vị trí không hợp lệ");
      break;
    }
    case 6: {
      let max = arr[0];
      let max1 = arr[1];
      arr.forEach((item) => {
        if (item > max) {
          max1 = max;
          max = item;
        }else if (item > max1) {
          max1 = item;
        }
      })
      alert(`Phần tử lớn thứ 2 trong mảng là ${max1}`);
      break;
    }
    case 7: {
      alert("Thoát");
      break;
    }
    default:
      alert("Lựa chọn ko hợp lệ");
      break;
  }
} while (choice !== 7)