function match(c1, c2) {
  return (
    (c1 === '{' && c2 === '}') ||
    (c1 === '(' && c2 === ')') ||
    (c1 === '[' && c2 === ']')
  );
}

function isStringWellFormed(str) {
  const stack = [];
  while (str.length > 0) {
    const c = str[0];
    if (c === '[' || c === '(' || c === '{') {
      stack.push(c);
    } else if (c === ']' || c === ')' || c === '}') {
      if (stack.length <= 0 || !match(stack.pop(), c)) {
        return false;
      }
    }
    str = str.substring(1);
  }
  return stack.length === 0;
}

console.log(isStringWellFormed("([])[]({})")); // expected true
console.log(isStringWellFormed("([)]")); // expected false
console.log(isStringWellFormed("((()")); // expected false
console.log(isStringWellFormed("]([])[]({})")); // expected false
