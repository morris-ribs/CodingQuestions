function sumOfDigits(N) {
  let currentSum = 0;
  while (N > 0) {
    currentSum += N % 10;
    N = Math.floor(N / 10);
  }

  return currentSum;
}

function perfect(N) {
  let i = 0, current = 0;
  while (current < N) {
    i++;
    if (sumOfDigits(i) === 10) {
      current++;
    }
  }
  return i;
}

console.log(perfect(1)); // expected 19
console.log(perfect(2)); // expected 28