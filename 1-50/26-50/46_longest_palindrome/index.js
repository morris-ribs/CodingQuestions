function longestPalindrome(s) {
  if (s.length === 0) {
    return "";
  }

  longest = s[0];
  let A = [];
  for (let i = 0; i < s.length; i++) {
    A.push([]);
    // Set all substrings of length 1 to be true
    for (let j = 0; j < s.length; j++) {
      A[i].push(true);
    }
  }

  // Try all substrings of length 2
  for (let i = 0; i < (s.length - 1); i++) {
    A[i][i + 1] = s[i] == s[i + 1]
  }

  let i = 0; 
  let k = 3;
  while (k <= s.length) {
    while (i < (s.length - k + 1)) {
      const j = i + k - 1;
      A[i][j] = A[i + 1][j - 1] && s[i] == s[j];
      // Update longest if necessary
      const subst = s.substring(i,j + 1);
      if (A[i][j] && subst.length > longest.length) {
        longest = s.substring(i,j + 1);
      }
      i += 1;
    }
    k += 1;
    i = 0;
  }
  return longest;
}

console.log(longestPalindrome("aabcdcb"));
console.log(longestPalindrome("bananas"));