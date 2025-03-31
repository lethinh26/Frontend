function isPrime(num) {
  if (isNaN(num)) {
    return "dữ liệu ko hợp lệ";
  }

  if (num < 2) {
    return "ko phải là số nguyên tố";
  }

  for (let i = 0; i * i <= num; i++) {
    if (num % i === 0) {
      return "ko phải là số nguyên tố";
    }
  }
  return "là số nguyên tố";
}

let num = "hello";
alert(isPrime(num));
