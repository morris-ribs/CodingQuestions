const T = require('./tree');
const Node = T.Node;
const Tree = T.Tree;

const tree = new Tree(10);
const node1 = new Node(5);
tree.insert(node1);
const node2 = new Node(15);
tree.insert(node2);

const node3 = new Node(0);
tree.insert(node3);
tree.insert(new Node(20));
tree.insert(new Node(-5));
tree.insert(new Node(3));

// console.log(node1.lock()); // expected true
// console.log(node3.lock()); // expected false
// console.log(tree.root.lock()); // expected false
// console.log(node1.isLocked()); // expected true
// console.log(node3.isLocked()); // expected false
// console.log(node1.unlock()); // expected true
// console.log(node1.isLocked()); // expected false
// console.log(node3.isLocked()); // expected false