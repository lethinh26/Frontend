let result1 = "javascript" + 5; // chuyển 5 thành chuỗi và nối 2 chuỗi lại
let result2 = "javascript" - 1; // chuyển javascript thành số để thực hiện phép tính nhưng chuyển ko đc nên kết quả NaN
let result3 = "3" + 2; // chuyển 2 thành chuỗi và nối 2 chuỗi lại
let result4 = "5" - 4; // chuyển chuỗi 5 thành số để thưc hiện phép tính trừ
let result5 =  isNaN( "123"); // ép kiểu và kiểm tra xem có NaN ko, kq = false vì là số
let result6 = isNaN("hello"); // ép kiểu và kiểm tra xem có NaN ko, kq = true vì là chuỗi
let result7 = Number.isNaN("123"); // ko ép kiểu và kiểm tra xem có NaN ko, kq = false
let result8 = Number.isNaN(NaN); // // ko ép kiểu và kiểm tra xem có NaN ko, kq = true

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);