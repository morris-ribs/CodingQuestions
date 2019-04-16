class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

function add(node0, node1, carry=0) {
  if (!node0 && !node1 && !carry) {
    return null;
  }

  const node0Val = (!!node0) ? node0.val : 0;
  const node1Val = (!!node1) ? node1.val : 0;

  const total = node0Val + node1Val + carry;

  const node0Next = (!!node0) ? node0.next : null;
  const node1Next = (!!node1) ? node1.next : null;
  const carryNext = (total >= 10) ? 1 : 0;

  return new Node(total % 10, add(node0Next, node1Next, carryNext));
}

const list1 = new Node(9, new Node(9));
const list2 = new Node(5, new Node(2));
console.log(add(list1, list2)); // expected 4 -> 2 -> 1