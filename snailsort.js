snail = function(array) {
  let result = [];
  let operations = 0;
  let x = 0;
  let y = 0;
  let max = array.length;
  if (max === 1) {
    return array[0];
  }
  for(let i = max-1; i >= 0; i--) {
    x = i - max + 1;
    y = 1;
    while(y <= max) {
      result.push(array[x][y]);
      y++;
    }
    x += 1;
    y = i;
    while(x <= max) {
      result.push(array[x][y]);
      x++;
    }
    x = i;
    y = i - 1;
    while(y >= 1) {
      result.push(array[x][y]);
      y--;
    }
    x = i - 1;
    y = 1;
    while(x >= 1) {
      result.push(array[x][y]);
      x--;
    }
  }
  return result;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))