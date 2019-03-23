function swapBits(x) {
  return (x & 0b10101010) >> 1 | (x & 0b01010101) << 1;
}

console.log(swapBits(10101010)); // expected 01010101
console.log(swapBits(11100010)); // expected 11010001
