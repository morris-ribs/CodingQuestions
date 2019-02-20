class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const PLUS = "+";
const MINUS = "-";
const TIMES = "*";
const DIVIDE = "/";
function evaluate(root) {
  switch(root.val) {
    case PLUS:
      return evaluate(root.left) + evaluate(root.right);
    case MINUS:
      return evaluate(root.left) - evaluate(root.right);
    case TIMES:
      return evaluate(root.left) * evaluate(root.right);
    case DIVIDE:
      return evaluate(root.left) / evaluate(root.right);
    default:
      return root.val;
  }
}

const leaf1 = new Node(3);
const leaf2 = new Node(2);
const leaf3 = new Node(4);
const leaf4 = new Node(5);

const intNode1 = new Node(PLUS, leaf1, leaf2);
const intNode2 = new Node(PLUS, leaf3, leaf4);
const root = new Node(TIMES, intNode1, intNode2);

console.log(evaluate(root)); // expected 45