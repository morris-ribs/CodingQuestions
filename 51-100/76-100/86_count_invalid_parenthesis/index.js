function countInvalidParenthesis(str) {
  let opened = 0, invalid = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === '(') {
      opened++;
    } else if (c === ')') {
      if (opened > 0) {
        opened--;
      } else {
        invalid++;
      }
    }
  }

  // Count as invalid all unclosed parenthesis
  invalid += opened;
  return invalid;
}

console.log(countInvalidParenthesis("()())()")); // expected 1
console.log(countInvalidParenthesis(")(")); // expected 2
