/**
 * The brute force approach here would be to iterate over every contiguous subarray and calculate its sum, keeping track of the largest one seen.
 * This would run in O(N^3) time. How can we make this faster?

  We can work backwards from our desired solution by iterating over the array and looking at the maximum possible subarray that can be made ending at each index. At each index, either we can include that element in our sum or we exclude it.

  We can then keep track of the maximum subarray we've seen so far in a variable maxSoFar, compute the maximum subarray that includes x at each iteration, and choose whichever one is bigger.
 */

function maxSubarraySum(arr) {
  let maxEndingHere = 0;
  let maxSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    maxEndingHere = Math.max(x, maxEndingHere + x);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

console.log(maxSubarraySum([34, -50, 42, 14, -5, 86])); // expected 137
console.log(maxSubarraySum([-5, -1, -8, -9])); // expected 0