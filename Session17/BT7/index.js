let num = Number(prompt("Nhập số:"));
num = num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND'}).replace("₫", "VNĐ");
alert(num);

