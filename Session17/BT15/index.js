let r = prompt("Nhập vào bán kính hình cầu");
let V = 4/3 * Math.PI * Math.pow(r, 3);
let s = 4 * Math.PI * r * r;
let c = 2 * Math.PI * r;

document.writeln(`Thể tích hình cầu là: ${V.toFixed(2)} <br>`);
document.writeln(`Diện tích hình cầu là: ${s.toFixed(2)} <br>`);
document.writeln(`Chu vi hình cầu là: ${c.toFixed(2)}`);