class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invert(node) {
  if (node == null) {
    return node;
  }

  const left = invert(node.left);
  const right = invert(node.right);

  node.left = right;
  node.right = left;
  return node;
}

const tree = new Node(
  "a", 
  new Node("b", new Node("d"), new Node("e")), 
  new Node("c", new Node("f"))
);

console.log(invert(tree));