function scramble(str1, str2) {
  let newStr = [];
  let splitStr1 = str1.split("").sort();
  let splitStr2 = str2.split("").sort();
  let splitStr1Length = splitStr1.length;
  let splitStr2Length = splitStr2.length;
  for (let i = 0; i < splitStr2Length; i++) {
    let temp = splitStr2[i];
    for (let j = 0; j < splitStr1Length; j++) {
      if (temp < splitStr1[j]) {
        return false;
      }
      if (temp === splitStr1[j]) {
        newStr.push(temp);
        splitStr1.splice(j, 1);
        break;
      }
    }
  }
  return newStr.join("").length === splitStr2Length;
}

console.log(scramble("rkqodlw", "world"));
