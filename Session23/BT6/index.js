let arr = [ "", false, 0, undefined, null ]
let arr2= []

arr.forEach((value) => {
  if (value) {
    arr2.push(value)
  }
})

arr2.forEach((value, index) => {
  if (isNaN(value)) {
    arr2[index] = '"' + value + '"';
  }
})

alert("[" + arr2.join(", ") + "]")

