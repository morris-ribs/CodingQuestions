/*
  We can think about the array as consisting of two parts:

  - the part before the slice, which we will call A, and
  - the part after, which we will call B

  We are looking for a way to turn AB into BA, but without actually slicing. Is this possible?

  It turns out that it is! We can first reverse the elements in A to create A', and reverse the elements in B to create B'. Finally, we can reverse the entire array, which will give us the desired result in O(n) time and no extra space.

  To give a concrete example, let's say we want to rotate [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] by 3, which will have the same effect as slicing [7, 8, 9] and placing it in front. We first rotate the individual parts, creating:

  [6, 5, 4, 3, 2, 1, 0, 9, 8, 7]

  Finally, we reverse the entire array, to create [7, 8, 9, 0, 1, 2, 3, 4, 5, 6].
*/

function reverse(array=[], left, right) {
  while (left < right) {
    const aux = array[left];
    array[left] = array[right];
    array[right] = aux;
    left++;
    right--;
  }
  return array;
}

function rotate(array=[], k=0) {
  const n = array.length;
  array = reverse(array, 0, n-k-1);
  array = reverse(array, n - k, n - 1);
  array = reverse(array, 0, n - 1);
  return array;
}

console.log(rotate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // expected [7, 8, 9, 0, 1, 2, 3, 4, 5, 6]