function ipsBetween(start, end) {
  //Each number is between 0 up to 255
  //So it's: 256^4 + 256^3 + 256^2 + 256^1
  let array1 = start.split(".").reverse();
  let array2 = end.split(".").reverse();
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < 4; i++) {
    result1 += parseInt(array1[i]) * Math.pow(256, i);
    result2 += parseInt(array2[i]) * Math.pow(256, i);
  }
  return result2 - result1;
}
console.log(ipsBetween("10.0.0.0", "10.0.0.50")); //50
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); //246
