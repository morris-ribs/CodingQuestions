/**
 * There are two cases: either the longest path goes through the root or it doesn't.

If it doesn't, then we only need to look at the longest path of any of the current node's children. If it does, then the longest path must come from the paths made by combining the two highest childrens' heights.

What we'll do is recursively look at each child's height and longest path, and keep track of the longest path we've seen so far. At the end we select the largest between the longest subpath, or the two largest heights that can be combined to make a new larger path.

The base case here is when we look at a node with no children, in which case the longest path should be 0.
 */
class Node {
  constructor(val, children=[]) {
    this.val = val;
    this.children = children;
  }
}

function longestHeightAndPath(root) {
  let longestPathSoFar = -Infinity;
  let highest = 0;
  let secondHighest = 0;

  for (let i = 0; i < root.children.length; i++) {
    const childNode = root.children[i];
    const obj = longestHeightAndPath(childNode.child);
    longestPathSoFar = Math.max(longestPathSoFar, obj.path);
    if ((obj.height + childNode.height) > highest) {
      secondHighest = highest;
      highest = (obj.height + childNode.height);
    } else if((obj.height + childNode.height) > secondHighest) {
      secondHighest = (obj.height + childNode.height);
    }
  }
  return { height: highest, path: Math.max(longestPathSoFar, (highest + secondHighest)) };
}

function longestPath(root) {
  const result = longestHeightAndPath(root);
  return result.path;
}

/*
   a
  /|\
 b c d
    / \
   e   f
  / \
 g   h
 a-b: 3, a-c: 5, a-d: 8, d-e: 2, d-f: 4, e-g: 1, e-h: 1
*/

const nodeH = new Node("h");
const nodeG = new Node("g");
const nodeF = new Node("f");
const nodeE = new Node("e", [ { height: 1, child: nodeG }, { height: 1, child: nodeH } ]);
const nodeD = new Node("d", [ { height: 2, child: nodeE }, { height: 4, child: nodeF } ]);
const nodeC = new Node("c");
const nodeB = new Node("b");
const root = new Node("a", [ { height: 3, child: nodeB }, { height: 5, child: nodeC }, { height: 8, child: nodeD } ]);

console.log(longestPath(root)); // expected 17