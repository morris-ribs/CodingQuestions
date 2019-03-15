class TreeNode {
  constructor(key, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.key = key;
  }
}

function isBst(root) {
  function isBstHelper(root, minKey, maxKey) {
    if (root == null) {
      return true;
    }

    if (root.key <= minKey || root.key >= maxKey) {
      return false;
    }

    return isBstHelper(root.left, minKey, root.key) &&
      isBstHelper(root.right, root.key, maxKey);
  }

  return isBstHelper(root, -Infinity, Infinity);
}

/*This sould give false:
      2
     / \
    1   3
     \
      4
 */

const invalidTree = new TreeNode(2, 
  new TreeNode(1, null, new TreeNode(4)),
  new TreeNode(3)
);

console.log(isBst(invalidTree));

const validTree = new TreeNode(2, 
  new TreeNode(1),
  new TreeNode(3, null, new TreeNode(4))
);

console.log(isBst(validTree));