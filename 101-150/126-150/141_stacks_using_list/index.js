class Stack {
  constructor() {
    this.size = 10;
    this.list = Array(this.size).fill(null);

    this.s0 = 0; // Grows up
    this.s1 = this.list.length / 2; // Grows up
    this.s2 = this.list.length - 1; // Grows down
  }

  pop(stackNumber) {
    if (stackNumber === 0) {
      this.s0--;
      return this.list[this.s0];
    }

    if (stackNumber === 1) {
      this.s1--;
      return this.list[this.s1];      
    }

    this.s2++;
    return this.list[this.s2];
  }

  isResizeNeeded() {
    return this.s0 === this.list.length / 2 || this.s1 > this.s2;
  }

  resize(size) {
    const prevList = this.list;
    const prevS0 = this.s0;
    const prevS1 = this.s1;
    const prevS2 = this.s2;


    this.size = size;
    this.list = Array(this.size).fill(null);

    this.s0 = 0; // Grows up
    this.s1 = this.list.length / 2; // Grows up
    this.s2 = this.list.length - 1; // Grows down

    let i = 0;
    while (i < prevS0) {
      push(prevList[i], 0);
    }

    i = prevList.length / 2;
    while (i < prevS1) {
      push(prevList[i], 1);
    }

    i = prevList.length -1;
    while (i > prevS2) {
      push(prevList[i], 2);
    }
  }

  push(item, stackNumber) {
    if (stackNumber === 0) {
      this.list[this.s0] = item;
      this.s0++;      
    } else if (stackNumber === 1) {
      this.list[this.s1] = item;
      this.s1++;      
    } else {
      this.list[this.s2] = item;
      this.s2--;
    }

    if (isResizeNeeded()) {
      this.resize(this.size * 2);
    }
  }
}