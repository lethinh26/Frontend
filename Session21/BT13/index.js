let row = 10;
let column = 0;

// a
while (column < 10){
  let res = "";
  for (let i = 1; i <= row; i++) {
    res += "*";
  }
  row--;
  column++;
  document.writeln(`${res} <br>`);
}

document.writeln(`<br>`);

// b
row = 1;
column = 0
while (column < 10){
  let res = "";
  for (let i = 1; i <= row; i++) {
    res += "*";
  }
  row++;
  column++;
  document.writeln(`${res} <br>`);
}

document.writeln(`<br>`);


//c
row = 9;
column = 0;
while (column < 10){
  let res = "";
  for (let i = 1; i <= row; i++) {
    res += "&nbsp&nbsp";
  }
  for (let i = 10; i > row; i--) {
    res += "*"
  }
  row--;
  column++;
  document.writeln(`${res} <br>`);
}

document.writeln(`<br>`);

//c
row = 10;
column = 0;
while (column < 10){
  let res = "";
  for (let i = 10; i > row; i--) {
    res += "&nbsp&nbsp"
  }
  for (let i = 1; i <= row; i++) {
    res += "*";
  }
  row--;
  column++;
  document.writeln(`${res} <br>`);
}
document.writeln(`<br>`);