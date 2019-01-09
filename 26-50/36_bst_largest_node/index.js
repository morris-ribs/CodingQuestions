class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else {
      this.right = new Node(data);
    }
  }
}

function findSecondLargestNode(largestNode, secondLargestNode = null) {
  if (largestNode == null) {
    return null;
  }
  
  if (largestNode.right == null) {
    return secondLargestNode;
  }

  return findSecondLargestNode(largestNode.right, largestNode);
}

// initialize tree
//         10
//        / \
//       5   15
//      /     \
//     0       20
//    / \
//  -5   3
const tree = new Node(10);
tree.insert(5);
tree.insert(15);
tree.insert(0);
tree.insert(20);
tree.insert(-5);
tree.insert(3);

console.log(findSecondLargestNode(tree));