function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function primesum(a) {
  for (let i = 2; i <= a / 2; i++) {
    if (isPrime(i) && isPrime(a - i)) {
      const output = [];
      output.push(i);
      output.push(a - i);
      return output;
    }
  }

  return null;
}

console.log(primesum(4));
