let numbers = [2,5,7,4,1,8,6];
let guess = Number(prompt("Nhập số đoán"));
if (guess in numbers) {
  console.log("Bingo");
}else {
  console.log("Chúc bạn may mắn lần sau");
}