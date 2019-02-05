function numWays(n,m) {
  const A = [];
  for (let i = 0; i < n; i++) {
    A.push([]);
    for (let j = 0; j < m; j++) {
      A[i].push(0);
    }
  }

  for (let i = 0; i < n; i++) {
    A[i][0] = 1;
  }

  for (let j = 0; j < m; j++) {
    A[0][j] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      A[i][j] = A[i - 1][j] + A[i][j - 1];
    }
  }

  const lastElement = A[A.length-1];
  return lastElement[lastElement.length-1];
}

console.log(numWays(2, 2)); // expected 2
console.log(numWays(5, 5)); // expected 70
