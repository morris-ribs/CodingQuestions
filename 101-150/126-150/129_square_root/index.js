function squareRoot(N, error=0.00001) {
  let lo = 0.0;
  let hi = N;

  let guess = (lo + hi) / 2.0;

  while (Math.abs(Math.pow(guess, 2)-N) >= error) {
    if (Math.pow(guess, 2) > N) {
      hi = guess;
    } else {
      lo = guess;  
    }

    guess = (lo + hi) / 2.0;
  }

  return guess;
}

console.log(squareRoot(9)); // expected 3