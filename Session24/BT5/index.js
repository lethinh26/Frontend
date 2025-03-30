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
      let sum = 0;
      for (let i = 0; i < Math.min(arr.length, arr[0].length); i++) {
        sum += arr[i][i];
      }
      alert(`Tổng đường chéo chính là: ${sum}`);
      break;
    }


    case 5: {
      let sum = 0;
      let size = Math.min(arr.length, arr[0].length);
      for (let i = 0; i < size; i++) {
        sum += arr[i][size - 1 - i];
      }
      alert(`Tổng đường chéo phụ là: ${sum}`);
      break;
    }


    case 6: {
      let choose = Number(prompt("Chọn tính trung bình cộng:\n1. Theo hàng\n2. Theo cột"));
      if (choose === 1) {
        let row = Number(prompt("Nhập chỉ số hàng"));
        if (row >= 0 && row < arr.length) {
          let sumRow = 0;
          arr[row].forEach(num => {
            sumRow += num;
          });
          let avg = sumRow / arr[row].length;
          alert(`Trung bình cộng của hàng ${row}: ${avg}`);
        } else {
          alert("Hàng không hợp lệ");
        }
      } else if (choose === 2) {
        let col = Number(prompt("Nhập chỉ số cột"));
        if (col >= 0 && col < arr[0].length) {
          let sumCol = 0, count = 0;
          arr.forEach(item => {
            sumCol += item[col];
            count++;
          });
          let avg = sumCol / count;
          alert(`Trung bình cộng của cột ${col}: ${avg}`);
        } else {
          alert("Cột không hợp lệ");
        }
      } else {
        alert("Lựa chọn không hợp l.");
      }
      break;
    }
    
    case 7:
      alert("Thoát chương trình");
      break;

    default:
      alert("Lựa chọn ko hợp lệ");
      break;
  }
} while (choice !== 7);