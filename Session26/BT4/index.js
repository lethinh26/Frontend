function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false
  }
  return true;
}

function checkPrime(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu ko hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng ko có phần tử nào";
  }

  return arr.filter(x => isPrime(x));
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(checkPrime(arr));