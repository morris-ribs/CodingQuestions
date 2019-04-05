function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

function longestPalindromicSubsequence(s) {
  if (s === reverseString(s)) {
    return s.length;
  }

  const N = s.length;
  const A = [];
  for (let i = 0; i < N; i++) {
    A.push([]);
    for (let j = 0; j < N; j++) {
      A[i].push(0);
    }
  }

  for (let i = (N-1); i >= 0; i--) {
    A[i][i] = 1;
    for (let j = (i+1); j < N; j++) {
      if (s[i] === s[j]) {
        A[i][j] = 2 + A[i + 1][j - 1];
      } else {
        A[i][j] = Math.max(A[i + 1][j], A[i][j - 1]);
      }
    }
  }

  return A[0][N - 1];
}

function kPalindrome(s, k) {
  return (s.length - longestPalindromicSubsequence(s)) <= k;
}

console.log(kPalindrome("waterrfetawx", 2)); // expected true, as you could delete f and x to get 'waterretaw'