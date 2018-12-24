class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.isUnival = null;
  }
}

module.exports = { Node };