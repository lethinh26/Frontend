let money = Number(prompt("Nhập số tiền"));
let month = Number(prompt("Nhập số tháng"));

let res = money * (month * ((4.3/100) / 12));
alert(`Số tiền lãi là ${res.toFixed(1)}`);