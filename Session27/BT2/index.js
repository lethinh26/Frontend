let arr = []

function showChoiceMenu() {
  return Number(prompt(
    `1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát.
>> Nhập lựa chọn của bạn`
  ));
}

function showStudent() {
  if (arr.length === 0) {
    return "Danh sách rỗng";
  }
  return arr.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function findStudent(name) {
  let student = arr.filter(student => student.toLowerCase().includes(name.toLowerCase()))
  if (student.length === 0) {
    return "Ko tìm thấy sinh viên";
  }
  return student;
}

function removeStudent(name) {
  let pos = arr.findIndex(student => student.toLowerCase() === name.toLowerCase())
  if (pos === undefined) {
    return "Ko tìm thấy sinh viên";
  }
  arr.splice(arr.indexOf(pos), 1);
  return "Xóa thành công";
}

let choice = null;

do {
  choice = showChoiceMenu();
  switch (choice) {
    case 1: {
      arr.push(prompt("Nhập tên sinh viên bạn muốn thêm"));
      alert("Thêm thành công");
      break;
    }
    case 2: {
      alert(showStudent());
      break;
    }
    case 3: {
      let student = prompt("Nhập tên sinh viên muốn tìm kiếm");
      alert(findStudent(student));
      break;
    }
    case 4: {
      let student = prompt("Nhập tên sinh viên muốn xóa");
      alert(removeStudent(student));
      break;
    }
    case 5: {
      alert("Thoát");
      break;
    }
    default: {
      alert("Lựa chọn không hợp lệ");
      break;
    }
  }
} while (choice !== 5);
