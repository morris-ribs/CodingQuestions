class Node {  
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function minimumLevelSum(root) {
  let queue = [];
  queue.push({ node: root, level: 0 });
  const levelToSum = {};

  while (queue.length > 0) {
    const obj = queue.splice(0, 1)[0];
    levelToSum[obj.level] = (levelToSum[obj.level] || 0) + obj.node.val;

    if (obj.node.right != null) {
      queue.push({node: obj.node.right, level: obj.level + 1});
    }

    if (obj.node.left != null) {
      queue.push({node: obj.node.left, level: obj.level + 1});
    }
  }

  let result = -1;
  let min = Infinity;
  Object.keys(levelToSum).map(level => {
    if (levelToSum[level] < min) {
      min = levelToSum[level];
      result = level;
    }
  });
  return result;
}

/*
         1
       /  \
     -2   -3            (level 1 is the minimum)
         /  \
        4   -5
*/
const root1 = new Node(
  1,
  new Node(-2),
  new Node(-3, new Node(4), new Node(-5))
);
console.log(minimumLevelSum(root1));

/*
          1
      /       \
    2          3
  /  \          \
 4    5          6
       \       /   \
       -1   -7     -8   (level 3 is the minimum)
*/

const root2 = new Node(
    1,
    new Node(2, new Node(4), new Node(5, null, new Node(-1))),
    new Node(
        3,
        null,
        new Node(6, new Node(-7), new Node(-8))
    )
)
console.log(minimumLevelSum(root2));