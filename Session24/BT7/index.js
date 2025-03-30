let arr = [];
let choice;

do {
  choice = Number(prompt(
    `1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
7. Thoát chương trình`
  ));

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
      arr = arr.map(str => str.trim());
      alert("Đã loại bỏ khoảng trắng thừa");
      break;
    }

    case 4: {
      arr = arr.map(str => str.split("").reverse().join(""));
      alert("Chuỗi đã được đảo ngược");
      break;
    }

    case 5: {
      let result = "";
      arr.forEach(str => {
        let wordCount = str.trim().split(" ").length;
        result += `${str}: ${wordCount} từ\n`;
      });
      alert(result);
      break;
    }

    case 6: {
      let search = prompt("Nhập ký tự cần tìm kiếm");
      let replace = prompt("Nhập ký tự thay thế");
      arr.forEach((str, index) => {
        arr[index] = str.replaceAll(search, replace);
      });
      alert("Thay thế thành công");
      break;
    }

    case 7: {
      alert("Thoát chương trình");
      break;
    }

    default: {
      alert("Lựa chọn không hợp lệ");
    }
  }
} while (choice !== 7);
