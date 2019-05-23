/*
We can sort a linked list in O(n log n) by doing something like merge sort:

Split the list in half by using fast and slow pointers.
Recursively sort each half list (base case: when size of list is 1).
Merge the sorted halves together by using the standard merge algorithm.
However, since we divide the list in half and recursively sort it, the function call stack can grow and use up to log n space. We want to do this in constant space.

Since the problem here comes from the call stack, we can transform the algorithm into an iterative one and keep track of the array indices ourselves to use only constant space. We can do this by merging blocks at a time from the bottom-up. Let k be equal to 1. Then we'll merge lists of size k into lists of size 2k. Then double k and repeat, until there are no more merges left to be done.

As an example, consider the linked list 8 -> 6 -> 3 -> 21 -> 12 -> 20 -> 23 -> 5.

After the first pass, we'll combine all pairs so that they're sorted:

6 -> 8 -> 3 -> 21 -> 12 -> 20 -> 5 -> 23

And then all groups of 4:

3 -> 6 -> 8 -> 21 -> 5 -> 12 -> 20 -> 23

And then finally the entire list:

3 -> 5 -> 6 -> 8 -> 12 -> 20 -> 21 -> 23
*/
class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

function sort(head) {
  if (!head) {
    return head;
  }

  let k = 1;
  while (true) {
    let first = head;
    head = null;
    let tail = null;

    let merges = 0;
    while (!!first) {
      merges++;

      // Move second `k' steps forward.
      second = first;
      let firstSize = 0;
      let i = 0;
      while (i < k) {
        firstSize++;
        second = second.next;
        if (second == null) {
          break;
        }
        i++;
      }

      // Merge lists first and second.
      let secondSize = k;
      while (firstSize > 0 || (secondSize > 0 && second != null)) {
        let e = null;
        if (firstSize === 0) {
          e = second;
          second = second.next;
          secondSize--;
        } else if (secondSize === 0 || second == null) {
          e = first;
          first = first.next;
          firstSize--;
        } else if (first.val <= second.val) {
          e = first;
          first = first.next;
          firstSize--;
        } else {
          e = second;
          second = second.next;
          secondSize--;          
        }

        if (tail != null) {
          tail.next = e;
        } else {
          head = e;
        }
        tail = e;
      }
      first = second;
    }
    tail.next = null;
    if (merges <= 1) {
      return head;
    }
    k *= 2;
  }
}

// 4 -> 1 -> -3 -> 99
let linkedList = new Node(4, new Node(1, new Node(-3, new Node(99))));
console.log(sort(linkedList));// expected -3 -> 1 -> 4 -> 99

// 8 -> 6 -> 3 -> 21 -> 12 -> 20 -> 23 -> 5
linkedList = new Node(8, new Node(6, new Node(3, new Node(21, new Node(12, new Node(20, new Node(23, new Node(5))))))));
console.log(sort(linkedList));// expected 3 -> 5 -> 6 -> 8 -> 12 -> 20 -> 21 -> 23