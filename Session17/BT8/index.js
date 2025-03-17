const date1 = new Date(prompt("Nhập vào năm-tháng-ngày thứ nhất"));
const date2 = new Date(prompt("Nhập vào năm-tháng-ngày thứ hai"));

let res = (date2 - date1) / (86400 * 1000);

alert(`Độ lệch là ${res} ngày`);
