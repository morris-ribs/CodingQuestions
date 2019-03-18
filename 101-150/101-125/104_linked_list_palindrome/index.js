class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function getValues(node) {
  const result = [];
  while (!!node) {
    result.push(node.val);
    node = node.next;
  }

  return result;
}

function isPalindrome(node) {
  const values = getValues(node);
  const length = values.length;
  for (let i = 0; i < length; i++) {
    const element = values[i];
    const elementToCompareIdx = (length - i - 1);
    const elementToCompare = values[elementToCompareIdx];
    if (element !== elementToCompare) {
      return false;
    }
  }

  return true;
}

//1 -> 4 -> 3 -> 4 -> 1 returns true
const trueList = new Node(1, new Node(4, new Node(3, new Node(4, new Node(1)))));
console.log(isPalindrome(trueList));

//1 -> 4  returns false
const falseList = new Node(1, new Node(4));
console.log(isPalindrome(falseList));