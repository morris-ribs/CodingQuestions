function getPermutations(digits="", mapping=[]) {
  const digit = digits[0];
  if (digits.length === 1) {
    return mapping[digit];
  }

  const result = [];
  const arr = mapping[digit];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const digitsSplice = digits.substring(1);
    const perms = getPermutations(digitsSplice, mapping);

    for (let j = 0; j < perms.length; j++) {
      const perm = perms[j];
      result.push(char + perm);
    }
  }

  return result;
}

console.log(getPermutations("23", {"2": ["a", "b", "c"], "3": ["d", "e", "f"]})); // expected ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]