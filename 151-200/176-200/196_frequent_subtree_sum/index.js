class Node {
  constructor(val, left=null,right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function frequentSubtreeSum(root) {
  if (root == null) {
    return null;
  }
  const counter = {};
  const getSubtreeSum = (node) => {
    if (node == null) {
      return 0;
    }
    const s = node.val + getSubtreeSum(node.left) + getSubtreeSum(node.right);
    if (typeof counter[s] === "undefined") {
      counter[s] = 0;
    }
    counter[s]++;
    return s;
  };
  getSubtreeSum(root);
  let mostCommon = -1;
  Object.keys(counter).map(s => {
    if (counter[s] > mostCommon) {
      mostCommon = s;
    }
  });
  return mostCommon;
}

const tree = new Node(5, new Node(2), new Node(-5));
console.log(frequentSubtreeSum(tree)); // expected 2