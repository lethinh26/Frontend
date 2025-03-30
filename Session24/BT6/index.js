let arr = [];
let choice;

do {
  choice = Number(prompt(
    `1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình

>>Nhập lựa chọn của bạn:`
  ))

  switch (choice) {
    case 1: {
      let str = prompt("Nhập chuỗi");
      arr.push(str);
      alert("Thêm thành công");
      break;
    }

    case 2: {
      alert(arr.join('\n'));
      break;
    }

    case 3: {
      let res = "";
      arr.forEach(str => {
        res += `${str}: ${str.length} ký tự\n`;
      });
      alert(res);
      break;
    }

    case 4: {
      let str = prompt("Nhập ký tự cần đếm");
      let count = 0;
      arr.forEach(str => {
        str.split('').forEach(item => {
          if (item === str) {
            count++;
          }
        });
      });
      alert(`${str} xuất hiện ${count} lần trong mảng`);
      break;
    }

    case 5: {
      let result = '';
      arr.forEach(str => {
        result += `${str}: ${str === str.split('').reverse().join('') ? "Đối xứng" : "Ko đối xứng"}\n`;
      });
      alert(result);
      break;
    }


    case 6: {
      for (let i = 0; i < arr.length; i++) {
        let str = '';
        for (let j = 0; j < arr[i].length; j++) {
          if (j === 0 || arr[i][j - 1] === ' ') {
            str += arr[i][j].toUpperCase();
          } else {
            str += arr[i][j];
          }
        }
        arr[i] = str;
      }
      alert("Chuyển thành công");
      break;
    }

    case 7: {
      alert("Thoát chương trình");
      break;
    }

    default: {
      alert("Lựa chọn ko hợp lệ");
    }
  }
} while (choice !== 7);
