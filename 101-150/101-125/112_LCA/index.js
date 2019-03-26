class TreeNode {
  constructor(val, left=null,right=null) {
    this.left = left;
    this.right = right;
    this.parent = null;
    this.val = val; 
  }
}

function lca(root, a, b) {
  const depth = (node) => {
    let count = 0;
    while (node != null) {
      count++;
      node = node.parent;
    }
    return count;
  };

  const depthA = depth(a);
  const depthB = depth(b);

  if (depthA < depthB) {
    while (depthA < depthB) {
      b = b.parent;
      depthB--;
    }
  } else if (depthA > depthB) {
    while (depthA > depthB) {
      a = a.parent;
      depthA--;
    }
  }

  while (a != null && b != null && a.val !== b.val) {
    a = a.parent;
    b = b.parent;  
  }

  return (a.val === b.val) ? a : null;
}

