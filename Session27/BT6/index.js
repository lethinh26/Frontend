function isArithmeticSequence(arr) {
  if (!Array.isArray(arr) || arr.length < 2 || !arr.every(Number.isInteger)) {
    return "dữ liệu không hợp lệ";
  }

  let diff = arr[1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      return false;
    }
  }
  return true;
}

const testCases = [
  [2, 4, 6, 8], // TRUE
  [3, 6, 9, 12, 14], // FALSE
  "abc" // Dữ liệu không hợp lệ
];

testCases.forEach(test => {
  console.log(`Input: ${JSON.stringify(test)} -> Output:`, isArithmeticSequence(test));
});
