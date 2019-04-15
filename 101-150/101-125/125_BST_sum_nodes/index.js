const nodes = [];

class BSTNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    nodes.push(this);
  }
}

function search(node, val) {
  if (node == null) {
    return null;
  }

  if (node.value === val) {
    return node;
  } else if (node.value < val) {
    return search(node.right, val);
  } else {
    return search(node.left, val);
  }
}

function twoSum(root, K) {
  for (let i = 0; i < nodes.length; i++) {
    const nodeOne = nodes[i];
    const nodeTwo = search(root, K - nodeOne.value);

    if (nodeTwo != null) {
      return { node1: nodeOne, node2: nodeTwo };
    }
  }

  return null;
}

console.log(twoSum(
  new BSTNode(10, new BSTNode(5), new BSTNode(15, new BSTNode(11), new BSTNode(15)))
  , 20)
);