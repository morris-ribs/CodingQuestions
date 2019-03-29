class BSTNode {
  constructor(value, left=null, right=null) {
    this.parent = null;
    this.value = value;
    this.left = left;
    this.right = right;
    if (!!left) {
      left.parent = this;
    }
    if (!!right) {
      right.parent = this;
    }
  }
}

function subTree(s, t) {
  const preorder = (root) => {
    const traversal = [];
    const stack = [root];
    while (stack.length > 0) {
      const n = stack.pop();
      if (n == null) {
        traversal.push('.'); // null marker
        continue;
      } else {
        traversal.push(n.val.toString());
      }
      stack.push(n.right);
      stack.push(n.left);
    }
    return ',' + traversal.join(',') + ','; // wrap result
  };

  const sStr = preorder(s);
  const tStr = preorder(t);
  return sStr.findIndex(str => str === tStr) >= 0;
}
