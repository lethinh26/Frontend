let r = prompt("Nhập bán kính");
let h = prompt("Nhập chiều cao");

// const PI = 3.14;

let sxq = 2 * Math.PI * r * h;
let stp = sxq + 2 * Math.PI * r * r;
let V = stp * h;
let cv = 2 * Math.PI * r;


document.writeln(`Diện tích xung quanh hình trụ là: ${sxq.toFixed(2)} <br>`);
document.writeln(`Diện tích toàn phần hình trụ là: ${stp.toFixed(2)} <br>`);
document.writeln(`Thể tích hình trụ là: ${V.toFixed(2)} <br>`);
document.writeln(`Chu vi hình trụ là: ${cv.toFixed(2)}`);
