class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

function largestBstSubtree(root) {
  let maxSize = 0;
  let maxRoot = null;

  const helper = (root) => {
    // Returns a tuple of (size, min_key, max_key) of the subtree.
    let result = { size: 0, minKey: Infinity, maxKey: -Infinity };

    if (root == null) {
      return result;
    }

    let left = helper(root.left);
    let right = helper(root.right);

    if (root.key > left["maxKey"] && root.key < right["minKey"]) {
      const size = left["size"] + right["size"] + 1;
      if (size > maxSize) {
        maxSize = size;
        maxRoot = root;
      }
      result = Object.assign({}, 
        { size: size, minKey: Math.min(root.key, left["minKey"]), maxKey: Math.max(root.key, right["maxKey"])}
      );
    }
    return result;
  };
  helper(root);
  return { tree: maxRoot, size: maxSize };
}


const tree = new Node(
  10, 
  new Node(5, new Node(0, new Node(-5), new Node(3))), 
  new Node(15, null, new Node(20))
);

console.log(largestBstSubtree(tree));