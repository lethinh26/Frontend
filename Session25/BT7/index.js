function fixStr(str) {
  let res = '';

  for (let index = 0; index < str.length; index++) {
    if (index === 0 || (index > 1 && str[index - 1] === " "))
    {
      res += str[index].toUpperCase(); 
    } else {
      res += str[index].toLowerCase(); 
    }
  }

  return res; 
}

let str = "hello WORLD";
alert(fixStr(str));