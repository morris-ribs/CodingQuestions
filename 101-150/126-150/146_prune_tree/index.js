class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function prune(root) {
  if (root == null) {
    return root;
  }

  root.left = prune(root.left);
  root.right = prune(root.right);

  if (root.left == null && root.right == null && root.val === 0) {
    return null;
  }
  return root;
}

const root = new Node(0,
  new Node(1),
  new Node(0,
    new Node(1,
      new Node(0),
      new Node(0)
    ),
    new Node(0)
  )  
);

console.log(prune(root));