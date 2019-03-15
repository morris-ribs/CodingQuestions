function power(x, y) {
  if (y < 0) {
    return power(1/x, y);
  } 
  if (y === 0) {
    return 1;
  }

  if (y === 1) {
    return x;
  }

  if (y % 2 === 0) {
    return power(x*x, Math.floor(y/2));
  }

  // y is odd
  return x * power(x*x, Math.floor(y/2));
}

console.log(power(2, 10)); // expected 1024