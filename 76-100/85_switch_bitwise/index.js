function switchBitwise(x, y, b) {
  return (x * b) | (y * (1 - b));
}

console.log(switchBitwise(12, 13, 0)); // expected 13
console.log(switchBitwise(12, 13, 1)); // expected 12