const NUM_BITS = 32;

function reverseBits(n) {
  let reversedNum = 0;
  let i = 0;
  while (i < NUM_BITS) {
    const j = n >> i & 1;
    reversedNum += j << (NUM_BITS - i - 1);
    i++;
  }
  return reversedNum.toString(2);
}

const bin = 0b11110000111100001111000011110000;
console.log(reverseBits(bin)); // 1111000011110000111100001111