class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeSortedSinglyLinkedLists(lists) {
  const newHead = new Node(-1);
  let current = newHead; //  dummy head
  // Combine all nodes into an array
  const arr = [];
  for (let i = 0; i < lists.length; i ++) {
    const head = lists[i];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }
  
  const sorted = arr.sort();
  for (let i = 0; i < sorted.length; i ++) {
    const val = sorted[i];    
    current.next = new Node(val);
    current = current.next;
  }

  return newHead.next;
}