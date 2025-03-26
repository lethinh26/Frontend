let digit = 3;
let n = 100
let nTest, check
while (n <= 999) {
  check = 0;
  nTest = n;
  for (let i = 0; i < digit; i++) {
    check += Math.pow(nTest % 10, 3);
    nTest = Math.floor(nTest/10) ;
  }
  if (check === n) {
    document.writeln(n);
  }
  n++;
}

