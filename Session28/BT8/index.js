let employee = [];

function showMenu() {

  return  Number(prompt(
    `1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
3. Cập nhật mức lương của nhân viên theo id
4. Tìm kiếm nhân viên theo tên.
5. Thoát
>> Nhập lựa chọn của bạn`
  ));
}

function checkNumber(number, prompt) {
  if (isNaN(number) || number === "" || number === " ") {
    return `${prompt} ko hợp lệ`;
  }
  return true;
}

function checkString(str, prompt) {
  if (str !== "" && str !== " ") {
    return true;
  }
  return `${prompt} ko hợp lệ`;

}

function addEmployee() {
  let id = Number(prompt("Nhập id nhân viên"))
  let check = checkNumber(id, "Id");
  if (check !== true) return check;
  if (employee.findIndex(value => value.id === id) !== -1) {
    return "ID đã tồn tại";
  }

  let name = prompt("Nhập tên nhân viên");
  let checkStr = checkString(name, "Tên nhân viên");
  if (checkStr !== true) return checkStr;


  let position = prompt("Nhập vị trí");
  checkStr = checkString(name, "Vị trí");
  if (checkStr !== true) return checkStr;

  let salary = Number(prompt("Nhập lương"));
  check = checkNumber(salary, "Lương");
  if (check !== true) return check;
  employee.push({id, name, position, salary});
  return "Thêm thành công";
}

function deleteEmployee() {
  let id = Number(prompt("Nhập id nhân viên cần xóa"));
  let check = checkNumber(id, "Id");
  if (check !== true) return check;

  let pos = employee.findIndex(emp => emp.id === id);

  if (pos === -1) {
    return "Ko tìm thấy ID";
  }
  
  let checkConfirm = confirm(
    `${employee[pos].name}
    Xác nhận xóa?`
  )
  if (checkConfirm) {
    employee.splice(pos, 1);
    return "Xóa thành công";
  }
  return "Hủy xóa"
}



function updateSalary() {
  let id = Number(prompt("Nhập id của nhân viên cập nhật lương"));
  let check = checkNumber(id, "Id");
  if (check !== true) return check;


  let pos = employee.findIndex(emp => emp.id === id);

  if (pos === -1) {
    return "Ko tìm thấy ID"
  }
  let salary = Number(prompt("Nhập mức lương mới"));
  check = checkNumber(salary, "salary");
  if (check !== true) return check;
  
  return "Cập nhật thành công"
}

function searchEmployee() {
  let name = prompt("Nhập tên nhân viên cần tìm");
  let result = employee.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));

  if (result.length === 0) {
    return "Ko tìm thấy nhân viên";
  }
  
  let res = [];
  result.forEach(emp => {
    res += `ID: ${emp.id}, Tên: ${emp.name}, Vị trí: ${emp.position}, Lương: ${emp.salary}`;
  });
  return res;
}

function runMenu() {
  let choice = null;
  do {
    choice = showMenu();
    switch (choice) {
      case 1:
        alert(addEmployee());
        break;
      case 2:
        alert(deleteEmployee());
        break;
      case 3:
        alert(updateSalary());
        break;
      case 4:
        alert(searchEmployee());
        break;
      case 5:
        alert("Thoát");
        break;
      default:
        alert("Lựa chọn ko hợp lệ");
    }
  } while (choice !== 5)
}
runMenu();
