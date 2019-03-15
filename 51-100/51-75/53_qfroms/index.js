// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.data = new Stack();
    this.aux = new Stack();
  }

  add(record) {
    // empty data stack into aux stack 
    while(this.data.peek() != null) {
      this.aux.push(this.data.pop());
    }
    this.aux.push(record);

    // retransfer aux stack into data stack
    while(this.aux.peek() != null) {
      this.data.push(this.aux.pop());
    }
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data.peek();
  }
}

module.exports = Queue;

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());  // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2