function partition(s) {
  let k = s.reduce((sum, num) => sum + num);
  if (k%2 !== 0) {
    return false;
  }

  let kOverTwo = Math.floor(k/2);
  const A = [];
  for (let i = 0; i <= kOverTwo; i++) {
    A.push([]);
    for (let j = 0; j <= s.length; j++) {
      A[i].push(false);
    }
  }

  for (let j = 0; j <= s.length; j++) {
    A[0][j] = true;
  }

  for (let i = 1; i <= kOverTwo; i++) {
    A[i][0] = false;
  }

  for (let i = 1; i <= kOverTwo; i++) {
    for (let j = 1; j <= s.length; j++) {
      const usingLast = (i - s[j-1]);
      if (usingLast >= 0) {
        A[i][j] = (A[i][j - 1] || A[usingLast][j - 1]);
      } else {
        A[i][j] = A[i][j - 1];
      }
    }
  }
  const result = A[A.length-1];
  return result[result.length-1];
}

console.log(partition([15, 5, 20, 10, 35, 15, 10])); // expected true
console.log(partition([15, 5, 20, 10, 35])); // expected false
