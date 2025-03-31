function isPalindrome(str) {
  if (str === str.split("").reverse().join("")) {
    return "Là chuỗi đối xứng";
  }
  return "Ko phải chuỗi đối xứng";
}

let str = prompt("Nhập chuỗi");

alert(isPalindrome(str));
