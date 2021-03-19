var uniqueInOrder = function (iterable) {
  let temp = iterable;
  if (iterable.length === 0) return [];
  let result = [temp[0]];
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] === temp[i - 1]) {
      // do nothing
    } else {
      result.push(temp[i]);
    }
  }
  return result;
};
