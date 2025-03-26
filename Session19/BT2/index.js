let char = prompt("Nhập kí tự");

if (char === "") {
  alert("Không được bỏ trống");
}else {
  if (char.length === 1 && char.charAt(0) >= "A" && char.charAt(0) <= "z") {
    alert(`${char} là kí tự`);
  }else {
    alert(`${char} không phải kí tự`);
  }
}