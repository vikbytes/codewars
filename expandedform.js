function expandedForm(num) {
  let result = [];
  let strNum = num.toString().split("").reverse();
  let arr = [];
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] !== "0") {
      arr.push(strNum[i].concat("0".repeat(i)));
    }
  }
  arr = arr.reverse();
  result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    result.push(" + " + arr[i]);
  }
  return result.join("");
}
