class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  removeElement(k) {
    let node = this.head;
    let current_k = this.head;
    let previous_k = null;

    for (let index = 1; index < k; index++) {
      if (node == null) {
        return null;
      }
      node = node.next;
    }

    while (node.next != null) {
      previous_k = current_k;
      current_k = current_k.next;
      node = node.next;
    }

    if (previous_k != null) {
      previous_k.next = current_k.next; 
      current_k.next = null;
    }
    return current_k;
  }
}


function initializeList(N) {
  let head = new Node(1);
  let current = head;
  for (let index = 2; index <= N; index++) {
    let node = new Node(index);
    current.next = node;
    current = node;
  }
  return new LinkedList(head);
}

const list = initializeList(1000);
console.log(list.removeElement(3));