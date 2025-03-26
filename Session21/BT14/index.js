for (let i = 0; i < 21; i++) {
  document.writeln("*");
}
document.writeln("<br>");

let res = ""
for (let i = 0; i < 5; i++) {
  res += "*";
  for (let j = 0; j < 58; j++) {
    res += "&nbsp"
  }
  res += `* <br>`;
}
document.writeln(res);

for (let i = 0; i < 21; i++) {
  document.writeln("*");
}