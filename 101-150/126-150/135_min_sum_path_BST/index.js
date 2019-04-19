class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function _minSumPath(node) {
  if (node != null) {
    const leftList = _minSumPath(node.left);
    const rightList = _minSumPath(node.right);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumLeft = leftList.reduce(reducer, 0);
    const sumRight = rightList.reduce(reducer, 0);
    const minList = (sumLeft <= sumRight) && leftList.length > 0 ? leftList : rightList;
    minList.push(node.val);
    return minList;
  }

  return [];
}

function minSumPath(node) {
  return _minSumPath(node).reverse();
}

/*
  10
 /  \
5    5
 \     \
   2    1
       /
     -1
*/
const tree = new Node(10, new Node(5, null, new Node(2)), new Node(5, null, new Node(1, new Node(-1))));
console.log(minSumPath(tree)); // expected [10, 5, 1, -1], which has sum 15.