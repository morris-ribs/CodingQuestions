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

  path() {
    const path = [];
    let current = this;
    while (!!current) {
      path.unshift(current.value);
      current = current.parent;
    }

    return path;
  }
}


function findLeaves(node) {
  const leaves = [];
  const queue = [];
  queue.push(node);
  while (queue.length > 0) {
    node = queue.pop();
    if (node.left == null && node.right == null) {
      leaves.push(node.path());
      continue;
    }

    if (!!node.right) {
      queue.push(node.right);
    }

    if (!!node.left) {
      queue.push(node.left);
    }
  }

  return leaves;
}

const root = new BSTNode(
  value=1,
  left=new BSTNode(2),
  right=new BSTNode(3, new BSTNode(4), new BSTNode(5))
);

console.log(findLeaves(root)); // expected [[1, 2], [1, 3, 4], [1, 3, 5]]