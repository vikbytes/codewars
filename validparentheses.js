function validParentheses(parens) {
  let num = 0;
  for (let i = 0; i < parens.length; i++) {
    if (num < 0) {
      return false;
    } else {
      if (parens[i] === "(") {
        num += 1;
      } else {
        num -= 1;
      }
    }
  }
  if (num !== 0) {
    return false;
  } else {
    return true;
  }
}
