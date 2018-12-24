/*A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
  */
const T = require('./node');
const Node = T.Node;

function univaltree(node) {
    // it is a leaf...
    if (node.left == null && node.right == null) {
        node.isUnival = true;
        return 1;
    }
    let total = 0;
    
    if (node.left != null) {
        if (node.left.isUnival == null) {
            total += univaltree(node.left);
        }

        node.isUnival = node.left.isUnival && (node.left.val === node.val);
    }
    if (node.right != null) {
        if (node.right.isUnival == null) {
            total += univaltree(node.right);
        }

        node.isUnival = node.isUnival && node.right.isUnival && (node.right.val === node.val);
    }
    if (node.isUnival) {
        total++;
    }
    return total;
}

function buildtree() {    
    return new Node(0, 
        new Node(1),
        new Node(0,
            new Node(1, new Node(1), new Node(1)), 
            new Node(0)
        )
    );
}

const root = buildtree();
console.log(univaltree(root)); // expected 5

module.exports = univaltree;