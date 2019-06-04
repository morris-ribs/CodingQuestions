function isPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    const ind = (s.length-i-1);
    if (s[i] !== s[ind]) {
      return false;
    }
  }
  return true;
}

function splitIntoPalindromes(s="") {
  const A = [];
  for (let i = 0; i < s.length; i++) {
    A.push([]);
    for (let j = 0; j < s.length; j++) {
      A[i].push(null);  
    }
  }

  // Set all substrings of length 1 to be true  
  for (let i = 0; i < s.length; i++) {
    A[i][i] = true;
  }

  // Try all substrings of length 2
  for (let i = 0; i < s.length; i++) {
    A[i][i+1] = (s[i] === s[i+1]);
  }
  let j = 0;
  let k = 3;
  while (k <= s.length) {
    while (j < (s.length - k + 1)) {
      const aux = j + k - 1;
      A[j][aux] = A[j+1][aux-1] && s[j] === s[aux];
      j++;
    }
    k++;
    j = 0;
  }

  const P = [];
  for (let i = 0; i < (s.length + 1); i++) {
    P.push(null);
  }
  P[0] = [];
  for (let i = 0; i < P.length; i++) {
    for (let j = 0; j < i; j++) {
      const matrix_i = (i-1);
      if (!!A[j][matrix_i]) {
        if (P[i] == null || (P[j].length + 1) < P[i].length) {
          const sl = s.slice(j,i);
          P[i] = [...P[j]];
          if (isPalindrome(sl)) {
            P[i].push(sl);
          }
        }
      }
    }
  }
  return P[(P.length-1)];
}

console.log(splitIntoPalindromes("racecarannakayak")); // expected ["racecar", "anna", "kayak"]
console.log(splitIntoPalindromes("abc")); // expected ["a", "b", "c"]