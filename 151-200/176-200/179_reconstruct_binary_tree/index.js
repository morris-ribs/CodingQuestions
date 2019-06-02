class BSTNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function reconstruct(postorder=[]) {
  if (postorder.length === 0) {
    return null;
  }

  if (postorder.length === 1) {
    return new BSTNode(postorder[0]);
  }

  const max = (postorder.length - 1);
  let rootVal = postorder[max];
  const root = new BSTNode(rootVal);
  for (let i = 0; i < max; i++) {
    const val = postorder[i];
    if (val > rootVal) {
      const leftSubTree = reconstruct(postorder.slice(0, i));
      const rightSubTree = reconstruct(postorder.slice(i, max));
      root.left = leftSubTree;
      root.right = rightSubTree;
      return root;
    }
  }
  leftSubTree = reconstruct(postorder.slice(0, max));
  root.left = leftSubTree;
  return root;
}

const tree = reconstruct([2, 4, 3, 8, 7, 5]);
console.log(tree.val);
console.log(tree.left);
console.log(tree.right);