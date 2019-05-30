class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

function rotate(head, k) {
  let fast = head;
  let slow = head;

  let i = 0;
  while (i < k) {
    i++;
    fast = fast.next;
  }

  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }

  const newHead = slow.next;
  fast.next = head;
  slow.next = null;
  return newHead;
}

const list = new Node(7, new Node(7, new Node(3, new Node(5))));
console.log(rotate(list, 2)); // expected 3 -> 5 -> 7 -> 7

const list2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(rotate(list2, 3)); // expected 3 -> 4 -> 5 -> 1 -> 2

const list3 = new Node("a", new Node("b", new Node("c", new Node("d", new Node("e")))));
console.log(rotate(list3, 2)); // expected d -> e -> a -> b -> c