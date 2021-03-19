function nbYear(p0, percent, aug, p) {
  let result = 0;
  while (p0 < p) {
    result += 1;
    p0 = p0 * (1 + percent / 100) + aug;
  }
  return result;
}
