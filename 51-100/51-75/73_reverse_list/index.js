function reverse(list) {
  let prev = null;
  let current = list.head;
  while (current != null) {
    let tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }

  return prev;
}

const list = { head: { val: "1", next: { val: "2", next: { 
    val: "3", next: null } } 
  }
};

console.log(reverse(list));
