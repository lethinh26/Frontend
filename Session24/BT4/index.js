let arr = [];
let choice;

do {
  choice = Number(prompt(
    `1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình

>>Nhập lựa chọn của bạn:`
  ))
  switch (choice) {
    case 1: {
      let rows = Number(prompt('Nhập số hàng: '));
      let cols = Number(prompt('Nhập số cột: '));
      for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
          while (true) {
            let num = Number(prompt(`Nhập phần tử [${i}][${j}]:`));
            if (!Number.isInteger(num) || isNaN(num)) {
              alert('Phần tử nhập vào phải là số nguyên.');
            } else {
              row.push(num);
              break;
            }
          }
        }
        arr.push(row);
      }
      alert('Nhập mảng thành công.');
      break;
    }

    case 2: {
      let res = '';
      arr.forEach(col => {
        res += col.join('  ') + '\n';
      });
      alert(res);
      break;
    }


    case 3: {
      let sum = 0;
      arr.forEach(col => {
        col.forEach(item => {
          sum += item;
        });
      });
      alert(`Tổng các phần tử trong mảng là: ${sum}`);
      break;
    }


    case 4: {
      let max = arr[0][0], pos = '';
      arr.forEach((col, i) => {
        col.forEach((num, j) => {
          if (num > max) {
            max = num;
            pos = `[${i}][${j}]`;
          }
        });
      });
      alert(`Phần tử lớn nhất: ${max}\nVị trí ${pos}`);
      break;
    }

    case 5: {
      let row = Number(prompt('Nhập vị trí hàng: '));
      if (row >= 0 && row < arr.length) {
        let sumRow = 0;
        arr[row].forEach(num => {
          sumRow += num;
        });
        let avg = sumRow / arr[row].length;
        alert(`Trung bình cộng của hàng ${row}: ${avg}`);
      } else {
        alert('Hàng ko hợp lệ');
      }
      break;
    }

    case 6: {
      arr = arr.map(row => [...row].reverse());
      alert('Đảo ngược thành công');
      break;
    }

    case 7: {
      alert('Thoát chương trình');
      break;
    }

    default: {
      alert('Lựa chọn ko hợp lệ');
      break;
    }
  }
} while (choice !== 7);