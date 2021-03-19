function bouncingBall(h, bounce, window) {
  let result = 1;
  if (h <= 0) {
    return -1;
  }
  if (bounce < 0 || bounce >= 1) {
    return -1;
  }
  if (window >= h) {
    return -1;
  }
  for (let i = h * bounce; i > window; i = i * bounce) {
    result += 2;
  }
  return result;
}
