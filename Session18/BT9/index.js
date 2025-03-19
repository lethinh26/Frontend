let hour = Number(prompt("Nhập giờ"))
let minute = Number(prompt("Nhập phút"))
let second = Number(prompt("Nhập giây"))
let text

if (hour > 23 || hour < 0 || minute > 59 || minute < 0 || second > 59 || second < 0) {
  alert("Thời gian không hợp lệ");
} else {
  if (hour <= 12) {
    if (hour === 0) {
      hour += 12;
    }else if (hour < 10) {
      hour = "0" + hour;
    }


    text = "AM";
  } else {
    hour -= 12;
    if (hour < 10) {
      hour = "0" + hour;
    }
    text = "PM";
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  alert(`${hour}:${minute}:${second} ${text}`)
}

