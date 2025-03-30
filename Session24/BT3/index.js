let arr = [];
let choice;

do {
  choice = Number(prompt(
    `1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
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
      let max = Math.max(...arr);
      let pos = arr.indexOf(max);
      alert(`Phần tử lớn nhất trong mảng là ${max}\nNằm ở vị trí ${pos}`);
      break;
    }
    case 4: {
      let sum = 0;
      arr.forEach((item) => {
        sum += Number(item);
      })
      let average = Math.round(sum/arr.length);
      alert(`Tổng các phần tử trong mảng là ${sum}\nTrung bình cộng các phẩn tử trong mảng là ${average}`);
      break;
    }
    case 5: {
      arr = [...arr.reverse()]
      alert("Đảo ngược mảng thành công");
      break;
    }
    case 6: {
      let check = 1;
      arr.forEach((item) => {
        if (item.reverse() !== item) {
          check = 1;
        }
      })
      if (check) {
        alert("Ko phải mảng đối xứng");
      }else {
        alert("Mảng đối xứng");
      }
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