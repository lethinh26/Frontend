function Firt(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr.join(" "));
}

let str = prompt("Mời bạn nhập vào một chuỗi bất kì");
Firt(str);