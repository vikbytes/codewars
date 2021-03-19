function squareDigits(num) {
  let result = [];
  let arr = num.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    result.push(parseInt(arr[i]) * parseInt(arr[i]));
  }
  return parseInt(result.join(""));
}
