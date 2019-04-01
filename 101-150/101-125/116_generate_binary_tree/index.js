class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function generate() {
  const root = new Node(0);
  if (Math.random() < 0.5) {
    root.left = generate();
  }
  if (Math.random() < 0.5) {
    root.right = generate();
  }
  return root;
}

console.log(generate());