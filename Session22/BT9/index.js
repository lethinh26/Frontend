let array = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      array.splice(j, 1);
      j--;
    }
  }
}

array.sort((a,b) => a - b);

alert(array);
