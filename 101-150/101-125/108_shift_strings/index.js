function isShifted(A, B) {
  if (A.length !== B.length) {
    return false;
  }
  const doubleA = A + A;
  return doubleA.indexOf(B) >= 0;
}

console.log(isShifted("abcde", "cdeab")); // expected true
console.log(isShifted("abc", "acb")); // expected false

