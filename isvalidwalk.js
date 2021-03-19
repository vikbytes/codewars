function isValidWalk(walk) {
  let x = 0;
  let y = 0;
  let minutes = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      y += 1;
    } else if (walk[i] === "s") {
      y -= 1;
    } else if (walk[i] === "e") {
      x += 1;
    } else if (walk[i] === "w") {
      x -= 1;
    }
    minutes += 1;
  }
  if (minutes !== 10) {
    return false;
  }
  if (x == 0 && y == 0) {
    return true;
  } else {
    return false;
  }
}
