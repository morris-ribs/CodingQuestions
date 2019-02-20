class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node != null) {
        count++;
        node = node.next;
    }
    return count;
  }
    getAt(index) {
      let counter = 0;
      let node = this.head;
      while (node != null) {
          if (counter === index) {
              return node;
          }
          counter++;
          node = node.next;
      }

      return null;
  }

  insertAt(data, index) {
    const nodeToInsert = new Node(data);
    if (this.head == null) {
        this.head = nodeToInsert;
        return;
    }

    if (index === 0) {
        nodeToInsert.next = this.head;
        this.head = nodeToInsert;
        return;
    }

    let previousNode = this.getAt(index-1);
    if (previousNode == null) {
        previousNode = this.getLast();
    }
    
    nodeToInsert.next = previousNode.next;
    previousNode.next = nodeToInsert;
  }

  insertLast(data) {
    this.insertAt(data, this.size());
  }
}

function findNode(largerList, smallerList, diffSizes) {
  let index = 0;
  let nodeLargerList = largerList.head;
  while (index < diffSizes) {
    index++;
    nodeLargerList = nodeLargerList.next;
  }

  let nodeSmallerList = smallerList.head;
  while (nodeLargerList != null && nodeLargerList.data !== nodeSmallerList.data) {
    nodeLargerList = nodeLargerList.next;
    nodeSmallerList = nodeSmallerList.next;
  }

  return nodeLargerList;
}

function lists_intersection(l1, l2) {
  let largerList, smallerList, diffSizes;
  const size1 = l1.size();
  const size2 = l2.size();

  if (size1 >= size2) {
    largerList = l1;
    smallerList = l2;
    diffSizes = size1 - size2;
  } else {
    largerList = l1;
    smallerList = l2;
    diffSizes = size2 - size1;
  }

  return findNode(largerList, smallerList, diffSizes);
}

const l = new LinkedList();
l.insertLast(3);
l.insertLast(7);
l.insertLast(8);
l.insertLast(10);

const l2 = new LinkedList();
l2.insertLast(99);
l2.insertLast(1);
l2.insertLast(8);
l2.insertLast(10);

console.log(lists_intersection(l, l2));