let money = Number(prompt("Nhập số tiền"));
let rate = Number(prompt("Nhập lãi suất")) / 100;
let month = Number(prompt("Nhập tháng"));

let res = money;
for (let i = 0; i < month; i++) {
   res += res * rate;
}

alert(
  `Tiền lãi: ${(res - money).toFixed(3)}
Tiền nhận được: ${res.toFixed(3)}`
);
