
class Node {
  constructor(key, val){
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // dummy nodes
    this.head = new Node(null, 'head');
    this.tail = new Node(null, 'tail');
    // set up head <-> tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  getHead() {
    return this.head.next;
  }
  
  getTail() {
    return this.tail.prev;
  }

  add(node) {
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
  }
  
  remove(node) {
    const prev = node.prev;
    const nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev;
  }
}

class LRUCache {
  constructor(n) {
    this.n = n;
    this.dict = {};
    this.list = new LinkedList();
  }

  set(key, val) {
    if (typeof this.dict[key] !== "undefined") {
      this.dict[key].delete();
    }
    const n = new Node(key, val);
    this.list.add(n);
    this.dict[key] = n;
    if (this.dict.length > this.n) {
      const head = this.list.getHead();
      this.list.remove(head);
      delete this.dict[head.key];
    }
  }

  get(key) {
    if (typeof this.dict[key] !== "undefined") {
      const n = this.dict[key];
      // bump to the back of the list by removing and adding the node
      this.list.remove(n);
      this.list.add(n);
      return n.val;
    }
  }
}