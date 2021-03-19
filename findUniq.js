function findUniq(arr) {
  let first = arr[0];
  if (arr[1] !== arr[0] && arr[2] !== arr[0]) {
    return arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== first) {
      return arr[i];
    }
  }
}
