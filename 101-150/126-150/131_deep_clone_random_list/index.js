class Node {
  constructor(val, next=null, random=null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function double(node) {
  const root = node;
  while (node != null) {
    const copy = new Node(node.val);
    const next = node.next;

    node.next = copy;
    copy.next = next;
    node = next;
  }
  return root;
}

function setRandomPointers(node) {
  while (node != null) {
    const cloneMatch = node.next;
    cloneMatch.random = node.random.next;

    node = node.next.next;
  }
}

function clone(node) {
  node = double(node);
  setRandomPointers(node);

  const cloneHead = node.next;

  while (node != null) {
    const cloneMatch = node.next;

    if (cloneMatch.next != null) {
      node.next = node.next.next;
      cloneMatch.next = cloneMatch.next.next;
    } else { 
      node.next = node.next.next;
      cloneMatch.next = null;
    }
    node = node.next;
  }
  return cloneHead;
}
