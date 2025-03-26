let array = [2,5,7,4,1,8,6,2,5,7];
let arrcheck = [];


for (let value of array) {
  arrcheck[value] = 0;
}
for (let value of array) {
  arrcheck[value]++;
}

let max = 0;
let result = -1;

for (let num in arrcheck) {
  console.log(num);
  if (arrcheck[num] > max || (arrcheck[num] === max && num < result)) {
    max = arrcheck[num];
    result = num;
  }
}

alert(result);