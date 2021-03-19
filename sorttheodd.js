function sortArray(array) {
  let odd_positions = [];
  let even_positions = [];
  let odds = [];
  let evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even_positions.push(i);
      evens.push(array[i]);
    } else {
      odd_positions.push(i);
      odds.push(array[i]);
    }
  }
  odds.sort((a, b) => a - b);
  let result = new Array(odds.length + evens.length);
  for (let i = 0; i < evens.length; i++) {
    result[even_positions[i]] = evens[i];
  }
  for (let i = 0; i < odds.length; i++) {
    result[odd_positions[i]] = odds[i];
  }
  return result;
}
