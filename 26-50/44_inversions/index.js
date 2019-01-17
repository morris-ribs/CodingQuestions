class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.counter = 0;
  }

  insert(val) {
    if (val < this.val && this.left) {
      return this.left.insert(val);
    } else if (val < this.val) {
      this.left = new TreeNode(val);
      this.left.counter = this.counter + 1;
      return this.left.counter;
    } 

    if (val > this.val && this.right) {
      return this.right.insert(val);
    } else {
      const counter = this.counter++;
      this.right = new TreeNode(val);
      return counter;
    }
  }
}

function insertOnTree() {

}

function outOfOrder(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  let count = 0;

  // insert tree root
  const root = new TreeNode(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    count += root.insert(num);
  }

  return count;
}

console.log(outOfOrder([2, 4, 1, 3, 5])); // expected 3
console.log(outOfOrder([5, 4, 3, 2, 1])); // expected 10
console.log(outOfOrder([4, 3, 1, 2, 5])); // expected 5
console.log(outOfOrder([3, 4, 1, 2, 5])); // expected 4