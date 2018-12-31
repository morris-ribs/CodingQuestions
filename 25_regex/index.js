/**
 * This problem should strike you as recursive. The string should match the regex if we can match the head of the string with the head of the regex and the rest of the string with the rest of the regex. The special characters . and * make implementing this a bit trickier, however, since the * means we can match 0 or any number of characters in the beginning.

The basic idea then is to do the following. Let's call the string we want to match s and the regex r.

Base case: if r is empty, then return whether s is empty or not.
Otherwise, if the first thing in r is not proceeded by a *, then match the first character of both r and s, and if they match, return match(r[1:], s[1:]). If they don't, then return false.
If the first thing in r _is_ proceeded by a *, then try every suffix substring of s on r[2:] and return true if any suffix substring works.
 */
function matchesFirstChar(str, reg) {
  return (str[0] === reg[0] || (reg[0] === '.' && str.length > 0));
}

function match(str, reg) {
  if (reg === '') {
    return (str === "");
  }

  if (reg.length === 1 || reg[1] !== '*') {
    if (matchesFirstChar(str, reg)) {
      return match(str.substring(1), reg.substring(1));
    }
    return false;
  }

  if (match(str, reg.substring(2))) {
    return true;
  }

  let i = 0;
  while (matchesFirstChar(str.substring(i), reg)) {
    if (match(str.substring(1), reg.substring(2))) {
      return true;
    }
    i++;
  }
}

console.log(match("ray", "ra."));
console.log(match("raymond", "ra."));
console.log(match("chat", "*.at"));