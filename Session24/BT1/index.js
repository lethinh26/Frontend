let arr = [];
let choice;

do {
  choice = Number(prompt(
    `1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình

>>Nhập lựa chọn của bạn:`
  ))
  switch (choice) {
    case 1:
      let amount = Number(prompt("Nhập số lượng phần tử bạn muốn nhập vào mảng"));
      for (let i = 0; i < amount; i++) {
        arr[arr.length] = prompt(`Nhập phần tử thứ ${i}`);
      }
      alert("Nhập thành công");
      break;
    case 2:
      alert(arr);
      break;
    case 3: {
      let min = arr[0];
      let max = arr[0];
      arr.forEach((item) => {
        if (item < min) {
          min = item;
        }else if (item > max) {
          max = item;
        }
      })
      alert(`Phần tử lớn nhất trong mảng là ${max}\nPhần tử nhỏ nhất trong mảng là ${min}`);
      break;
    }
    case 4: {
      let total = 0;
      arr.forEach((item) => {
        total += Number(item);
      })
      alert(`Tổng các phần tử trong mảng là ${total}`);
      break;
    }
    case 5: {
      let num = prompt("Nhập phần tử bạn muốn xem số lần xuất hiện trong mảng");
      let res = arr.filter((item) => item === num);
      alert(`${num} có ${res.length} lần xuất hiện trong mảng`);
      break;
    }
    case 6: {
      arr.sort((a,b) => a - b);
      alert("Sắp xếp thành công");
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