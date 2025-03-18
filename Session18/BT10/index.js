let num = Number(prompt("Nhập số"))

if (num > 999 || num < 0) {
  alert("Số không hợp lệ")
}else {
  let str1 = " ", str2 = " ", str3 = " ";
  switch (num%10) {
    case 0:
      if (num < 9) {
        str1 = "Không"
      }
      break;
    case 1:
      str1 = "Một"
      break;
    case 2:
      str1 = "Hai"
      break;
    case 3:
      str1 = "Ba"
      break;
    case 4:
      str1 = "Bốn"
      break;
    case 5:
      str1 = "Năm"
      break;
    case 6:
      str1 = "Sáu"
      break;
    case 7:
      str1 = "Bảy"
      break;
    case 8:
      str1 = "Tám"
      break;
    case 9:
      str1 = "Chín"
      break;
  }
  if (num > 9) {
    switch (Math.floor(num/10)%10) {
      case 1:
        str2 = "Mười "
        break;
      case 2:
        str2 = "Hai mươi "
        break;
      case 3:
        str2 = "Ba mươi "
        break;
      case 4:
        str2 = "Bốn mươi "
        break;
      case 5:
        str2 = "Năm mươi "
        break;
      case 6:
        str2 = "Sáu mươi "
        break;
      case 7:
        str2 = "Bảy mươi "
        break;
      case 8:
        str2 = "Tám mươi "
        break;
      case 9:
        str2 = "Chín mươi "
        break;
    }
  }
  if (num > 99) {
    switch (Math.floor(num/100)%10) {
      case 1:
        str3 = "Một trăm "
        break;
      case 2:
        str3 = "Hai trăm "
        break;
      case 3:
        str3 = "Ba trăm "
        break;
      case 4:
        str3 = "Bốn trăm "
        break;
      case 5:
        str3 = "Năm trăm "
        break;
      case 6:
        str3 = "Sáu trăm "
        break;
      case 7:
        str3 = "Bảy trăm "
        break;
      case 8:
        str3 = "Tám trăm "
        break;
      case 9:
        str3 = "Chín trăm "
        break;
    }
  }
  if (num > 100 && num < 110) {
    let str = str3  + str2 + "linh" + str1
    str.trim()
    alert(str)
  }else {
    let str = str3 + str2  + str1
    str.trim()
    alert(str)
  }
}