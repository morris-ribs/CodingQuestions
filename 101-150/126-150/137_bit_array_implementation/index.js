const BITSPERUNIT = 32;

class BitArray {
  init(size) {
    this._list = []
    let i = 0;
    while (i < Math.ceil(size / BITSPERUNIT)) {
      this._list.push(0);
      i++;
    }
    this._size = size;
  }

  get(i) {
    if (i < 0 || i >= this.size) {
      console.log("Index out of bounds");
      return;
    }
    const listIdx = i / BITSPERUNIT;
    const intIdx = i % BITSPERUNIT;

    return (this._list[listIdx] >> intIdx) & 1;
  }

  set(i, val) {
    if (i < 0 || i >= this.size) {
      console.log("Index out of bounds");
      return;
    }
    const listIdx = i / BITSPERUNIT;
    const intIdx = i % BITSPERUNIT;
    this._list[listIdx] ^= (-val ^ this._list[listIdx]) & (1 << intIdx);
  }
}

const bitArray = new BitArray();
bitArray.init(10);
console.log(bitArray.get(2)); // expected 0
bitArray.set(5, 1);
bitArray.set(7, 1);
bitArray.set(4, 1);
console.log(bitArray.get(0)); // expected 0
console.log(bitArray.get(1)); // expected 0
console.log(bitArray.get(2)); // expected 0
console.log(bitArray.get(3)); // expected 0
console.log(bitArray.get(4)); // expected 1
console.log(bitArray.get(5)); // expected 1
console.log(bitArray.get(6)); // expected 0
console.log(bitArray.get(7)); // expected 1
console.log(bitArray.get(8)); // expected 0
console.log(bitArray.get(9)); // expected 0