let a = Number(prompt())
let b = Number(prompt())
let c = parseInt(prompt())
let triangle
if (a + b > c && a + c > b && b + c > a && a, b, c > 0) {
  if (a === b && b === c && a === c) {
    document.writeln("tam giác đều")
  } else if (a === b || b === c || c === a) {
    document.writeln("tam giác cân")
  } else if (Math.sqrt(a*a + b*b) === c || Math.sqrt(c*c + b*b) === a || Math.sqrt(a*a + c*c) === b) {
    document.writeln("tam giác vuông")
  } else {
    document.writeln("tam giác thường")
  }
}