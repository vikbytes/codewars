function tickets(peopleInLine) {
  let twentyFives = 0;
  let fifties = 0;
  let hundreds = 0;
  if (peopleInLine[0] !== 25) {
    return "NO";
  }
  twentyFives = 1;
  for (let i = 1; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      twentyFives += 1;
    } else if (peopleInLine[i] === 50) {
      if (twentyFives < 1) {
        return "NO";
      } else {
        twentyFives -= 1;
        fifties += 1;
      }
    } else if (peopleInLine[i] === 100) {
      if (twentyFives >= 1 && fifties >= 1) {
        twentyFives -= 1;
        fifties -= 1;
      } else if (twentyFives >= 3) {
        twentyFives -= 3;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}
