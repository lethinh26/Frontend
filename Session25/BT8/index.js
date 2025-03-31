function isStrongPassword(pass) {
  if (pass.length < 8) {
    return false;
  }

  let upper = false;
  let lower = false;
  let num = false;

  for (let char of pass) {
    if (char >= 'A' && char <= 'Z') {
      upper = true;
    } else if (char >= 'a' && char <= 'z') {
      lower = true;
    } else if (char >= '0' && char <= '9') {
      num = true;
    }

    if (upper && lower && num) {
      break;
    }
  }

  return upper && lower && num;
}


let pass = prompt("Nhập mật khẩu");
alert(isStrongPassword(pass));


