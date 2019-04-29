function swapEveryTwo(node) {
  let curr = node;
  while (!!curr && !!curr.next) {
    const aux = curr.val;
    curr.val = curr.next.val;
    curr.next.val = aux;
    curr = curr.next.next;
  }
  return node;
}

const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
console.log(swapEveryTwo(list));