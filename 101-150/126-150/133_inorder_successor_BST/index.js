class Node {
  constructor(val, left=null, right=null, parent=null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

function leftMost(node) {
  while (node.left != null) {
    node = node.left;
  }
  return node;
}

function inOrderSuccessor(node) {
  if (node.right != null) {
    return leftMost(node.right);
  }

  let parent = node.parent;
  while (parent != null && parent.left != node){// parent.left != null && parent.left.val != node.val) {
    parent = parent.parent;
    node = parent;
  }

  return parent;
}

/*
   10
  /  \
 5    30
     /  \
   22    35
*/

const node10 = new Node(10);
const node5 = new Node(5, null, null, node10);
const node30 = new Node(30, null, null, node10);
const node22 = new Node(22, null, null, node30);
const node35 = new Node(35, null, null, node30);
node30.left = node22;
node30.right = node35;

console.log(inOrderSuccessor(node22)); // expected node30