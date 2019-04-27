function balanced(s="") {
  let low = 0;
  let high = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      low++;
      high++;
    } else if (c === ')') {
      low = Math.max(low - 1, 0);
      high--;
    } else if (c === '*') {
      low = Math.max(low - 1, 0);
      high++;      
    }

    if (high < 0) {
      return false;
    }
  }

  return (low === 0);
}

console.log(balanced("(()*")); // expected true
console.log(balanced("(*)")); // expected true
console.log(balanced(")*(")); // expected false