var Heap = require("collections/heap");

class MaxHeap {
  constructor() {
    this.heap = new Heap([]);
    this.items = {};
  }

  push(item, priority) {
    this.heap.push(priority);
    this.items[priority] = item;
  }

  pop() {
    const k = this.heap.pop();
    return this.items[k];
  }
}

class Stack {
  constructor() {
    this.maxHeap = new MaxHeap();
  }

  push(item) {
    this.maxHeap.push(item, Date.now());
  }

  pop() {
    const item = this.maxHeap.pop();
    return item;
  }
}

const stackHeap = new Stack();
stackHeap.push(2);
stackHeap.push(8);
stackHeap.push(5);
stackHeap.push(6);
console.log(stackHeap.pop());