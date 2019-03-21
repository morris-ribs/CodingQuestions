class Node {
  constructor(val,left=null,right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function printLevelOrder(root) {
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.pop();
    if (node.left != null) {
      queue.unshift(node.left);
    }
    if (node.right != null) {
      queue.unshift(node.right);
    }
    console.log(node.val);
  }
}

const root = new Node(1, new Node(2), new Node(3, new Node(4), new Node(5)));
printLevelOrder(root);
