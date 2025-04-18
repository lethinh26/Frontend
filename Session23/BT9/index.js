let array = [];
let choice;
do {
  choice = Number(prompt(
    `================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát
==========================================

Lựa chọn của bạn`
  ));

  switch (choice) {
    case 1:
      let n = Number(prompt("Nhập số phần tử"));
      for (let i = 0; i < n; i++) {
        array.push(Number(prompt(`Nhập phần tử thứ ${i + 1}`)));
      }
      alert("Nhập thành công");
      break;
    case 2:
      if (array.length === 0) {
        alert("Mảng rỗng");
      } else {
        alert(array);
      }
      break;
    case 3:
      if (array.length === 0) {
        alert("Mảng rỗng");
      } else {
        let even = array.filter(x => x % 2 === 0);
        let sum = even.reduce((a, b) => a + b, 0);
        alert("Các số chẵn: " + even + "\nTổng: " + sum);
      }
      break;
    case 4:
      if (array.length === 0) {
        alert("Mảng rỗng");
      } else {
        let max = Math.max(...array);
        let min = Math.min(...array);
        alert("Số lớn nhất: " + max + "\nSố nhỏ nhất: " + min);
      }
      break;
    case 5:
      if (array.length === 0) {
        alert("Mảng đang rỗng! Vui lòng nhập dữ liệu trước.");
      } else {
        let res = [];
        let sum = 0;
        for (let num of array) {
          let check = true;
          if (num < 2) {
            check = false;
          } else {
            for (let i = 2; i*i < num; i++) {
              if (num % i === 0) {
                check = false;
                break;
              }
            }
          }
          if (check) {
            res.push(num);
            sum += num;
          }
        }
        alert("Các số nguyên tố: " + res + "\nTổng: " + sum);
      }
      break;
    case 6:
      if (array.length === 0) {
        alert("Mảng rỗng");
      } else {
        let num = Number(prompt("Nhập số cần thống kê"));
        let count = array.filter(x => x === num).length;
        alert(`Số ${num} xuất hiện ${count} lần trong mảng`);
      }
      break;
    case 7:
      if (array.length === 0) {
        alert("Mảng rỗng");
      } else {
        let index = Number(prompt("Nhập vị trí muốn thêm"));
        let value = Number(prompt("Nhập giá trị cần thêm"));
        if (index >= 0 && index <= array.length) {
          array.splice(index, 0, value);
          alert("Thêm thành công");
        } else {
          alert("Vị trí không hợp lệ");
        }
      }
      break;
    case 8:
      alert("Thoát chương trình");
      break;
    default:
      alert("Lựa chọn không hợp lệ");
      break;
  }
} while (choice !== 8);
