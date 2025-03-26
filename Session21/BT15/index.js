let money = prompt("Nhập số")

if (money.includes(".")) {
  money = money.replaceAll(".", "");
}

if (!isNaN(money)) {
  if (money >= 500000) {
    document.writeln("500.000 - " + Math.floor(money / 500000) + " tờ <br>");
    money %= 500000;
  }

  if (money >= 200000) {
    document.writeln("200.000 - " + Math.floor(money / 200000) + " tờ <br>");
    money %= 200000;
  }

  if (money >= 100000) {
    document.writeln("100.000 - " + Math.floor(money / 100000) + " tờ <br>");
    money %= 100000;
  }

  if (money >= 50000) {
    document.writeln("50.000 - " + Math.floor(money / 50000) + " tờ <br>");
    money %= 50000;
  }

  if (money >= 20000) {
    document.writeln("20.000 - " + Math.floor(money / 20000) + " tờ <br>");
    money %= 20000;
  }

  if (money >= 10000) {
    document.writeln("10.000 - " + Math.floor(money / 10000) + " tờ <br>");
    money %= 10000;
  }

  if (money >= 5000) {
    document.writeln("5.000 - " + Math.floor(money / 5000) + " tờ <br>");
    money %= 5000;
  }

  if (money >= 2000) {
    document.writeln("2.000 - " + Math.floor(money / 2000) + " tờ <br>");
    money %= 2000;
  }

  if (money >= 1000) {
    document.writeln("1.000 - " + Math.floor(money / 1000) + " tờ <br>");
    money %= 1000;
  }

}