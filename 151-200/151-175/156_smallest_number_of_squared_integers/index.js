function numSquares(n = 0) {
  if (n === 0) {
    return 0;
  }

  const cache = [];
  cache[0] = 0;

  for (let i = 1; i < (n+1); i++) {
    cache[i] = Infinity;
    let j = 1;
    while (j*j <= i) {
      cache[i] = Math.min(cache[i], cache[i-(j*j)] + 1);
      j++;
    }
  }
  return cache[n];
}

console.log(numSquares(13)); // expected 2
console.log(numSquares(27)); // expected 3