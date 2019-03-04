function divide(x,y) {
  if (y === 0) {
    return "Division by Zero!!!";
  }

  let quotient = 0;
  let power = 32; // Assume 32-bit integer
  let yPower = y << 32; // Initial y^d value is y^32
  let remainder = x;
  while (remainder >= y) {
    while (yPower > remainder) {
      yPower = (yPower << 1);
      power--;
    }
    quotient += (1 << power);
    remainder -= yPower;
  }

  return quotient;
}

console.log(divide(10, 2));
console.log(divide(10, 3));
console.log(divide(121, 11));