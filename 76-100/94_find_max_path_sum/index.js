class Node {  
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSum(root) {
  const helper = (root) => {
    if (root == null) {
      return { maxSum: -Infinity, rootPath: 0 };
    }

    const leftInfo = helper(root.left);
    const rightInfo = helper(root.right);

    // Calculates the maximum path through the root
    const rootMaxSum = Math.max(0, leftInfo.rootPath) + root.val + Math.max(0, rightInfo.rootPath);

    // Find the maximum path, including or excluding the root
    const maxSum = Math.max(leftInfo.maxSum, rootMaxSum, rightInfo.maxSum);

    // Find the maximum path including and ending at the root
    const rootPath = Math.max(leftInfo.rootPath, rightInfo.rootPath, 0) + root.val;

    return { maxSum: maxSum, rootPath: rootPath };
  };

  // Return only the maximum path
  return helper(root).maxSum;
}

