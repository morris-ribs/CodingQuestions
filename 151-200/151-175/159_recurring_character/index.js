function firstRecurring(str="") {
  const seen = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen.findIndex(c => c === char) >= 0) {
      return char;
    }
    seen.push(char);
  }
  return null;
}

console.log(firstRecurring("acbbac")); // return b
console.log(firstRecurring("abcdef")); // return null
