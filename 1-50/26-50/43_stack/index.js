class Stack {
  constructor() {
    this.stack = [];
    this.maxes = [];
  }

  max() {
    return (this.maxes.length > 0) ? this.maxes[this.maxes.length-1] : null;
  }

  push(val) {
    this.stack.push(val);
    if (this.maxes.length > 0) {
      this.maxes.push(Math.max(val, this.maxes[this.maxes.length - 1]));
    } else {
      this.maxes.push(val);
    }
  }

  pop() {
    if (this.maxes.length > 0) {
      this.maxes.pop();
    }
    return this.stack.pop();
  }
}

const stack = new Stack();
stack.push(5);
stack.push(1);
stack.push(2);
stack.push(26);
stack.push(8);
stack.push(3);
console.log(stack.max()); // expected 26
stack.pop();
stack.pop();
stack.pop();
console.log(stack.max()); // expected 5
