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
      let count = {};
      for (let i = 0; i < arr.length; i++) {
        let words = arr[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          let word = words[j];
          if (count[word]) {
            count[word]++;
          } else {
            count[word] = 1;
          }
        }
      }
      let result = "";
      for (let word in count) {
        result += `${word}: ${count[word]}\n`;
      }
      alert(result);
      break;
    }

    case 4: {
      let long = "", short = "";
      for (let i = 0; i < arr.length; i++) {
        let words = arr[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          let word = words[j];
          if (!short || word.length < short.length) {
            short = word;
          }
          if (word.length > long.length) {
            long = word;
          }
        }
      }
      alert(`Từ dài nhất: ${long}\nTừ ngắn nhất: ${short}`);
      break;
    }

    case 5: {
      let count = {};
      for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++) {
          let char = str[j];
          if (char !== ' ') {
            if (count[char]) {
              count[char]++;
            } else {
              count[char] = 1;
            }
          }
        }
      }
      let maxChar = '';
      let maxCount = 0;
      for (let char in count) {
        if (count[char] > maxCount) {
          maxCount = count[char];
          maxChar = char;
        }
      }
      alert(`Ký tự xuất hiện nhiều nhất: '${maxChar}' (${maxCount} lần)`);
      break;
    }

    case 6: {
      for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] === ' ') {
            str += '_';
          } else {
            str += arr[i][j].toLowerCase();
          }
        }
        arr[i] = str;
      }
      alert("Đã chuyển đổi thành snake_case");
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
