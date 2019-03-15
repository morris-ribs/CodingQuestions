class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function incrementDepth(nodeDepthTuple) {
  return { node: nodeDepthTuple.node, depth: nodeDepthTuple.depth + 1 };
}

function deepest(node) {
  if (node != null && node.left == null && node.right == null) {
    return { node: node, depth: 1 }; // leaf and its depth
  }

  // Then the deepest node is on the right subtree
  if (node.left == null) { 
    return incrementDepth(deepest(node.right));
  }

  // Then the deepest node is on the left subtree
  if (node.right == null) {
    return incrementDepth(deepest(node.left));
  }

  const deepestLeft = deepest(node.left);
  const deepestRight = deepest(node.right);
  const deepestNode = (deepestLeft.depth > deepestRight.depth) ? deepestLeft : deepestRight;
  return incrementDepth(deepestNode);
}

const tree = new Node("a", new Node("b", new Node("d")), new Node("c"));
console.log(deepest(tree));
