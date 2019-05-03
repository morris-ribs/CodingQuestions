/**
 * This problem has many different possible tradeoffs you could make:

    - Have no pre-processing step and compute sum on the fly.
    - Pre-process the sum of every i, j combination s.t. i < j and store it in a list.
    - Create a segment tree representing sums of many segments of the list.
    
    Let's explore the segment tree since it has a good balance of pre-processing time and query time.

    Basically, a segment tree's nodes would have these fields:

    - startInd and endInd which represents the segment in the list this node represents.
    - val, which represents the sum of this segment.
    - left, for the left node.
    - right, for the right node.
    
    With these fields we can see how we might query for a segment.

    - If the node's segment is equivalent to the query, return its val
    - Otherwise, query for the left node if it encloses the starting index and add it to our result.
    - Also query for the right node if it encloses the ending index and add it to our result.
 */
class Node {
  constructor(val, startInd, endInd, left=null, right=null) {
    this.val = val;
    this.startInd = startInd;
    this.endInd = endInd;
    this.left = left;
    this.right = right;
  }

  interval() {
    return { start: this.startInd, end: this.endInd };
  }
}

function _makeSegmentTree(lst, startInd, endInd) {
  if (startInd === endInd) {
    const val = lst[0];
    return new Node(val, startInd, endInd);
  }

  const mid = Math.floor(lst.length/2);
  const left = _makeSegmentTree(lst.slice(0,mid), startInd, startInd + mid - 1);
  const right = _makeSegmentTree(lst.slice(mid), startInd + mid, endInd);

  const rootVal = left.val + right.val;
  return new Node(rootVal, startInd, endInd, left, right);
}

function makeSegmentTree(lst) {
  return _makeSegmentTree(lst, 0, lst.length-1);
}

function query(node, startInd, endInd) {
  if (node.startInd === startInd && node.endInd === endInd) {
    return node.val;
  }

  let result = 0;
  const left = node.left;
  const right = node.right;

  if (left.startInd <= startInd && startInd <= left.endInd) {
    result += query(left, startInd, Math.min(endInd, left.endInd));
  }

  if (right.startInd <= endInd && endInd <= right.endInd) {
    result += query(right, Math.max(startInd, right.startInd), endInd);
  }

  return result;
}

const L = [1, 2, 3, 4, 5];

function sum(i, j) {
  return query(makeSegmentTree(L), i, j-1);
}

console.log(sum(1, 3)); // expected 5
