function disemvowel(str) {
  let vowels = "aieuoAIEUO".split("");
  return str
    .split("")
    .filter((c) => !vowels.some((elem) => elem === c))
    .join("");
}
