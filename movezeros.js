var moveZeros = function (arr) {
  let i = 0;
  let trail = [];
  while (i < arr.length) {
    if (arr[i] === 0) {
      let temp = arr.splice(i, 1);
      trail.push(temp[0]);
    } else {
      i += 1;
    }
  }
  return arr.concat(trail);
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
